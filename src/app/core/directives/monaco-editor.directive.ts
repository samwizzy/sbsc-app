import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { first, fromEvent } from 'rxjs';
import * as monaco from 'monaco-editor';
import { MonacoEditorService } from '../services/monaco-editor.service';

type Suggestion = {
  label: string;
  value?: string;
  type: string;
};

const suggestionsList: Suggestion[] = [
  {
    label: 'employees',
    type: 'Object',
  },
];

const options: monaco.editor.IStandaloneEditorConstructionOptions = {
  minimap: { enabled: false },
  formatOnPaste: true,
  formatOnType: true,
  roundedSelection: true,
  smoothScrolling: true,
  automaticLayout: true,
  contextmenu: false,
  dragAndDrop: true,
  fontSize: 12,
  padding: { top: 4, bottom: 4 },

  /* @Input variables */
  theme: 'vs-dark',
  language: 'json',
  value: 'Hello World',
  readOnly: false,
  wordWrap: 'on',
  lineNumbers: 'on',
  scrollBeyondLastLine: true,
  tabSize: 2,
  folding: true,
};

@Directive({
  selector: '[appMonacoEditor]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MonacoEditorDirective,
      multi: true,
    },
  ],
})
export class MonacoEditorDirective implements ControlValueAccessor, AfterViewInit {
  onChange!: (value: any) => void;
  onTouched!: () => void;

  code = `function x() {
    console.log("Hello world!");
  }`;

  @Input() value!: string;
  @Output() changeEvent = new EventEmitter();

  /**
   * Editor properties
   */
  editor!: monaco.editor.IStandaloneCodeEditor;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private monacoEditorService: MonacoEditorService
  ) {}

  ngAfterViewInit(): void {
    this.initializeEditor();

    this.onResizeEditor();
  }

  ngOnChanges(changes: SimpleChanges) {
    const value = changes['value'].currentValue;
    this.writeToEditor(value);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  handleChange(event: any) {
    const value = event;

    this.onChange(value);
  }

  /**
   * Editor methods
   */
  initializeEditor() {
    if (!this.monacoEditorService.loaded) {
      this.monacoEditorService.loadingFinished.pipe(first()).subscribe(() => {
        this.editor = (<any>window).monaco.editor.create(this.elementRef.nativeElement, options);

        this.writeToEditor(this.value);
        // this.writeToEditor(this.code);

        this.addGlobalVariables();

        this.addSuggestions(suggestionsList);
      });

      return;
    }
  }

  writeToEditor(value?: string) {
    if (!this.editor || value === undefined || value === null) {
      return;
    }

    this.editor.getModel()?.setValue(value);
  }

  addGlobalVariables() {
    (<any>window).monaco.languages.typescript.typescriptDefaults.addExtraLib(
      `
      declare var MY_GLOBAL_VAR: string;
      declare var ANOTHER_GLOBAL_VAR: number;
    `,
      'filename/global.d.ts'
    );
  }

  addSuggestions(suggestionList: Suggestion[]) {
    (<any>window).monaco.languages.registerCompletionItemProvider('javascript', {
      provideCompletionItems: function (model: any, position: any) {
        const word = model.getWordUntilPosition(position);
        const range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn,
        };

        const suggestions = suggestionList.map((suggestion) => ({
          label: suggestion.label,
          kind: (<any>window).monaco.languages.CompletionItemKind.Variable,
          insertText: suggestion.label,
          range: range,
          detail: suggestion.type,
        }));

        return {
          suggestions: suggestions,
        };
      },
    });
  }

  onResizeEditor() {
    fromEvent(window, 'resize')
      .pipe()
      .subscribe(() => {
        this.editor?.layout();
      });
  }
}

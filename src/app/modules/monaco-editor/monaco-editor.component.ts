import { Component } from '@angular/core';
import * as monaco from 'monaco-editor';
import { NgxEditorModel } from 'ngx-monaco-editor-v2';
import { concatMap, delay, from, of } from 'rxjs';

@Component({
  selector: 'app-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.scss'],
})
export class MonacoEditorComponent {
  editorInstance!: monaco.editor.IStandaloneCodeEditor;

  editorOptions = {
    theme: 'vs-dark',
    language: 'json',
    tabSize: 2,
    automaticLayout: true,

    /** other options */
    // acceptSuggestionOnCommitCharacter: true,
    // acceptSuggestionOnEnter: 'on',
    // accessibilitySupport: 'auto',
    // autoIndent: false,
    // codeLens: true,
    // colorDecorators: true,
    // contextmenu: true,
    // cursorBlinking: 'blink',
    // cursorSmoothCaretAnimation: false,
    // cursorStyle: 'line',
    // disableLayerHinting: false,
    // disableMonospaceOptimizations: false,
    // dragAndDrop: false,
    // fixedOverflowWidgets: false,
    // folding: true,
    // foldingStrategy: 'auto',
    // fontLigatures: false,
    // formatOnPaste: false,
    // formatOnType: false,
    // hideCursorInOverviewRuler: false,
    // highlightActiveIndentGuide: true,
    // links: true,
    // mouseWheelZoom: false,
    // multiCursorMergeOverlapping: true,
    // multiCursorModifier: 'alt',
    // overviewRulerBorder: true,
    // overviewRulerLanes: 2,
    // quickSuggestions: true,
    // quickSuggestionsDelay: 100,
    // readOnly: false,
    // renderControlCharacters: false,
    // renderFinalNewline: true,
    // renderIndentGuides: true,
    // renderLineHighlight: 'all',
    // renderWhitespace: 'none',
    // revealHorizontalRightPadding: 30,
    // roundedSelection: true,
    // rulers: [],
    // scrollBeyondLastColumn: 5,
    // scrollBeyondLastLine: true,
    // selectOnLineNumbers: true,
    // selectionClipboard: true,
    // selectionHighlight: true,
    // showFoldingControls: 'mouseover',
    // smoothScrolling: false,
    // suggestOnTriggerCharacters: true,
    // wordBasedSuggestions: true,
    // wordSeparators: '~!@#$%^&*()-=+[{]}|;:\'",.<>/?',
    // wordWrap: 'off',
    // wordWrapBreakAfterCharacters: '\t})]?|&,;',
    // wordWrapBreakBeforeCharacters: '{([+',
    // wordWrapBreakObtrusiveCharacters: '.',
    // wordWrapColumn: 80,
    // wordWrapMinified: true,
    // wrappingIndent: 'none',
  };

  employees = [
    {
      id: 1,
      name: 'Samuel Okeke',
      email: 'sam@gmail.com',
      age: 33,
      address: "6219 Baker Divide\nNew Jacob, DC 44270",
    },
    {
      id: 2,
      name: 'Paul Okeke',
      email: 'paul@gmail.com',
      age: 28,
      address: "6219 Baker Divide\n New Jacob, DC 44270",
    },
    {
      id: 3,
      name: 'David Okeke',
      email: 'david@gmail.com',
      age: 30,
      address: "6219 Baker Divide\n New Jacob, DC 44270",
    },
  ];

  code: string =
    'function x() {\n  console.log("Hello world!");\n} \n\nconst data = {\n  id: 1,\n  name: "Samuel",\n  email: "sam@gmail.com", \n  age: 32\n}';

  value = ``;

  json = `{
    "last_name": "Campbell",
    "phone": "001-317-737-6664x300",
    "first_name": "Leslie",
    "birth_date": "1986-05-15T00:00:00",
    "salary": 13500,
    "department": "IT",
    "created_at": "2024-05-19T07:51:11.028065",
    "email": "leslie.campbell@boringapi.com",
    "id": 1199,
    "address": "6219 Baker Divide New Jacob, DC 44270",
    "gender": "female",
    "experience": 19,
    "is_married": true,
    "updated_at": "2024-05-19T07:51:11.028065"
  }`;

  jsonCode: string = `{
    "name": "Angular",
    "version": "15.2.3",
    "features": ["monaco-editor", "json-editing"]
  }`;

  editorModel: NgxEditorModel = {
    language: 'json',
    value: this.json,
  };

  ngOnInit() {
    from(this.employees)
      .pipe(concatMap((emp) => of(emp).pipe(delay(10000))))
      .subscribe((emp) => {
        this.editorModel = {
          language: 'json',
          value: JSON.stringify(emp, null, 2)
        }
      });
  }

  onInit(editor: monaco.editor.IStandaloneCodeEditor) {
    this.editorInstance = editor;
    //this.formatDocument(); // Automatically format on load
  }

  formatDocument() {
    if (this.editorInstance) {
      this.editorInstance.getAction('editor.action.formatDocument')?.run();
    }
  }

  onEditorChange(value: any) {
    this.formatDocument(); // Optionally format on every change
    console.log('Updated JSON:', value);
  }

  registerCustomCompletion() {
    // (<any>window).monaco.languages.registerCompletionItemProvider('javascript', {
    //   provideCompletionItems: function (model: any, position: any) {
    //     const word = model.getWordUntilPosition(position);
    //     const range = {
    //       startLineNumber: position.lineNumber,
    //       endLineNumber: position.lineNumber,
    //       startColumn: word.startColumn,
    //       endColumn: word.endColumn,
    //     };
    //     return {
    //       suggestions: [
    //         {
    //           label: 'MY_CUSTOM_VAR',
    //           kind: (<any>window).monaco.languages.CompletionItemKind.Variable,
    //           insertText: 'MY_CUSTOM_VAR',
    //           range: range,
    //         },
    //         {
    //           label: 'ANOTHER_CUSTOM_VAR',
    //           kind: (<any>window).monaco.languages.CompletionItemKind.Variable,
    //           insertText: 'ANOTHER_CUSTOM_VAR',
    //           range: range,
    //         },
    //       ],
    //     };
    //   },
    // });
  }

  addGlobalVariables() {
    // (<any>window).monaco.languages.typescript.typescriptDefaults.addExtraLib(
    //   `
    //   declare var MY_GLOBAL_VAR: string;
    //   declare var ANOTHER_GLOBAL_VAR: number;
    // `,
    //   'filename/global.d.ts'
    // );
  }
}

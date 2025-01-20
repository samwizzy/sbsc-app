import { Component } from '@angular/core';

enum ThemeEnum {
  Material = 'material',
  Dracula = 'dracula',
  Twilight = 'twilight',
  Idea = 'idea',
  Night = 'night',
}

enum ModeEnum {
  Markdown = 'markdown',
  Javascript = 'javascript',
}

@Component({
  selector: 'app-cm-editor',
  templateUrl: './cm-editor.component.html',
  styleUrls: ['./cm-editor.component.scss'],
})
export class CmEditorComponent {
  html = '<div><div><p>creativity at its peak</p></div></div>';
  markdown = '#Heading **Subtitle**';
  json = {
    id: 2,
    name: 'Samuel',
    age: 34,
    email: 'sam@gmail.com',
  };
  content: any = JSON.stringify(this.json, null, 2);
  mode: ModeEnum = ModeEnum.Javascript;
  theme: ThemeEnum = ThemeEnum.Material;

  codeMirrorOptions = {
    mode: { name: 'javascript', json: true },
    theme: this.theme,
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true,
  };
}

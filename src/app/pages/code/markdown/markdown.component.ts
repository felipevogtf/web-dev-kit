import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSplitModule } from 'angular-split';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-markdown',
  standalone: true,
  imports: [CommonModule, AngularSplitModule, MonacoEditorModule, MarkdownModule, FormsModule],
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.scss',
})
export class MarkdownComponent {
  editorOptions = {
    theme: 'vs-dark',
    language: 'markdown',
    fontSize: '16px',
    lineHeight: '21px',
    fontFamily: 'Cascadia Code, system-ui',
    fontLigatures: true,
    minimap: { enabled: false },
    automaticLayout: true,
    wordWrap: true,
    lineNumbers: 'off'
  };

  code: string = '# test \n ## test2'
}

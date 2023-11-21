import { Component } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.scss',
})
export class JavascriptComponent {
  editorOptions = { theme: 'vs-dark', language: 'javascript' };
  code: string = '';
  output: string = '';
  private codeEvent: Subject<string> = new Subject<string>();

  constructor() {
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;
    const originalTable = console.table;

    console.log = (...args) => {
      this.output += args.join(' ') + '\n';
      originalLog.apply(console, args);
    };

    console.error = (...args) => {
      this.output += args.join(' ') + '\n';
      originalError.apply(console, args);
    };

    console.warn = (...args) => {
      this.output += args.join(' ') + '\n';
      originalWarn.apply(console, args);
    };

    console.table = (...args) => {
      args.forEach((table) => {
        if (Array.isArray(table)) {
          this.output += this.arrayToHTMLTable(table) + '<br>';
        } else if (typeof table === 'object') {
          this.output += this.objectToHTMLTable(table) + '<br>';
        }
      });
      originalTable.apply(console, args);
    };

    this.codeEvent.pipe(debounceTime(1000)).subscribe((value) => {
      this.output = '';
      console.clear();

      console.log = (...args) => {
        this.output += args.join(' ') + '\n';
        originalLog.apply(console, args);
      };

      try {
        const executionFunction = new Function(value);
        const result = executionFunction();

        if (result) {
          this.output += result;
        }
      } catch (error: any) {
        this.output += error;
      }
    });
  }

  ngOnInit() {
    // monaco.editor.create(document.getElementById('editor')!, {
    //   value: 'function hello() {\n\talert("Hello, world!");\n}',
    //   language: 'html',
    //   theme: 'vs-dark',
    // });
  }

  executeCode() {
    this.codeEvent.next(this.code);
  }

  arrayToHTMLTable(data: any[]) {
    let html = '<table border="1"><tr>';
    const headers = Object.keys(data[0]);
    headers.forEach((header) => {
      html += `<th>${header}</th>`;
    });
    html += '</tr>';
    data.forEach((item) => {
      html += '<tr>';
      headers.forEach((header) => {
        html += `<td>${item[header]}</td>`;
      });
      html += '</tr>';
    });
    html += '</table>';
    return html;
  }

  objectToHTMLTable(data: any) {
    let html = '<table border="1">';
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        html += `<tr><td>${key}</td><td>${data[key]}</td></tr>`;
      }
    }
    html += '</table>';
    return html;
  }
}

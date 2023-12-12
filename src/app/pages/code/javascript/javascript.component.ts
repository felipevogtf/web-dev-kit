import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AngularSplitModule } from 'angular-split';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { Subject, debounceTime } from 'rxjs';
import { HtmlViewerComponent } from '../../../components/html-viewer/html-viewer.component';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    AngularSplitModule,
    MonacoEditorModule,
    FormsModule,
    HtmlViewerComponent,
  ],
})
export class JavascriptComponent {
  editorOptions = {
    theme: 'vs-dark',
    language: 'javascript',
    fontSize: '16px',
    lineHeight: '21px',
    fontFamily: 'Cascadia Code, system-ui',
    fontLigatures: true,
    minimap: { enabled: false },
  };
  code: string = '';
  output: string = '';
  outputHTML: SafeHtml = this.sanitizerHTML(this.consoleHeaderHTML());
  loading: boolean = true;
  running: boolean = false;
  animationRunning: boolean = false;
  private codeEvent: Subject<string> = new Subject<string>();

  constructor(
    private sanitizer: DomSanitizer,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;

    console.log = (...args) => {
      let logHTML = '';

      args.forEach((arg) => {
        logHTML += this.logToHTML(arg) + '\n';
      });

      this.output += logHTML;

      originalLog.apply(console, args);
    };

    console.error = (...args) => {
      let logHTML = '';

      args.forEach((arg) => {
        logHTML += this.errorToHTML(arg) + '\n';
      });

      this.output += logHTML;

      originalError.apply(console, args);
    };

    console.warn = (...args) => {
      let logHTML = '';

      args.forEach((arg) => {
        logHTML += this.warnToHTML(arg) + '\n';
      });

      this.output += logHTML;

      originalWarn.apply(console, args);
    };

    this.codeEvent.pipe(debounceTime(1000)).subscribe((value) => {
      this.play();
    });
  }

  ngOnInit() {
    this.play();
  }

  executeCode() {
    this.codeEvent.next(this.code);
  }

  clear() {
    this.running = true;
    this.output = '';
    this.outputHTML = this.sanitizerHTML(this.consoleHeaderHTML());
  }

  async play() {
    if (this.running) {
      return;
    }

    this.clear();

    setTimeout(() => {
      const result = this.execute(this.code);
      this.output += result;

      this.outputHTML = this.sanitizerHTML(
        this.consoleHeaderHTML() + this.output
      );
      this.running = false;
    }, 300);
  }

  execute(value: string): string {
    let data = '';
    try {
      const executionFunction = new Function(value);
      const result = executionFunction();

      if (result) {
        if (typeof result === 'object') {
          data = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
        } else {
          data = `<p style="padding: 0px 20px;">${result}</p>`;
        }
      }
    } catch (error: any) {
      data = this.errorToHTML(error) + '\n';
    }

    return data;
  }

  consoleHeaderHTML() {
    return `
    <p
      style="
        display: flex;
        flex-direction: row;
        column-gap: 20px;
        padding: 0px 20px;
        color: var(--color-light-contrast);
      "
    >
      <i class="fa-solid fa-chevron-right"></i>
      <span>Consola</span>
    </p>
    `;
  }

  logToHTML(value: string) {
    let log = '';

    if (typeof value === 'object') {
      log = `<pre style="margin: 0;">${JSON.stringify(value, null, 2)}</pre>`;
    } else {
      log = `<span>${value}</span>`;
    }

    return `
    <div
      style="
        margin: 10px 0px;
        display: flex;
        flex-direction: row;
        column-gap: 20px;
        padding: 20px;
        background-color: var(--color-light);
        color: var(--color-light-contrast);
        border-radius: var(--base-radius);
      "
    >
      <i class="fa-solid fa-chevron-right"></i>
      ${log}
    </div>
    `;
  }

  errorToHTML(value: string) {
    let log = '';

    if (typeof value === 'object') {
      log = `<pre style="margin: 0;">${JSON.stringify(value, null, 2)}</pre>`;
    } else {
      log = `<span>${value}</span>`;
    }

    return `
    <div
      style="
        margin: 10px 0px;
        display: flex;
        flex-direction: row;
        column-gap: 20px;
        padding: 20px;
        background-color: var(--color-danger);
        color: var(--color-danger-contrast);
        border-radius: var(--base-radius);
      "
    >
      <i class="fa-solid fa-xmark"></i>
      ${log}
    </div>
    `;
  }

  warnToHTML(value: string) {
    let log = '';

    if (typeof value === 'object') {
      log = `<pre style="margin: 0;">${JSON.stringify(value, null, 2)}</pre>`;
    } else {
      log = `<span>${value}</span>`;
    }

    return `
    <div
      style="
        margin: 10px 0px;
        display: flex;
        flex-direction: row;
        column-gap: 20px;
        padding: 20px;
        background-color: var(--color-warning);
        color: var(--color-warning-contrast);
        border-radius: var(--base-radius);
      "
    >
      <i class="fa-solid fa-triangle-exclamation"></i>
      ${log}
    </div>
    `;
  }

  sanitizerHTML(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

  onMonacoEditorInit(event: any): void {
    this.loading = false;
    this.changeDetectorRef.detectChanges();
  }

  async copyClipboard() {
    if (!this.code || this.animationRunning) {
      return;
    }

    try {
      await navigator.clipboard.writeText(this.code);
      this.changeIcon();
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  async changeIcon() {
    this.animationRunning = true;
    await this.delay(1000);
    this.animationRunning = false;
  }

  delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

import { ChangeDetectorRef, Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.scss',
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
      this.output += this.logToHTML(args.join(' ')) + '\n';
      originalLog.apply(console, args);
    };

    console.error = (...args) => {
      this.output += this.errorToHTML(args.join(' ')) + '\n';
      originalError.apply(console, args);
    };

    console.warn = (...args) => {
      this.output += this.warnToHTML(args.join(' ')) + '\n';
      originalWarn.apply(console, args);
    };

    this.codeEvent.pipe(debounceTime(1000)).subscribe((value) => {
      this.play();
    });
  }

  ngOnInit() {}

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
        data = `<p style="padding: 0px 20px;">${result}</p>` + '\n';
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
    return `
    <p
      style="
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
      <span>${value}</span>
    </p>
    `;
  }

  errorToHTML(value: string) {
    return `
    <p
      style="
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
      <span>${value}</span>
    </p>
    `;
  }

  warnToHTML(value: string) {
    return `
    <p
      style="
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
      <span>${value}</span>
    </p>
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

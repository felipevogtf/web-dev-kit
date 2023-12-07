import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { AngularSplitModule } from 'angular-split';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-markdown',
  standalone: true,
  imports: [
    CommonModule,
    AngularSplitModule,
    MonacoEditorModule,
    MarkdownModule,
    FormsModule,
  ],
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
    lineNumbers: 'off',
  };

  private inputEvent: Subject<string> = new Subject<string>();
  code: string = `# Ejemplo de Markdown 😊🚀\n\n## Subtítulos y Listas\n\nTexto normal con **énfasis** y *cursiva*.\n\nLista no ordenada \n- Elemento 1 🌟\n- Elemento 2 📚\n  - Elemento anidado 🌿\n\nLista ordenada:\n1. Primer ítem 🥇\n2. Segundo ítem 🎯\n3. Tercer ítem 💡\n\n## Enlaces e Imágenes\n\nEnlaces [como este](https://www.ejemplo.com) 😎🔗.\n\nImágenes ![nombre de imagen](favicon.ico)\n\n## Bloque de Código\n\nBloque de código en JavaScript:\n\`\`\`\nfunction saludar() {\n  console.log('¡Hola, mundo! 🌍');\n}\nsaludar();\n\`\`\`\n\n## Emojis en Texto y Listas de Tareas\n\nAquí hay algunos emojis en el texto: 😄✨🌟.\n\nLista de tareas:\n- [x] Tarea completada ✔️\n- [ ] Tarea pendiente ❌
`;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.inputEvent.pipe(debounceTime(500)).subscribe((value) => {
      this.updateQueryParam();
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const data = params['data'];
      if (data) {
        const decodedData = atob(data);
        const decodedCode = decodeURIComponent(decodedData);
        this.code = decodedCode;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['../']);
  }

  updateQueryParam(): void {
    const encodedCode = encodeURIComponent(this.code);
    const data = btoa(encodedCode);
    const currentUrl = this.location.path();
    const urlSearchParams = new URLSearchParams(
      this.location.path().split('?')[1]
    );

    if (urlSearchParams.has('data')) {
      urlSearchParams.set('data', data);
    } else {
      urlSearchParams.append('data', data);
    }

    const newUrl = `${currentUrl.split('?')[0]}?${urlSearchParams.toString()}`;

    this.location.go(newUrl);
  }

  save() {
    this.inputEvent.next(this.code);
  }

  generateFile(): void {
    if (this.code) {
      const blob = new Blob([this.code], { type: 'text/markdown' });
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'data.md';

      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }
  }
}

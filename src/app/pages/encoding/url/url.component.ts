import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CopyTextareaComponent } from '@components/copy-textarea/copy-textarea.component';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrl: './url.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, CopyTextareaComponent],
})
export class UrlComponent {
  encodeText: string = '';
  decodeText: string = '';

  constructor() {}

  encode() {
    this.encodeText = this.encodeToURI(this.decodeText);
  }

  decode() {
    try {
      this.decodeText = this.decodeFromURI(this.encodeText);
    } catch (e) {
      console.log('No se pudo decodificar');
    }
  }

  encodeToURI(text: string): string {
    return encodeURIComponent(text);
  }

  decodeFromURI(text: string): string {
    return decodeURIComponent(text);
  }
}

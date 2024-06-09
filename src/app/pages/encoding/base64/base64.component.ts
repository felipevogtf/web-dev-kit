import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CopyTextareaComponent } from '@components/copy-textarea/copy-textarea.component';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrl: './base64.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, CopyTextareaComponent],
})
export class Base64Component {
  encodeText: string = '';
  decodeText: string = '';

  constructor() {}

  encode() {
    this.encodeText = this.encodeToBase64(this.decodeText);
  }

  decode() {
    try {
      this.decodeText = this.decodeFromBase64(this.encodeText);
    } catch (e) {
      console.log('No se pudo decodificar');
    }
  }

  encodeToBase64(text: string): string {
    return btoa(text);
  }

  decodeFromBase64(text: string): string {
    return atob(text);
  }
}

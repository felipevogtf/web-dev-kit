import { Component } from '@angular/core';

@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrl: './base64.component.scss',
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

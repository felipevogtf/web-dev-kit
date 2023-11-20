import { Component } from '@angular/core';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrl: './url.component.scss',
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

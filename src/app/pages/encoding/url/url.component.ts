import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../../components/input/input.component';
import { TextareaComponent } from '../../../components/textarea/textarea.component';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrl: './url.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, TextareaComponent, InputComponent],
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

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HmacMD5, HmacSHA1, HmacSHA256, HmacSHA512 } from 'crypto-js';
import { InputComponent } from '../../../components/input/input.component';
import { TextareaComponent } from '../../../components/textarea/textarea.component';

@Component({
  selector: 'app-hmac',
  templateUrl: './hmac.component.html',
  styleUrl: './hmac.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, TextareaComponent, InputComponent],
})
export class HmacComponent {
  hashText: string = '';
  secret: string = '';

  sha256text: string = '';
  sha1text: string = '';
  sha512text: string = '';
  md5text: string = '';
  constructor() {}

  encode() {
    if (!this.hashText || !this.secret) {
      this.empty();
      return;
    }

    this.sha256text = HmacSHA256(this.hashText, this.secret).toString();
    this.sha1text = HmacSHA1(this.hashText, this.secret).toString();
    this.sha512text = HmacSHA512(this.hashText, this.secret).toString();
    this.md5text = HmacMD5(this.hashText, this.secret).toString();
  }

  empty() {
    this.sha256text = '';
    this.sha1text = '';
    this.sha512text = '';
    this.md5text = '';
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MD5, SHA1, SHA256, SHA512 } from 'crypto-js';
import { InputComponent } from '../../../components/input/input.component';
import { TextareaComponent } from '../../../components/textarea/textarea.component';
@Component({
  selector: 'app-hashing',
  templateUrl: './hashing.component.html',
  styleUrl: './hashing.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, TextareaComponent, InputComponent],
})
export class HashingComponent {
  hashText: string = '';
  sha256text: string = '';
  sha1text: string = '';
  sha512text: string = '';
  md5text: string = '';
  constructor() {}

  encode() {
    if (!this.hashText) {
      this.empty();
      return;
    }

    this.sha256text = SHA256(this.hashText).toString();
    this.sha1text = SHA1(this.hashText).toString();
    this.sha512text = SHA512(this.hashText).toString();
    this.md5text = MD5(this.hashText).toString();
  }

  empty() {
    this.sha256text = '';
    this.sha1text = '';
    this.sha512text = '';
    this.md5text = '';
  }
}

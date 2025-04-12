import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'wdk-textarea',
  standalone: true,
  imports: [
    CommonModule,
    LabelComponent
  ],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent {
  @Input() id!: string;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() readonly: boolean;
  @Input() disabled: boolean;

  constructor() {
    this.placeholder = '';
    this.label = '';
    this.disabled = false;
    this.readonly = false;
  }
}

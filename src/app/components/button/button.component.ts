import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'wdk-button',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() color: 'primary' | 'secondary' | 'tertiary' | 'danger';
  @Input() size: 'lg' | 'md' | 'sm';
  @Input() full: boolean;
  @Input() disabled: boolean;

  constructor() {
    this.color = 'primary';
    this.full = false;
    this.disabled = false;
    this.size = 'lg';
  }

  getSizeClass(): string {
    return `wdk-button--${this.size}`;
  }
}

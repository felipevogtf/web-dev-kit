import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'wdk-icon-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
})
export class IconButtonComponent {
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
    return `wdk-icon-button--${this.size}`;
  }
}

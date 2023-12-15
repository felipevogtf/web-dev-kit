import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'icon-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
})
export class IconButtonComponent {
  @Input({ required: true }) icon: string = '';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  onIconButtonClick(): void {
    this.onClick.emit();
  }
}

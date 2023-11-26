import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,
  faClipboard,
} from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'custom-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent implements ControlValueAccessor {
  @Input() id!: string;
  @Input() placeholder: string = '';
  @Input() label: string = '';

  value: string = '';
  iconClip: IconDefinition = faClipboard;
  iconCheck: IconDefinition = faCheck;
  animationRunning: boolean = false;

  constructor() {}

  async copyClipboard() {
    if (!this.value || this.animationRunning) {
      return;
    }

    try {
      await navigator.clipboard.writeText(this.value);
      this.changeIcon();
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  async changeIcon() {
    this.animationRunning = true;
    await this.delay(1000);
    this.animationRunning = false;
  }

  delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Métodos requeridos por ControlValueAccessor
  onChange(_: any): void {}
  onTouched(): void {}

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Puedes implementar la lógica para el estado deshabilitado si es necesario
  }

  onInputChange(event: Event) {
    this.onChange(event);
    this.onTouched();
  }
}

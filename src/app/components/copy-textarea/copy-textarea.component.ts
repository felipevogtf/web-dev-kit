import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { ButtonComponent } from '@components/button/button.component';
import { LabelComponent } from '@components/label/label.component';
import { ClipboardService } from '@services/clipboard.service';

@Component({
  selector: 'wdk-copy-textarea',
  standalone: true,
  imports: [CommonModule, LabelComponent, ButtonComponent, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CopyTextareaComponent),
      multi: true,
    },
  ],
  templateUrl: './copy-textarea.component.html',
  styleUrl: './copy-textarea.component.scss',
})
export class CopyTextareaComponent implements ControlValueAccessor {
  @Input() id!: string;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() readonly: boolean;
  @Input() disabled: boolean;

  value: string = '';

  constructor(
    private clipboardService: ClipboardService
  ) {
    this.placeholder = '';
    this.label = '';
    this.disabled = false;
    this.readonly = false;
  }

  onCopy() {
    this.clipboardService.copyClipboard(this.value);
  }

  // Métodos requeridos por ControlValueAccessor
  onChange: any = () => {};
  onTouched: any = () => {};

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
    // Lógica para establecer el estado deshabilitado si es necesario
  }

  onInputChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.value = newValue;
    this.onChange(newValue);
    this.onTouched();
  }
}

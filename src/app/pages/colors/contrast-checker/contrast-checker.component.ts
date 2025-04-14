import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  getContrast,
  hexIsValid,
  hexToRgb,
  isAccessible,
  WdkColor,
  WdkColorPickerComponent,
  WdkCopyInputComponent,
} from 'wdk-components';

@Component({
  selector: 'app-contrast-checker',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WdkColorPickerComponent,
    WdkCopyInputComponent,
  ],
  templateUrl: './contrast-checker.component.html',
  styleUrl: './contrast-checker.component.scss',
})
export class ContrastCheckerComponent {
  backgroundColor = signal<WdkColor>(new WdkColor(255, 255, 255));
  textColor = signal<WdkColor>(new WdkColor(0, 0, 0));

  backgroundColorInput = new FormControl('#ffffff');
  textColorInput = new FormControl('#000000');

  backgroundColorInputValue = '#ffffff';
  textColorInputValue = '#000000';

  contrast = computed(() => {
    return getContrast(
      this.backgroundColor().getColor(),
      this.textColor().getColor()
    );
  });

  isNormalAccessibleAA = computed(() => {
    return isAccessible(this.contrast(), 'AA', false);
  });

  isNormalAccessibleAAA = computed(() => {
    return isAccessible(this.contrast(), 'AAA', false);
  });

  isLargeAccessibleAA = computed(() => {
    return isAccessible(this.contrast(), 'AA', true);
  });

  isLargeAccessibleAAA = computed(() => {
    return isAccessible(this.contrast(), 'AAA', true);
  });

  backgroundColorChange(color: WdkColor) {
    const wkdColor = color.getColor();
    this.backgroundColor.set(
      new WdkColor(wkdColor[0], wkdColor[1], wkdColor[2])
    );

    this.backgroundColorInputValue = color.toHexString();
  }

  textColorChange(color: WdkColor) {
    const wkdColor = color.getColor();
    this.textColor.set(new WdkColor(wkdColor[0], wkdColor[1], wkdColor[2]));

    this.textColorInputValue = color.toHexString();
  }

  backgroundColorInputChange() {
    const hex = this.backgroundColorInput.value;
    if (hex && hexIsValid(hex)) {
      const [r, g, b] = hexToRgb(hex);
      this.backgroundColor.set(new WdkColor(r, g, b));
    }
  }

  textColorInputChange() {
    const hex = this.textColorInput.value;
    if (hex && hexIsValid(hex)) {
      const [r, g, b] = hexToRgb(hex);
      this.textColor.set(new WdkColor(r, g, b));
    }
  }
}

import { Component, computed, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  generateAnalogousPalette,
  generateComplementaryPalette,
  generateTetradicPalette,
  generateTriadicPalette,
  generateMonochromaticPalette,
  getTextColorForBackground,
  hexIsValid,
  hexToRgb,
  WdkColor,
  WdkColorPickerComponent,
  WdkCopyInputComponent,
} from 'wdk-components';

@Component({
  selector: 'app-palette-generator',
  imports: [
    WdkColorPickerComponent,
    WdkCopyInputComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './palette-generator.component.html',
  styleUrl: './palette-generator.component.scss',
})
export class PaletteGeneratorComponent {
  color = signal<WdkColor>(new WdkColor(255, 255, 255));
  colorInput = new FormControl('#ffffff');
  colorInputValue = '#000000';

  analogousColors = computed(() => {
    const hsl = this.color().toHsl();
    return generateAnalogousPalette(hsl[0], hsl[1], hsl[2]);
  });

  complementaryColors = computed(() => {
    const hsl = this.color().toHsl();
    return generateComplementaryPalette(hsl[0], hsl[1], hsl[2]);
  });

  triadicColors = computed(() => {
    const hsl = this.color().toHsl();
    return generateTriadicPalette(hsl[0], hsl[1], hsl[2]);
  });

  tetradicColors = computed(() => {
    const hsl = this.color().toHsl();
    return generateTetradicPalette(hsl[0], hsl[1], hsl[2]);
  });

  monochromaticColors = computed(() => {
    const hsl = this.color().toHsl();
    return generateMonochromaticPalette(hsl[0], hsl[1], hsl[2]);
  });

  colorChange(color: WdkColor) {
    const wkdColor = color.getColor();
    this.color.set(new WdkColor(wkdColor[0], wkdColor[1], wkdColor[2]));

    this.colorInputValue = color.toHexString();
  }

  colorInputChange() {
    const hex = this.colorInput.value;
    if (hex && hexIsValid(hex)) {
      const [r, g, b] = hexToRgb(hex);
      this.color.set(new WdkColor(r, g, b));
    }
  }

  getTextColor(color: WdkColor): string {
    return getTextColorForBackground(color.r, color.g, color.b).toRgbString();
  }
}

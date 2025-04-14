import { Routes } from '@angular/router';
import { ContrastCheckerComponent } from './contrast-checker/contrast-checker.component';
import { PaletteGeneratorComponent } from './palette-generator/palette-generator.component';

export const colorsRoute: Routes = [
  {
    path: '',
    component: ContrastCheckerComponent,
  },
  {
    path: 'palette-generator',
    component: PaletteGeneratorComponent,
  }
];

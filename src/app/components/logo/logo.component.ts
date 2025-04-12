import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'wdk-logo',
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  @HostBinding('style.font-size') fontSize: string = '1em';
  sizeRatio: number = 1;

  // Relación de aspecto aproximada del SVG, redondeada a 4.22
  private aspectRatio: number = 637.856 / 151.709;

  get calculatedWidth(): string {
    // Ancho calculado basado en el fontSize y el factor de tamaño, manteniendo la relación de aspecto
    return `calc(${this.sizeRatio} * 1em * ${this.aspectRatio})`;
  }

  get calculatedHeight(): string {
    // Altura calculada basada en el fontSize y el factor de tamaño
    return `calc(${this.sizeRatio} * 1em)`;
  }
}

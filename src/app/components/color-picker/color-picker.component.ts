import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'wdk-color-picker',
  imports: [CommonModule],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss',
})
export class ColorPickerComponent {
  @ViewChild('canvas', { static: false })
  canvas!: ElementRef<HTMLCanvasElement>;

  @ViewChild('paletteCanvas', { static: false })
  paletteCanvas!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private ctxPalette!: CanvasRenderingContext2D;

  baseColor: string = '#00f'; // Cambia este valor para usar un color diferente
  isMouseDown: boolean = false;
  currentX: number = 0;
  currentY: number = 0;

  currentColor: string = 'rgb(0,0,0)';

  baseColorX: number = 0;
  baseColorY: number = 0;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const canvasWidth = this.canvas.nativeElement.width;
    const canvasHeight = this.canvas.nativeElement.height;

    this.currentX = 0; // Empieza en la esquina inferior izquierda
    this.currentY = canvasHeight - 1; // En la línea inferior del canvas

    this.ctx = this.canvas.nativeElement.getContext('2d', {
      willReadFrequently: true,
    })!;

    this.drawPalette();
    this.drawPoint(this.currentX, this.currentY);

    this.ctxPalette = this.paletteCanvas.nativeElement.getContext('2d', {
      willReadFrequently: true,
    })!;

    // Base color canvas
    this.drawBaseColorPalette();
    this.drawBaseColorPoint(this.baseColorX, this.baseColorY);
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (x >= 0 && y >= 0 && x < rect.width && y < rect.height) {
      this.isMouseDown = true;
      this.handleMove(event);
      this.applyUnselectableStyles();
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.isMouseDown) {
      this.handleMove(event);
    }
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.isMouseDown = false;
    this.removeUnselectableStyles();
  }

  handleMove(event: MouseEvent): void {
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    // Ajustar las coordenadas para asegurarse de que estén dentro del canvas
    x = Math.max(0, Math.min(x, rect.width - 1)); // Ajuste para que no exceda el ancho del canvas
    y = Math.max(0, Math.min(y, rect.height - 1)); // Ajuste para que no exceda el alto del canvas

    // Continuar manejando el movimiento dentro del canvas
    this.currentX = x;
    this.currentY = y;
    this.getColor(x, y);

    // Redibujar la paleta y el punto en la posición actual
    this.drawPalette();
    this.drawPoint(this.currentX, this.currentY);
  }

  drawPalette(): void {
    const width = this.canvas.nativeElement.width;
    const height = this.canvas.nativeElement.height;

    // Ajustar el inicio del gradiente horizontal al 1% del ancho
    const horizontalGradient = this.ctx.createLinearGradient(
      width * 0.01,
      0,
      width * 0.99,
      0
    );
    horizontalGradient.addColorStop(0, 'white');
    horizontalGradient.addColorStop(1, this.baseColor);

    // Llenar el canvas con el gradiente horizontal ajustado
    this.ctx.fillStyle = horizontalGradient;
    this.ctx.fillRect(0, 0, width, height);

    // Ajustar el inicio del gradiente vertical al 1% del alto
    const verticalGradient = this.ctx.createLinearGradient(
      0,
      height * 0.01,
      0,
      height * 0.99
    );
    verticalGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    verticalGradient.addColorStop(1, 'rgba(0, 0, 0, 1)');

    // Aplicar el gradiente vertical ajustado encima del horizontal
    this.ctx.fillStyle = verticalGradient;
    this.ctx.fillRect(0, 0, width, height);
  }

  drawPoint(x: number, y: number): void {
    const radius = 4;

    // Dibujar el círculo blanco (relleno)
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.closePath();

    // Dibujar el borde negro
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius + 2, 0, Math.PI * 2);
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.closePath();
  }

  drawBaseColorPalette(): void {
    const context = this.ctxPalette;
    const width = this.paletteCanvas.nativeElement.width;
    const height = this.paletteCanvas.nativeElement.height;

    const gradient = context.createLinearGradient(0, 0, 0, height);

    gradient.addColorStop(0.0, 'rgb(255, 0, 0)'); // Rojo
    gradient.addColorStop(0.167, 'rgb(255, 255, 0)'); // Amarillo
    gradient.addColorStop(0.333, 'rgb(0, 255, 0)'); // Verde
    gradient.addColorStop(0.5, 'rgb(0, 255, 255)'); // Cian
    gradient.addColorStop(0.667, 'rgb(0, 0, 255)'); // Azul
    gradient.addColorStop(0.833, 'rgb(255, 0, 255)'); // Magenta
    gradient.addColorStop(1.0, 'rgb(255, 0, 0)'); // Rojo (repetido al final)

    // Aplicar el gradiente vertical
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);
  }

  drawBaseColorPoint(x: number, y: number): void {
    const context = this.ctxPalette;
    const canvasWidth = this.paletteCanvas.nativeElement.width;
    const canvasHeight = this.paletteCanvas.nativeElement.height;

    // Calcular el radio para que el círculo abarque todo el ancho del canvas
    const radius = Math.min(canvasWidth, canvasHeight) / 2;

    // Calcular el centro del canvas
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;

    // Dibujar el círculo blanco (relleno)
    context.beginPath();
    context.arc(centerX, centerY, radius - 2, 0, Math.PI * 2);
    context.strokeStyle = 'white';
    context.lineWidth = 2;
    context.stroke();
    context.closePath();

    // Dibujar el borde negro
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, Math.PI * 2);
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    context.stroke();
    context.closePath();
  }

  getColor(x: number, y: number): void {
    const pixelData = this.ctx.getImageData(x, y, 1, 1).data;
    this.currentColor = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;
  }

  private applyUnselectableStyles(): void {
    this.renderer.setStyle(document.body, 'user-select', 'none');
  }

  private removeUnselectableStyles(): void {
    this.renderer.removeStyle(document.body, 'user-select');
  }
}

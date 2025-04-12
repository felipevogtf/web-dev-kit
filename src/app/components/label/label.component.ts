import { Component, Input } from '@angular/core';

@Component({
  selector: 'wdk-label',
  standalone: true,
  imports: [],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss'
})
export class LabelComponent {
  @Input() id!: string;
  @Input() label: string;

  constructor() {
    this.label = '';
  }
}

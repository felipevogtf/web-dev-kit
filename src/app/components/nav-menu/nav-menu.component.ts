import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nav-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
})
export class NavMenuComponent {
  isToggle: boolean = false;

  constructor() {}

  toggle() {
    this.isToggle = !this.isToggle;
  }
}

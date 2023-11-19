import { Component, HostListener, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'web-dev-kit';
  resizeTimer: any;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.renderer.addClass(document.body, 'resize-animation-stopper');
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.renderer.removeClass(document.body, 'resize-animation-stopper');
    }, 200);
  }
}

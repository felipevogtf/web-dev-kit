import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.scss'
})
export class ModulesComponent {
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

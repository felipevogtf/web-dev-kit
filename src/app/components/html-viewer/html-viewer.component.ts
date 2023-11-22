import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'html-viewer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './html-viewer.component.html',
  styleUrl: './html-viewer.component.scss',
})
export class HtmlViewerComponent {
  @Input() html!: SafeHtml;
  @Input() width!: string;
  @Input() height!: string;

  constructor(private library: FaIconLibrary) {
    this.library.addIcons(faBars);
  }
}

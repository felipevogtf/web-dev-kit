import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LogoComponent } from '@components/logo/logo.component';

@Component({
  selector: 'wdk-toolbar',
  imports: [
    CommonModule,
    LogoComponent
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

}

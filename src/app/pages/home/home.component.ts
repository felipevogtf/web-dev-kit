import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../../models/menu.model';
import MENU_DATA from '../../data/menus.data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { TextareaComponent } from '../../components/textarea/textarea.component';
import { CopyInputComponent } from '../../components/copy-input/copy-input.component';
import { CopyTextareaComponent } from '../../components/copy-textarea/copy-textarea.component';
import { LogoComponent } from '@components/logo/logo.component';
import { IconButtonComponent } from '@components/icon-button/icon-button.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('filterAnimation', [
      transition(':increment', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger(10, [
              animate(
                '200ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(10, [
            animate(
              '200ms ease-out',
              style({ opacity: 0, transform: 'translateY(20px)' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],

  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputComponent,
    ButtonComponent,
    TextareaComponent,
    CopyInputComponent,
    CopyTextareaComponent,
    IconButtonComponent,
    LogoComponent
  ],
})
export class HomeComponent {
  search: string = '';
  filterItems: Menu[] = [];

  submenus: Menu[] = [];

  constructor(private router: Router) {
    this.submenus = MENU_DATA.reduce((acc: Menu[], menu) => {
      if (menu.childs) {
        acc.push(...menu.childs);
      }
      return acc;
    }, []);

    console.log(this.submenus);
  }

  ngOnInit() {
    setTimeout(() => {
      this.filterItems = this.submenus;
    }, 100);
  }

  filter() {
    const results = this.submenus.filter(
      item =>
        item.title
          .toLocaleLowerCase()
          .includes(this.search.toLocaleLowerCase()) ||
        item.description?.toLowerCase().includes(this.search.toLowerCase())
    );
    this.filterItems = results;
    const newTotal = this.filterItems.length;
  }

  navigate(route?: string) {
    this.router.navigate([route]);
  }

  test() {
    console.log('test');
  }
}

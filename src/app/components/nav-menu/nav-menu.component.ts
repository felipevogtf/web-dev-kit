import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { LogoComponent } from '@components/logo/logo.component';
import MENU_DATA from '@data/menus.data';
import { Menu } from '@models/menu.model';

@Component({
  selector: 'nav-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, LogoComponent],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('150ms ease-in', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('150ms ease-out', style({ height: 0, opacity: 0 })),
      ]),
    ]),

    trigger('openClose', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '0px' })),
      transition('false <=> true', animate(500)),
    ]),
  ],
})
export class NavMenuComponent {
  isToggle: boolean = false;
  menus: Menu[] = MENU_DATA;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkRoute();
      }
    });
  }

  toggle() {
    this.isToggle = !this.isToggle;
  }

  toggleLink(menu: any) {
    const closeMenus = () => {
      let menusToggles = this.menus.filter(item => item.toggle && item != menu);
      for (const item of menusToggles) {
        item.toggle = false;
      }
    };

    closeMenus();
    menu.toggle = !menu.toggle;
  }

  checkRoute() {
    const closeMenus = () => {
      let menusToggles = this.menus.filter(item => item.toggle);
      for (const item of menusToggles) {
        item.toggle = false;
      }
    };

    closeMenus();

    const routeSearch = this.router.url.split('?')[0];

    const filterMenus = this.menus.filter(menu => {
      if (menu.link === routeSearch) {
        return true;
      }
      if (menu.childs) {
        return menu.childs.some(child => child.link === routeSearch);
      }
      return false;
    });
    const menu = filterMenus[0];
    menu.toggle = true;
  }
}

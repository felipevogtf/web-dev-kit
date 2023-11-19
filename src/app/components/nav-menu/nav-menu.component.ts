import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faAngleDown,
  faBars,
  faCode,
  faKey,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-menu',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
})
export class NavMenuComponent {
  isToggle: boolean = false;

  menus = [
    {
      id: 1,
      icon: faKey,
      title: 'Encodode / Decode',
      toggle: false,
      childs: [
        {
          icon: faLock,
          title: 'Base 64',
          link: '/encoding/base64',
        },
        {
          icon: faCode,
          title: 'Base 64',
          link: '/',
        },
      ],
    },
    {
      id: 2,
      icon: faCode,
      title: 'Encodode / Decode',
      toggle: false,
      childs: [
        {
          icon: faCode,
          title: 'Base 64',
          link: '/',
        },
        {
          icon: faCode,
          title: 'Base 64',
          link: '/',
        },
        {
          icon: faCode,
          title: 'Base 64',
          link: '/',
        },
      ],
    },
    {
      id: 3,
      icon: faCode,
      title: 'test',
      toggle: false,
      childs: null,
    },
  ];

  constructor(private library: FaIconLibrary, private router: Router) {
    this.library.addIcons(faAngleDown, faBars);
  }

  toggle() {
    this.isToggle = !this.isToggle;
  }

  test(menu: any) {
    if (menu.childs) {
      let menusToggles = this.menus.filter((item) => item.toggle);
      menu.toggle = !menu.toggle;

      for (const item of menusToggles) {
        item.toggle = false;
      }
      return;
    }

    if (menu.link) {
      this.router.navigate([menu.link]);
    }
  }
}

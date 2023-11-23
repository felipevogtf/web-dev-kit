import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
})
export class NavMenuComponent {
  isToggle: boolean = false;

  menus = [
    {
      id: 1,
      icon: 'fa-solid fa-home',
      title: 'Inicio',
      link: '/',
    },
    {
      id: 2,
      icon: 'fa-solid fa-arrow-right-arrow-left',
      title: 'Encodode / Decode',
      toggle: false,
      childs: [
        {
          icon: 'fa-solid fa-arrow-right-arrow-left',
          title: 'Base 64',
          link: '/encoding/base64',
        },
        {
          icon: 'fa-solid fa-link',
          title: 'URL',
          link: '/encoding/url',
        },
      ],
    },
    {
      id: 3,
      icon: 'fa-solid fa-lock',
      title: 'Hashing',
      toggle: false,
      childs: [
        {
          icon: 'fa-solid fa-fingerprint',
          title: 'Hash',
          link: '/hashing',
        },
        {
          icon: 'fa-solid fa-key',
          title: 'HMAC',
          link: '/hashing/hmac',
        },
      ],
    },
    {
      id: 4,
      icon: 'fa-solid fa-code',
      title: 'Code',
      toggle: false,
      childs: [
        {
          icon: 'fa-brands fa-square-js',
          title: 'Javascript',
          link: '/code/javascript',
        },
      ],
    },
  ];

  constructor(private router: Router) {}

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

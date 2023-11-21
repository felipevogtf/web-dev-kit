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
  faGlobe,
  faHashtag,
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
          icon: faGlobe,
          title: 'URL',
          link: '/encoding/url',
        },
      ],
    },
    {
      id: 2,
      icon: faHashtag,
      title: 'Hashing',
      toggle: false,
      childs: [
        {
          icon: faHashtag,
          title: 'Hash',
          link: '/hashing',
        },
        {
          icon: faHashtag,
          title: 'HMAC',
          link: '/hashing/hmac',
        },
      ],
    },
    {
      id: 3,
      icon: faCode,
      title: 'Code',
      toggle: false,
      childs: [
        {
          icon: faCode,
          title: 'Javascript',
          link: '/code/javascript',
        },
      ],
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

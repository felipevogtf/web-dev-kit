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
})
export class HomeComponent {
  search: string = '';
  filterItems: any = [];

  tools = [
    {
      link: '/encoding/base64',
      faIcon: 'fa-solid fa-arrow-right-arrow-left',
      title: 'Base64 Conversion',
      description: 'Codifica y decodifica texto en Base64',
    },
    {
      link: '/encoding/url',
      faIcon: 'fa-solid fa-link',
      title: 'URI Conversion',
      description: 'Codifica y decodifica texto en URI',
    },
    {
      link: '/hashing/hmac',
      faIcon: 'fa-solid fa-key',
      title: 'HMAC Generator',
      description:
        'Genera códigos HMAC a partir de texto para seguridad avanzada',
    },
    {
      link: '/hashing',
      faIcon: 'fa-solid fa-fingerprint',
      title: 'Hash Generator',
      description:
        'Genera hashes desde texto usando MD5, SHA-1, SHA-256 y SHA-512',
    },
    {
      link: '/code/javascript',
      faIcon: 'fa-brands fa-square-js',
      title: 'JS Compiler',
      description: 'Compila código JavaScript de manera rápida y sencilla',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.filterItems = this.tools;
    }, 100);
  }

  filter() {
    const results = this.tools.filter(
      (item) =>
        item.title
          .toLocaleLowerCase()
          .includes(this.search.toLocaleLowerCase()) ||
        item.description.toLowerCase().includes(this.search.toLowerCase())
    );

    this.filterItems = results;
    const newTotal = this.filterItems.length;
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}

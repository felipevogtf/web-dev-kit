import { Menu } from '../models/menu.model';

const MENU_DATA: Menu[] = [
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
        description: 'Codifica y decodifica texto en Base64',
      },
      {
        icon: 'fa-solid fa-image',
        title: 'Img to Base 64',
        link: '/encoding/base64image',
        description: 'Codifica y decodifica imagenes en Base64',
      },
      {
        icon: 'fa-solid fa-link',
        title: 'URL',
        link: '/encoding/url',
        description: 'Codifica y decodifica texto en URI',
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
        description:
          'Genera códigos HMAC a partir de texto para seguridad avanzada',
      },
      {
        icon: 'fa-solid fa-key',
        title: 'HMAC',
        link: '/hashing/hmac',
        description:
          'Genera hashes desde texto usando MD5, SHA-1, SHA-256 y SHA-512',
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
        description: 'Compila código JavaScript de manera rápida y sencilla',
      },
    ],
  },
];

export default MENU_DATA;

import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'encoding',
    loadChildren: () =>
      import('./pages/encoding/encoding.module').then((m) => m.EncodingModule),
  },
  {
    path: 'hashing',
    loadChildren: () =>
      import('./pages/hashing/hashing.module').then((m) => m.HashingModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

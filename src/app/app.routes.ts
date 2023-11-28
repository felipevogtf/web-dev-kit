import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MarkdownComponent } from './pages/code/markdown/markdown.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/modules.module').then((m) => m.ModulesModule),
  },
  {
    path: 'md',
    component: MarkdownComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

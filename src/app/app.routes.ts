import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MarkdownComponent } from './pages/code/markdown/markdown.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/modules.routes').then((m) => m.modulesRoutes),
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

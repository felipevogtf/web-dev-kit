import { Routes } from '@angular/router';
import { JavascriptComponent } from '@pages/code/javascript/javascript.component';
import { MarkdownComponent } from '@pages/code/markdown/markdown.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Web Dev Kits',
    loadChildren: () =>
      import('./modules/modules.routes').then(m => m.modulesRoutes),
  },
  {
    path: 'md',
    title: 'Markdown Editor',
    component: MarkdownComponent,
  },
  {
    path: 'javascript',
    title: 'Javascript Compiler',
    component: JavascriptComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

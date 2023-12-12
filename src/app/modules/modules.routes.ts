import { Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';

export const modulesRoutes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./../pages/home/home.routes').then((m) => m.homeRoutes),
      },
      {
        path: 'encoding',
        loadChildren: () =>
          import('./../pages/encoding/encoding.routes').then(
            (m) => m.encodingRoutes
          ),
      },
      {
        path: 'hashing',
        loadChildren: () =>
          import('./../pages/hashing/hashing.routes').then(
            (m) => m.hashingRouter
          ),
      },
      {
        path: 'code',
        loadChildren: () =>
          import('./../pages/code/code.routes').then((m) => m.codeRoutes),
      },
    ],
  },
];

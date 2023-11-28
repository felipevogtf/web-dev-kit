import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesComponent } from './modules.component';
import { Routes, RouterModule } from '@angular/router';
import { NavMenuComponent } from '../components/nav-menu/nav-menu.component';

const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./../pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'encoding',
        loadChildren: () =>
          import('./../pages/encoding/encoding.module').then(
            (m) => m.EncodingModule
          ),
      },
      {
        path: 'hashing',
        loadChildren: () =>
          import('./../pages/hashing/hashing.module').then(
            (m) => m.HashingModule
          ),
      },
      {
        path: 'code',
        loadChildren: () =>
          import('./../pages/code/code.module').then((m) => m.CodeModule),
      },
    ],
  },
];

@NgModule({
  declarations: [ModulesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), NavMenuComponent],
})
export class ModulesModule {}

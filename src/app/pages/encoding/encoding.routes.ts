import { Routes } from '@angular/router';
import { Base64Component } from './base64/base64.component';
import { Base64imageComponent } from './base64image/base64image.component';
import { UrlComponent } from './url/url.component';

export const encodingRoutes: Routes = [
    {
      path: '',
      redirectTo: 'base64',
      pathMatch: 'full',
    },
    {
      path: 'base64',
      component: Base64Component,
    },
    {
      path: 'base64image',
      component: Base64imageComponent,
    },
    {
      path: 'url',
      component: UrlComponent,
    },
  ];
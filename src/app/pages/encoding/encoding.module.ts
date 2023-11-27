import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Base64Component } from './base64/base64.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TextareaComponent } from '../../components/textarea/textarea.component';
import { InputComponent } from '../../components/input/input.component';
import { UrlComponent } from './url/url.component';
import { Base64imageComponent } from './base64image/base64image.component';
import { AngularSplitModule } from 'angular-split';

const routes: Routes = [
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

@NgModule({
  declarations: [Base64Component, UrlComponent, Base64imageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    TextareaComponent,
    InputComponent,
    AngularSplitModule,
  ],
})
export class EncodingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Base64Component } from './base64/base64.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TextareaComponent } from '../../components/textarea/textarea.component';
import { InputComponent } from '../../components/input/input.component';
import { UrlComponent } from './url/url.component';

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
    path: 'url',
    component: UrlComponent,
  },
];

@NgModule({
  declarations: [Base64Component, UrlComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    TextareaComponent,
    InputComponent,
  ],
})
export class EncodingModule {}
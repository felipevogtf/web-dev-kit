import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Base64Component } from './base64/base64.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TextareaComponent } from '../../components/textarea/textarea.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'base64',
    pathMatch: 'full'
  },
  {
    path: 'base64',
    component: Base64Component
  }
];


@NgModule({
  declarations: [Base64Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    TextareaComponent
  ]
})
export class EncodingModule { }

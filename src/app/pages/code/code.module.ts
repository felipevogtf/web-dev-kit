import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavascriptComponent } from './javascript/javascript.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { TextareaComponent } from '../../components/textarea/textarea.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'javascript',
    pathMatch: 'full',
  },
  {
    path: 'javascript',
    component: JavascriptComponent,
  },
];

@NgModule({
  declarations: [JavascriptComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MonacoEditorModule.forRoot(),
    TextareaComponent,
  ],
})
export class CodeModule {}

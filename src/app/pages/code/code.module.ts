import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavascriptComponent } from './javascript/javascript.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { TextareaComponent } from '../../components/textarea/textarea.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HtmlViewerComponent } from '../../components/html-viewer/html-viewer.component';
import { AngularSplitModule } from 'angular-split';
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
    MonacoEditorModule,
    TextareaComponent,
    FontAwesomeModule,
    HtmlViewerComponent,
    AngularSplitModule
  ],
})
export class CodeModule {}

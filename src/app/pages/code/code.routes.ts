import { Routes } from "@angular/router";
import { JavascriptComponent } from "./javascript/javascript.component";

export const codeRoutes: Routes = [
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

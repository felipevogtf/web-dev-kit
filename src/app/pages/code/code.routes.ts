import { Routes } from "@angular/router";
import { JavascriptComponent } from "./javascript/javascript.component";
import { RegexTesterComponent } from "./regex-tester/regex-tester.component";

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
  {
    path: 'regex',
    component: RegexTesterComponent,
  },
];

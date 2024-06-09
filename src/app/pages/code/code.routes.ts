import { Routes } from "@angular/router";
import { RegexTesterComponent } from "./regex-tester/regex-tester.component";

export const codeRoutes: Routes = [
  {
    path: '',
    redirectTo: 'regex',
    pathMatch: 'full',
  },
  {
    path: 'regex',
    component: RegexTesterComponent,
  },
];

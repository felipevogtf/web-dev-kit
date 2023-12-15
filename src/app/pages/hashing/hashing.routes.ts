import { Routes } from '@angular/router';
import { HashingComponent } from './hashing/hashing.component';
import { HmacComponent } from './hmac/hmac.component';

export const hashingRouter: Routes = [
  {
    path: '',
    component: HashingComponent,
  },
  {
    path: 'hmac',
    component: HmacComponent,
  },
];

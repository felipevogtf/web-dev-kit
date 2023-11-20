import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashingComponent } from './hashing/hashing.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../components/input/input.component';
import { TextareaComponent } from '../../components/textarea/textarea.component';
import { HmacComponent } from './hmac/hmac.component';

const routes: Routes = [
  {
    path: '',
    component: HashingComponent,
  },
  {
    path: 'hmac',
    component: HmacComponent,
  },
];

@NgModule({
  declarations: [HashingComponent, HmacComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    TextareaComponent,
    InputComponent,
  ],
})
export class HashingModule {}

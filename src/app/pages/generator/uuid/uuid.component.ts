import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '@components/button/button.component';
import { CopyTextareaComponent } from '@components/copy-textarea/copy-textarea.component';
import { InputComponent } from '@components/input/input.component';
import { SelectComponent } from '@components/select/select.component';
import { v1, v3, v4, v5 } from 'uuid';
@Component({
  selector: 'app-uuid',
  imports: [
    CommonModule,
    SelectComponent,
    FormsModule,
    ButtonComponent,
    InputComponent,
    CopyTextareaComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './uuid.component.html',
  styleUrl: './uuid.component.scss',
})
export class UuidComponent {
  uuidVersion: string;
  namespace: string;
  uuidQuantity: FormControl;
  uuids: string;

  descriptions: { [key: string]: string } = {
    v1: 'Generado utilizando la marca de tiempo y la dirección MAC del dispositivo.',
    v3: 'Generado utilizando un hash (MD5) de un espacio de nombres y un identificador único.',
    v4: 'Generado completamente aleatorio utilizando números aleatorios.',
    v5: 'Similar a UUIDv3, pero utiliza un hash más seguro (SHA-1) en lugar de MD5.',
  };

  constructor() {
    this.uuidVersion = 'v4';
    this.uuidQuantity = new FormControl(1, [
      Validators.required,
      Validators.max(100000),
    ]);
    this.namespace = 'hello';
    this.uuids = '';
  }

  ngOnInit() {}

  getDescriptions(): string {
    return this.descriptions[this.uuidVersion];
  }

  generate() {
    if (this.uuidQuantity.invalid) {
      return;
    }

    let uuids = [];

    for (let i = 0; i < this.uuidQuantity.value; i++) {
      let uuid = this.generateUuid();
      uuids.push(uuid);
    }

    this.uuids = uuids.join('\n');
  }

  generateUuid(): string {
    if (this.uuidVersion === 'v1') {
      return this.generateUuidV1();
    }

    if (this.uuidVersion === 'v3') {
      return this.generateUuidV3();
    }

    if (this.uuidVersion === 'v4') {
      return this.generateUuidV4();
    }

    if (this.uuidVersion === 'v5') {
      return this.generateUuidV5();
    }

    return this.generateUuidV4();
  }

  generateUuidV1(): string {
    return v1();
  }

  generateUuidV3(): string {
    return v3(this.namespace, v3.DNS);
  }

  generateUuidV4(): string {
    return v4();
  }

  generateUuidV5(): string {
    return v5(this.namespace, v5.DNS);
  }
}

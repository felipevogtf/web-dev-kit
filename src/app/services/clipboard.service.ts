import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClipboardService {
  constructor() {}

  copyClipboard(value: string): Promise<void> {
    return navigator.clipboard.writeText(value);
  }
}

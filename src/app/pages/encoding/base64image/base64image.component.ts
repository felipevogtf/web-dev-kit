import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CopyTextareaComponent } from '@components/copy-textarea/copy-textarea.component';
import { AngularSplitModule } from 'angular-split';

@Component({
  selector: 'app-base64image',
  templateUrl: './base64image.component.html',
  styleUrl: './base64image.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, CopyTextareaComponent, AngularSplitModule],
})
export class Base64imageComponent {
  imageSrc: string | ArrayBuffer | null = null;
  isDragging = false;

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDragEnter(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    if (!event.target) {
      return;
    }
    event.preventDefault();
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX >= rect.right ||
      event.clientY < rect.top ||
      event.clientY >= rect.bottom
    ) {
      this.isDragging = false;
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;

    const data = event.dataTransfer;
    const files = data?.files;

    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        this.handleImageUpload(file);
      } else {
        console.log('El archivo no es una imagen.');
      }
    }
  }

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.handleImageUpload(selectedFile);
    }
  }

  handleImageUpload(file: File) {
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (event?.target?.result) {
        this.imageSrc = event.target.result as string;
      }
    };
    reader.readAsDataURL(file);
  }
}

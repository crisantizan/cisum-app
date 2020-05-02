import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class ImageUploaderComponent implements OnInit {
  @ViewChild('viewer', { static: true })
  public image: ElementRef<HTMLImageElement>;

  @ViewChild('file', { static: true })
  public file: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit(): void {}

  public readURL({ target }: { target: HTMLInputElement }) {
    if (!target.files.length) {
      return;
    }

    const file = target.files[0];
    const reader = new FileReader();
    const img = this.image.nativeElement;

    reader.onload = (e) => {
      img.setAttribute('src', e.target.result as string);
    };

    reader.readAsDataURL(file);

    console.log(file);
  }

  public selectImageFile() {
    this.file.nativeElement.click();
  }
}

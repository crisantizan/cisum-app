import {
  Component,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class ImageUploaderComponent {
  @ViewChild('viewer', { static: true })
  public image: ElementRef<HTMLImageElement>;

  @ViewChild('fileRef', { static: true })
  public fileRef: ElementRef<HTMLInputElement>;

  @Output()
  public changeImage = new EventEmitter<File>();

  public hasFile: boolean = null;

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

    this.hasFile = true;
    this.changeImage.emit(file);
  }

  public selectImageFile() {
    this.fileRef.nativeElement.click();
  }

  public onRemoveImage() {
    this.hasFile = false;
    this.image.nativeElement.src = '';
    this.changeImage.emit(null);
  }
}

import {
  Component,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class ImageUploaderComponent {
  @Input() src: string = '';

  @ViewChild('viewer', { static: true })
  public image: ElementRef<HTMLImageElement>;

  @ViewChild('fileRef', { static: true })
  public fileRef: ElementRef<HTMLInputElement>;

  @Output()
  public changeImage = new EventEmitter<File>();

  public hasFile: boolean = null;

  constructor(private _sharedService: SharedService) {}

  public readURL({ target }: { target: HTMLInputElement }) {
    if (!target.files.length) {
      return;
    }

    const file = target.files[0];
    const reader = new FileReader();
    const img = this.image.nativeElement;

    // file is too big
    if (file.size / 1000 > 350) {
      this._sharedService.openSnackbar('Image is too big');
      return;
    }

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
    this.image.nativeElement.src = this.src;
    this.changeImage.emit(null);
  }
}

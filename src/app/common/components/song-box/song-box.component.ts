import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-song-box',
  templateUrl: './song-box.component.html',
  styleUrls: ['./song-box.component.scss'],
})
export class SongBoxComponent implements OnInit {
  public showBackdrop: boolean = false;
  public loading: boolean = false;

  @Input() public disabled: boolean = false;
  @Output() public onloading = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  public mouseEnter() {
    this.showBackdrop = true;
  }

  public mouseLeave() {
    this.showBackdrop = false;
  }

  public onClickPlay() {
    // avoid reload
    if (this.loading) {
      return;
    }

    this.loading = true;
    this.onloading.emit(true);

    setTimeout(() => {
      this.loading = false;
      this.onloading.emit(false);
    }, 3000);
  }
}

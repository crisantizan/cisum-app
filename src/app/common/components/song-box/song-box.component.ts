import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SongBoxOnClickEmit } from '../../../types/song-box-component.type';

@Component({
  selector: 'app-song-box',
  templateUrl: './song-box.component.html',
  styleUrls: ['./song-box.component.scss'],
})
export class SongBoxComponent implements OnInit {
  public showBackdrop: boolean = false;

  @Input() public id: string | number;
  @Input() public name: string = 'Name';
  @Input() public image: string;
  @Input() public artist: { id: string | number; name: string };
  @Input() public playIcon: boolean = true;
  @Input() public disabled: boolean = false;
  @Input() public loading: boolean = false;

  // @Output() public onloading = new EventEmitter<boolean>();
  @Output('onClick') public click = new EventEmitter<SongBoxOnClickEmit>();
  @Output('onClickArtist') public clickArtist = new EventEmitter<
    SongBoxOnClickEmit
  >();

  constructor() {}

  ngOnInit(): void {}

  public mouseEnter() {
    this.showBackdrop = true;
  }

  public mouseLeave() {
    this.showBackdrop = false;
  }

  private stopLoading() {
    this.loading = false;
  }

  public onClickPlay(fromIcon: boolean) {
    // avoid reload
    if (this.loading || (!fromIcon && !this.playIcon)) {
      return;
    }

    this.loading = true;
    // emit event
    this.click.emit({
      stopLoading: this.stopLoading.bind(this),
      id: this.id,
    });
  }

  /* click on artist */
  public onClickArtist() {
    // avoid reload
    if (this.loading || !this.playIcon) {
      return;
    }

    this.loading = true;
    this.clickArtist.emit({
      stopLoading: this.stopLoading.bind(this),
      id: this.artist.id,
    });
  }
}

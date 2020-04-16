import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-box',
  templateUrl: './song-box.component.html',
  styleUrls: ['./song-box.component.scss'],
})
export class SongBoxComponent implements OnInit {
  public showBackdrop: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public mouseEnter() {
    this.showBackdrop = true;
  }

  public mouseLeave() {
    this.showBackdrop = false;
  }
}

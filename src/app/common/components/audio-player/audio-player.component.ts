import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit {
  public playerIcon: 'play_arrow' | 'pause' = 'play_arrow';
  public volumeIcon: 'volume_up' | 'volume_off' = 'volume_up';
  public resizeIcon: 'expand_more' | 'expand_less' = 'expand_less';

  constructor() {}

  ngOnInit(): void {}
}

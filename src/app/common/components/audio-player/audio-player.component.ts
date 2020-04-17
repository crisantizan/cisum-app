import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit, OnDestroy {
  public volume: number = 100;

  public playerIcon: 'play_arrow' | 'pause' = 'play_arrow';
  public volumeIcon: 'volume_up' | 'volume_off' = 'volume_up';
  // public resizeIcon: 'expand_more' | 'expand_less' = 'expand_less';
  public expanded: boolean = false;
  public xsDevice: boolean;

  constructor(private breakpoint: BreakpointObserver) {}

  ngOnInit(): void {
    const xs = this.breakpoint.observe('(max-width: 440px)');

    xs.subscribe((obs) => {
      this.xsDevice = obs.matches;
    });
  }

  public onResize() {
    this.expanded = !this.expanded;
  }

  public onVolumeChange({ value }: MatSliderChange) {
    this.volume = value;

    if (value === 0) {
      this.volumeIcon = 'volume_off';
      return;
    }

    if (value > 0 && this.volumeIcon !== 'volume_up') {
      this.volumeIcon = 'volume_up';
    }
  }

  ngOnDestroy() {
    this.breakpoint.ngOnDestroy();
  }
}

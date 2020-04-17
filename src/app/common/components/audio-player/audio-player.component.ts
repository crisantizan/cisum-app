import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSliderChange } from '@angular/material/slider';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ExpandAudioPlayerComponent } from 'src/app/dialogs/expand-audio-player/expand-audio-player.component';

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

  constructor(
    private breakpoint: BreakpointObserver,
    private bottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {
    const xs = this.breakpoint.observe('(max-width: 440px)');

    xs.subscribe((obs) => {
      this.xsDevice = obs.matches;
    });

    // this.onResize();
  }

  public onResize() {
    this.expanded = !this.expanded;
    const x = this.bottomSheet.open(ExpandAudioPlayerComponent, {
      panelClass: 'audio-player-expanded',
    });

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

import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSliderChange } from '@angular/material/slider';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit, OnDestroy {
  public volume: number = 100;

  public playerIcon: 'play_arrow' | 'pause' = 'play_arrow';
  public volumeIcon: 'volume_up' | 'volume_off' = 'volume_up';
  public expanded: boolean = false;
  public xsDevice: boolean;

  constructor(
    private breakpoint: BreakpointObserver,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    const xs = this.breakpoint.observe('(max-width: 440px)');

    xs.subscribe((obs) => {
      this.xsDevice = obs.matches;
    });

    this.playerService.panelExpandedStatus$.subscribe((status) => {
      this.expanded = status;

      if (status) {
        this.playerService.openPanel();
      } else {
        this.playerService.closePanel();
      }
    });

    this.playerService.openPanel();
  }

  /** open/dismiss panel */
  public onResize() {
    this.playerService.setPanelExpandedStatus(!this.expanded);
  }

  /** change volume and icon when is mute */
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

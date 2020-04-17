import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit, OnDestroy {
  public playerIcon: 'play_arrow' | 'pause' = 'play_arrow';
  public volumeIcon: 'volume_up' | 'volume_off' = 'volume_up';
  // public resizeIcon: 'expand_more' | 'expand_less' = 'expand_less';
  public expanded: boolean = false;
  public xsDevice: boolean;

  constructor(private breakpoint: BreakpointObserver) {}

  ngOnInit(): void {
    const xs = this.breakpoint.observe('(max-width: 350px)');

    xs.subscribe((obs) => {
      console.log(obs);
      this.xsDevice = obs.matches;
    });
  }

  public onResize() {
    this.expanded = !this.expanded;
  }

  ngOnDestroy() {
    this.breakpoint.ngOnDestroy();
  }
}

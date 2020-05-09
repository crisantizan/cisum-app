import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSliderChange } from '@angular/material/slider';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit, OnDestroy {
  // @ViewChild('songAudio', { static: true })
  // private _audioEl: ElementRef<HTMLAudioElement>;
  private _audio = new Audio();

  public volume: number = 100;

  public playerIcon: 'play_arrow' | 'pause' = 'play_arrow';
  public volumeIcon: 'volume_up' | 'volume_off' = 'volume_up';
  public expanded: boolean = false;
  public xsDevice: boolean;

  public progress: string | number = 0;
  public playing: boolean = false;
  public duration: string = '';
  public currentTime: string = '';

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

    this._audio.ontimeupdate = (e) => {
      this.progress = (this._audio.currentTime * 100) / this._audio.duration;

      this.currentTime = this._getTimeString(this._audio.currentTime);
      // console.log('duración: ', audio.duration);
      // console.log('trasncurrido: ', audio.currentTime);
      // console.log(this._transformToSeconds(audio.currentTime));
    };

    this._audio.src =
      'https://res.cloudinary.com/crisantizan/video/upload/v1586791809/cisum-test/artists/5e9484fce0d8c02d9fc096e7/albums/5e94853ae0d8c02d9fc096e9/songs/5e948570e0d8c02d9fc096eb/dm3ascermabojv0pd6sv.mp3;';
  }

  private _transformDuration(time: number) {
    const minutes: number | string = Math.floor(time / 60);
    let seconds: number | string = Math.floor(time - minutes * 60);

    if (!!seconds && seconds < 10) {
      seconds = `0${seconds}`;
    }

    return { minutes, seconds };
  }

  private _getTimeString(time: number) {
    const { minutes, seconds } = this._transformDuration(time);
    return `${minutes}:${seconds}`;
  }

  public play() {
    if (!this.duration) {
      this.duration = this._getTimeString(this._audio.duration);
    }

    !this.playing ? this._audio.play() : this._audio.pause();
    this.playing = !this.playing;

    this.playerIcon = this.playerIcon === 'pause' ? 'play_arrow' : 'pause';
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

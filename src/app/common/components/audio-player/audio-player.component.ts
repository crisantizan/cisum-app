import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSliderChange, MatSlider } from '@angular/material/slider';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit, OnDestroy {
  // @ViewChild('songAudio', { static: true })
  // private _audioEl: ElementRef<HTMLAudioElement>;
  @ViewChild('matSliderPlayer', { static: true })
  private matSliderPlayer: MatSlider;

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
  private _manualUpdate: boolean = false;
  public matSliderMax: number = 1;
  private _lastTypingTime = 0;

  constructor(
    private breakpoint: BreakpointObserver,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    const xs = this.breakpoint.observe('(max-width: 440px)');
    console.log(this.matSliderPlayer);
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

    this._audio.ontimeupdate = () => {
      if (this._manualUpdate) {
        return;
      }

      this.progress = (this._audio.currentTime * 100) / this._audio.duration;

      this.currentTime = this._getTimeString(this._audio.currentTime);
      // console.log(this._audio.currentTime);

      if (this._manualUpdate) {
        this._manualUpdate = false;
      }
      // console.log(this.progress);
      // console.log('duración: ', audio.duration);
      // console.log('trasncurrido: ', audio.currentTime);
      // console.log(this._transformToSeconds(audio.currentTime));
    };

    this._audio.onended = () => {
      this.currentTime = '';
      this.duration = '';
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
      this.matSliderMax = this._audio.duration;
    }

    !this.playing ? this._audio.play() : this._audio.pause();
    this.playing = !this.playing;

    this.playerIcon = this.playerIcon === 'pause' ? 'play_arrow' : 'pause';
  }

  public onProgressChange(data: MatSliderChange) {
    // console.log(data.value);
    this._manualUpdate = true;

    this._audio.currentTime = data.value;
    this.currentTime = this._getTimeString(this._audio.currentTime);
    // this.progress = (this._audio.currentTime * 100) / this._audio.duration;

    // this._lastTypingTime = Date.now();

    // setTimeout(() => {
    //   const typingTimer = new Date().getTime();
    //   // Tiempo trascurrido entre ambos
    //   const timeDiff = typingTimer - this._lastTypingTime;

    //   if (timeDiff >= 300) {
    //     this.matSliderPlayer.blur();
    //   }
    // }, 300);
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

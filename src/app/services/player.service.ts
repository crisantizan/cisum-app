import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ExpandAudioPlayerComponent } from '../dialogs/expand-audio-player/expand-audio-player.component';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private panelExpandedStatus = new Subject<boolean>();
  /** get if the audio player panel is extended */
  public panelExpandedStatus$ = this.panelExpandedStatus.asObservable();

  constructor(private bottomSheet: MatBottomSheet) {}

  /* show the audio player panel */
  public openPanel() {
    this.bottomSheet.open(ExpandAudioPlayerComponent, {
      panelClass: 'audio-player-expanded',
    });
  }

  /* dismiss the audio player panel */
  public closePanel() {
    this.bottomSheet.dismiss();
  }

  /** set show/dismiss the audio player panel */
  public setPanelExpandedStatus(value: boolean | Observable<boolean>) {
    this.panelExpandedStatus.next(value as boolean);
  }
}

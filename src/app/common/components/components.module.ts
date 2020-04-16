import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongBoxComponent } from './song-box/song-box.component';
import { MaterialModule } from 'src/app/material.module';
import { AudioPlayerComponent } from './audio-player/audio-player.component';

@NgModule({
  declarations: [SongBoxComponent, AudioPlayerComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SongBoxComponent, AudioPlayerComponent],
})
export class ComponentsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongBoxComponent } from './song-box/song-box.component';
import { MaterialModule } from 'src/app/material.module';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { WaveComponent } from './wave/wave.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SongBoxComponent,
    AudioPlayerComponent,
    WaveComponent,
    ToolbarComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [
    SongBoxComponent,
    AudioPlayerComponent,
    WaveComponent,
    ToolbarComponent,
  ],
})
export class ComponentsModule {}

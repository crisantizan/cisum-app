import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongBoxComponent } from './song-box/song-box.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [SongBoxComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SongBoxComponent],
})
export class ComponentsModule {}

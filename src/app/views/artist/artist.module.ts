import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist.component';
import { ComponentsModule } from '../../common/components/components.module';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [ArtistComponent],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    ComponentsModule,
    MaterialModule,
  ],
})
export class ArtistModule {}

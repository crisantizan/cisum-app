import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistsComponent } from './artists.component';
import { MaterialModule } from 'src/app/material.module';
import { ComponentsModule } from '../../common/components/components.module';

@NgModule({
  declarations: [ArtistsComponent],
  imports: [
    CommonModule,
    ArtistsRoutingModule,
    MaterialModule,
    ComponentsModule,
  ],
})
export class ArtistsModule {}

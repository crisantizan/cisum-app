import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistsComponent } from './artists.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [ArtistsComponent],
  imports: [CommonModule, ArtistsRoutingModule, MaterialModule],
})
export class ArtistsModule {}

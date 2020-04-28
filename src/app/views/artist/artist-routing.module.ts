import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistComponent } from './artist.component';
import { ArtistResolverService } from './artist-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ArtistComponent,
    resolve: { artist: ArtistResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistRoutingModule {}

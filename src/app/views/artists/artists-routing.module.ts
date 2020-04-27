import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistsComponent } from './artists.component';
import { ArtistResolverService } from '../artist/artist-resolver.service';

const routes: Routes = [
  { path: '', component: ArtistsComponent },
  {
    path: ':id',
    loadChildren: () =>
      import('../artist/artist.module').then((m) => m.ArtistModule),
    resolve: { artist: ArtistResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistsRoutingModule {}

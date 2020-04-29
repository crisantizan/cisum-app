import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumComponent } from './album.component';
import { AlbumResolverService } from './album-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: AlbumComponent,
    resolve: { album: AlbumResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumRoutingModule {}

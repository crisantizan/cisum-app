import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsComponent } from './albums.component';

const routes: Routes = [
  { path: '', component: AlbumsComponent },
  {
    path: ':id',
    loadChildren: () =>
      import('../album/album.module').then((m) => m.AlbumModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumsRoutingModule {}

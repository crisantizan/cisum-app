import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { CanActivateChildAuthGuard } from 'src/app/common/guards/can-activate-child-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [CanActivateChildAuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'artists',
        loadChildren: () =>
          import('../artists/artists.module').then((m) => m.ArtistsModule),
      },
      {
        path: 'albums',
        loadChildren: () =>
          import('../albums/albums.module').then((m) => m.AlbumsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}

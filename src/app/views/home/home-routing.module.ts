import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeResolverService } from './home-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: { latestSongs: HomeResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

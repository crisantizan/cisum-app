import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginCanActivateGuard } from 'src/app/common/guards/login-can-activate.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [LoginCanActivateGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}

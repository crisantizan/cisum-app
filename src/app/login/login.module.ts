import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../material.module';
import { DialogsModule } from '../dialogs/dialogs.module';
import { DirectivesModule } from '../common/directives/directives.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    DialogsModule,
    DirectivesModule,
  ],
})
export class LoginModule {}

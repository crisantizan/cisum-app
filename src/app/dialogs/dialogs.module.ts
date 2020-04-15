import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { MaterialModule } from '../material.module';
import { DirectivesModule } from '../common/directives/directives.module';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [UserRegisterComponent, ConfirmComponent],
  imports: [CommonModule, MaterialModule, DirectivesModule],
  exports: [UserRegisterComponent, ConfirmComponent],
})
export class DialogsModule {}

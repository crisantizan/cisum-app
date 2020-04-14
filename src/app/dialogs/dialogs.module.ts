import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { MaterialModule } from '../material.module';
import { DirectivesModule } from '../common/directives/directives.module';
import { PasswordFieldComponent } from '../common/components/password-field.component';

@NgModule({
  declarations: [UserRegisterComponent, PasswordFieldComponent],
  imports: [CommonModule, MaterialModule, DirectivesModule],
})
export class DialogsModule {}

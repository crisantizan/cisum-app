import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { MaterialModule } from '../material.module';
import { DirectivesModule } from '../common/directives/directives.module';

@NgModule({
  declarations: [UserRegisterComponent],
  imports: [CommonModule, MaterialModule, DirectivesModule],
})
export class DialogsModule {}

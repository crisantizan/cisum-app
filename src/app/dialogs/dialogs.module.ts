import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { MaterialModule } from '../material.module';
import { DirectivesModule } from '../common/directives/directives.module';
import { ConfirmComponent } from './confirm/confirm.component';
import { ExpandAudioPlayerComponent } from './expand-audio-player/expand-audio-player.component';
import { ComponentsModule } from '../common/components/components.module';

@NgModule({
  declarations: [
    UserRegisterComponent,
    ConfirmComponent,
    ExpandAudioPlayerComponent,
  ],
  imports: [CommonModule, MaterialModule, DirectivesModule, ComponentsModule],
  exports: [
    UserRegisterComponent,
    ConfirmComponent,
    ExpandAudioPlayerComponent,
  ],
})
export class DialogsModule {}

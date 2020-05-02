import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { MaterialModule } from '../material.module';
import { DirectivesModule } from '../common/directives/directives.module';
import { ConfirmComponent } from './confirm/confirm.component';
import { ExpandAudioPlayerComponent } from './expand-audio-player/expand-audio-player.component';
import { ComponentsModule } from '../common/components/components.module';
import { ImageUploaderComponent } from '../common/components/image-uploader/image-uploader.component';

@NgModule({
  declarations: [
    UserRegisterComponent,
    ConfirmComponent,
    ExpandAudioPlayerComponent,
    ImageUploaderComponent,
  ],
  imports: [CommonModule, MaterialModule, DirectivesModule, ComponentsModule],
  exports: [
    UserRegisterComponent,
    ConfirmComponent,
    ExpandAudioPlayerComponent,
  ],
})
export class DialogsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { ErrorStateMatcher } from '@angular/material/core';
import { MaterialErrorStateMatcher } from './common/helpers/material-error-matcher.helper';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
  ],
  exports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
  ],
  providers: [
    {
      provide: ErrorStateMatcher,
      useClass: MaterialErrorStateMatcher,
    },
  ],
})
export class MaterialModule {}

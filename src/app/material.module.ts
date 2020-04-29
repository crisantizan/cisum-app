import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';
import { MaterialErrorStateMatcher } from './common/helpers/material-error-matcher.helper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';

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
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatRippleModule,
    MatProgressBarModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatBottomSheetModule,
    MatPaginatorModule,
    MatTooltipModule
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
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatRippleModule,
    MatProgressBarModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatBottomSheetModule,
    MatPaginatorModule,
    MatTooltipModule
  ],
  providers: [
    {
      provide: ErrorStateMatcher,
      useClass: MaterialErrorStateMatcher,
    },
  ],
})
export class MaterialModule {}

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../dialogs/confirm/confirm.component';
import { Observable } from 'rxjs';
import { DialogConfirmData } from '../types/dialog-service.type';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  public openConfirm(data?: DialogConfirmData): Observable<boolean> {
    return this.dialog
      .open(ConfirmComponent, { disableClose: true, data })
      .afterClosed();
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private appTitle: string = 'Cisum';

  private loading = new BehaviorSubject<boolean>(false);
  public loading$ = this.loading.asObservable();

  constructor(private snackbar: MatSnackBar) {}

  setLoading(loading: boolean) {
    this.loading.next(loading);
  }

  /** change app title */
  public changeTitle(value: string, useTitle: boolean = true) {
    document.title = useTitle ? `${this.appTitle} | ${value}` : value;
  }

  public openSnackbar(message: string, duration = 2000) {
    this.snackbar.open(message, '', {
      duration,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'custom-snackbar',
    });
  }
}

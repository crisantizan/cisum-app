import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { UserRegisterComponent } from 'src/app/dialogs/user-register/user-register.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  public searchControl = new FormControl();
  public songs: string[] = [
    'Muse - Psycho',
    'Silence Speaks - While She Sleeps',
    'Into The Fire - Asking Alexandria',
    'Fiesta pagana - Mago de Oz',
  ];
  public filteredSongs: Observable<string[]>;

  constructor(
    private dialog: MatDialog,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.filteredSongs = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  public openUserDataDialog() {
    this.dialog.open(UserRegisterComponent, {
      maxWidth: 600,
      autoFocus: true,
      data: {
        mode: 'edit',
      },
      disableClose: true,
    });
  }

  public async onCloseSession() {
    await this._authService.logoutComplete();
    this._router.navigate(['/login']);
  }

  /** searcher filter */
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.songs.filter((song) =>
      this._normalizeValue(song).includes(filterValue)
    );
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}

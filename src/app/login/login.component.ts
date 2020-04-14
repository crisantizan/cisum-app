import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserRegisterComponent } from '../dialogs/user-register/user-register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public hidePass: boolean = true;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.openRegisterDialog();
  }

  public openRegisterDialog() {
    this.dialog.open(UserRegisterComponent, {
      maxWidth: 600,
      autoFocus: true,
      disableClose: true,
    });
  }
}

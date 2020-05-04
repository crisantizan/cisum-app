import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserRegisterComponent } from '../../dialogs/user-register/user-register.component';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { CustomValidators } from 'src/app/common/custom-validators';
import { regex } from 'src/app/common/helpers/regex.helper';
import { AuthService } from 'src/app/services/auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { capitalize } from 'src/app/common/helpers/shared.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public hidePass: boolean = true;
  public loading: boolean = false;

  public form: FormGroup;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private authService: AuthService,
    private sharedService: SharedService,
    private _router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(regex.EMAIL)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(regex.PASSWORD),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  public openRegisterDialog() {
    this.dialog.open(UserRegisterComponent, {
      maxWidth: 600,
      autoFocus: true,
      disableClose: true,
      data: {
        mode: 'create',
      },
    });
  }

  public onSubmit() {
    this.loading = true;
    const res = this.authService.singIn(this.form.value);

    res
      .pipe(
        catchError(({ error }) => {
          console.log(error);
          this.sharedService.openSnackbar(capitalize(error.response), 3000);
          this.loading = false;
          return throwError(error);
        })
      )
      .subscribe(({ response }) => {
        this.loading = false;
        this.authService.setToken(response.token);
        this.authService.setUser(response.user);
        this._router.navigate(['/']);
      });
  }

  get email(): AbstractControl {
    return this.form.get('email');
  }

  get password(): AbstractControl {
    return this.form.get('password');
  }

  /** show error message of email field */
  public showEmailError(): string | null {
    if (this.email.hasError('required')) {
      return 'required';
    }

    if (this.email.hasError('pattern')) {
      return 'invalid email';
    }

    return null;
  }

  /** show error message of password field */
  public showPasswordError(): string | null {
    if (this.password.hasError('required')) {
      return 'required';
    }

    if (this.password.hasError('minlength')) {
      return 'must contain at least 6 digits';
    }

    if (this.password.hasError('pattern')) {
      return 'field contains invalid characters';
    }

    return null;
  }
}

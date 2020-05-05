import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { regex } from '../../common/helpers/regex.helper';
import { CustomValidators } from 'src/app/common/custom-validators';
import { DialogService } from 'src/app/services/dialog.service';
import { propsObjectEmpty } from 'src/app/common/helpers/object.helper';
import { UserRegisterData } from 'src/app/types/user-register-component.type';
import { AuthService } from 'src/app/services/auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { ApiResponse } from 'src/app/types/shared.type';
import { capitalize } from 'src/app/common/helpers/shared.helper';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
  public hidePass = { new: true, verify: true };
  public form: FormGroup;
  public imageFile: File = null;
  public loading: boolean = false;

  @ViewChild('email', { static: true })
  private emailRef: ElementRef<HTMLInputElement>;

  constructor(
    private dialogRef: MatDialogRef<UserRegisterComponent>,
    public fb: FormBuilder,
    private dialogService: DialogService,
    private _authService: AuthService,
    private _sharedService: SharedService,
    @Inject(MAT_DIALOG_DATA) public data: UserRegisterData
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(regex.EMAIL)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(regex.PASSWORD),
        ],
      ],
      verifyPassword: [''],
    });
  }

  ngOnInit(): void {
    console.log(this.data);
    // update validator when password change
    this.password.valueChanges.subscribe((value) => {
      this.verifyPassword.setValidators([
        Validators.required,
        CustomValidators.compareValue(value),
      ]);
      this.verifyPassword.updateValueAndValidity();
    });
  }

  public onSubmit() {
    if (this.disabledBtn) {
      return;
    }

    this.loading = true;
    this._authService
      .singUp(this.form.value)
      .pipe(
        catchError((err: { error: ApiResponse<any> }) => {
          console.error(err.error.response);

          // email error
          if (
            typeof err.error.response === 'object' &&
            err.error.response.field === 'email'
          ) {
            this.email.setErrors({ exists: true });
            this.emailRef.nativeElement.focus();
          }

          this.loading = false;
          return throwError(err);
        })
      )
      .subscribe(({ response }) => {
        this.loading = false;
        this._sharedService.openSnackbar('All right! you can log in now');

        this.dialogRef.close();
      });
  }

  public onChangeImage(file: File) {
    this.imageFile = file;
    console.log({ file: this.imageFile });
  }

  public onCancel() {
    // close this dialog
    if (propsObjectEmpty(this.form.value) && !this.imageFile) {
      this.dialogRef.close();
      return;
    }

    this.dialogService
      .openConfirm({ body: 'All data entered will be lost' })
      .subscribe((response) => {
        if (response) {
          this.dialogRef.close();
        }
      });
  }

  get cardTitle() {
    return this.data.mode === 'create' ? 'Create account' : 'Edit my data';
  }

  get name(): AbstractControl {
    return this.form.get('name');
  }

  get surname(): AbstractControl {
    return this.form.get('surname');
  }

  get email(): AbstractControl {
    return this.form.get('email');
  }

  get password(): AbstractControl {
    return this.form.get('password');
  }

  get verifyPassword(): AbstractControl {
    return this.form.get('verifyPassword');
  }

  /** show error message of name field */
  public showNameError(): string | null {
    if (this.name.getError('required')) {
      return 'required';
    }

    return null;
  }

  /** show error message of surname field */
  public showSurnameError(): string | null {
    if (this.surname.getError('required')) {
      return 'required';
    }

    return null;
  }

  /** show error message of email field */
  public showEmailError(): string | null {
    if (this.email.hasError('required')) {
      return 'required';
    }

    if (this.email.hasError('pattern')) {
      return 'invalid email';
    }

    if (this.email.hasError('exists')) {
      return 'email passed already exists';
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

  /** show error message of password field */
  public showVerifyPasswordError(): string | null {
    if (this.verifyPassword.hasError('required')) {
      return 'required';
    }

    if (this.verifyPassword.hasError('minlength')) {
      return 'must contain at least 6 digits';
    }

    if (this.verifyPassword.hasError('pattern')) {
      return 'field contains invalid characters';
    }

    if (this.verifyPassword.hasError('comparevalue')) {
      return 'password don\'t match';
    }

    return null;
  }

  get labelBtn() {
    return !this.loading
      ? this.data.mode === 'create'
        ? 'CREATE'
        : 'EDIT'
      : 'LOADING...';
  }

  get disabledBtn() {
    return (this.form.dirty && this.form.invalid) || this.loading;
  }
}

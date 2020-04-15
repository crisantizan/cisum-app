import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { regex } from '../../common/helpers/regex.helper';
import { CustomValidators } from 'src/app/common/custom-validators';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
  public hidePass = { new: true, verify: true };
  public form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<UserRegisterComponent>,
    public fb: FormBuilder,
    private dialogService: DialogService
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

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
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
    console.log('entró');
    if (this.form.invalid) {
      return;
    }

    // good
    console.log('... on submit');
  }

  public onCancel() {
    this.dialogService
      .openConfirm({ title: 'Test title' })
      .subscribe((response) => {
        console.log({ response });
      });
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
}

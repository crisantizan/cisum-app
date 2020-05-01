import {
  Component,
  OnInit,
  Inject,
  ElementRef,
  ViewChild,
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

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
  public hidePass = { new: true, verify: true };
  public form: FormGroup;

  @ViewChild('viewer', { static: false })
  public image: ElementRef<HTMLImageElement>;

  @ViewChild('file', { static: false })
  public file: ElementRef<HTMLInputElement>;

  constructor(
    private dialogRef: MatDialogRef<UserRegisterComponent>,
    public fb: FormBuilder,
    private dialogService: DialogService,
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
    // update validator when password change
    this.password.valueChanges.subscribe((value) => {
      this.verifyPassword.setValidators([
        Validators.required,
        CustomValidators.compareValue(value),
      ]);
      this.verifyPassword.updateValueAndValidity();
    });
  }

  public readURL({ target }: { target: HTMLInputElement }) {
    if (!target.files.length) {
      return;
    }

    const file = target.files[0];
    const reader = new FileReader();
    const img = this.image.nativeElement;

    reader.onload = (e) => {
      img.setAttribute('src', e.target.result as string);
    };

    reader.readAsDataURL(file);

    console.log(file);
  }

  public selectImageFile() {
    this.file.nativeElement.click();
  }

  public onSubmit() {
    if (this.form.invalid) {
      return;
    }

    // good
    console.log('... on submit');
  }

  public onCancel() {
    // close this dialog
    if (propsObjectEmpty(this.form.value)) {
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

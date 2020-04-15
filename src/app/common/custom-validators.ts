import { ValidatorFn, AbstractControl } from '@angular/forms';

type ControlReturn = { [key: string]: any } | null;

export class CustomValidators {
  /** regex custom validator */
  public static regex(regex: RegExp, errCode: string): ValidatorFn {
    return (control: AbstractControl): ControlReturn => {
      return !regex.test(control.value) ? { [errCode]: 'invalid field' } : null;
    };
  }

  /** compare two values */
  public static compareValue(compare: string): ValidatorFn {
    return (control: AbstractControl): ControlReturn => {
      const condition = control.value === compare;
      return !condition ? { comparevalue: true } : null;
    };
  }
}

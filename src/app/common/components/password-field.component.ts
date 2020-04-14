import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-field',
  template: `<mat-form-field class="has-icon" appearance="legacy">
    <mat-label>{{ label }}</mat-label>
    <mat-icon matPrefix>vpn_key</mat-icon>
    <input matInput [type]="hidePass ? 'password' : 'text'" />
    <button
      mat-icon-button
      matSuffix
      (click)="hidePass = !hidePass"
      [attr.aria-label]="'Hide password'"
      [attr.aria-pressed]="hidePass"
    >
      <mat-icon>{{ hidePass ? 'visibility_off' : 'visibility' }}</mat-icon>
    </button>
  </mat-form-field>`,
})
export class PasswordFieldComponent {
  public hidePass: boolean = true;
  @Input() public label: string;

  constructor() {}
}

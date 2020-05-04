import { TestBed } from '@angular/core/testing';

import { LoginCanActivateGuard } from './login-can-activate.guard';

describe('LoginCanActivateGuard', () => {
  let guard: LoginCanActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginCanActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

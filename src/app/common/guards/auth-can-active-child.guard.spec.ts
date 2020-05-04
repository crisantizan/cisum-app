import { TestBed } from '@angular/core/testing';

import { CanActivateChildAuthGuard } from './can-activate-child-auth.guard';

describe('CanActivateChildAuthGuard', () => {
  let guard: CanActivateChildAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateChildAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

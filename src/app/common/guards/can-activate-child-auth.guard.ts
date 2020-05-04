import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CanActivateChildAuthGuard implements CanActivateChild {
  constructor(private _authService: AuthService, private _router: Router) {}
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // continue
    if (this._authService.userIsLogged) {
      return true;
    }

    // if a local token exists
    if (this._authService.hasLocalToken()) {
      // get data by token
      return this._authService.whoami().pipe(
        map(({ response: user }) => {
          // set user
          this._authService.setUser(user);
          // and navigate to home page
          return true;
        }),
        catchError((err) => {
          console.log(err);
          // error has ocurred, redirect to login page and clear token
          this._authService.setToken(null);
          this._router.navigate(['/login']);
          return of(false);
        })
      );
    }

    this._router.navigate(['/login']);
    return false;
  }
}

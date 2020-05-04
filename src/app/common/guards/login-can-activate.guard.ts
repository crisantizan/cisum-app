import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginCanActivateGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // go to home page
    if (this._authService.userIsLogged) {
      this._router.navigate(['/']);
      return false;
    }

    // if a local token exists
    if (this._authService.hasLocalToken()) {
      // get data by token
      return this._authService.whoami().pipe(
        map(({ response: user }) => {
          console.log('USER: ', user);
          // set user
          this._authService.setUser(user);
          // and navigate to home page
          this._router.navigate(['/']);
          return false;
        }),
        catchError((err) => {
          console.log(err);
          // error has ocurred, keep here
          return of(true);
        })
      );
    }

    return true;
  }
}

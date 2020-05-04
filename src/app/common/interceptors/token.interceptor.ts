import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { bearerToken } from '../helpers/shared.helper';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this._authService.hasLocalToken()) {
      const req = request.clone({
        setHeaders: { authorization: bearerToken(this._authService.token) },
      });

      return next.handle(req);
    }

    return next.handle(request);
  }
}

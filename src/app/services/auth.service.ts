import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthLogin, AuthSignInResponse } from '../types/auth-service.type';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  /** user login */
  public singIn(data: AuthLogin): Observable<AuthSignInResponse> {
    return this.http.post<AuthSignInResponse>('/users/login', data).pipe(
      catchError(({ error }) => {
        return throwError(error);
      })
    );
  }

  /** create a new user */
  public singUp() {}

  /** user close session */
  public logout() {}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthLogin, AuthSignIn } from '../types/auth-service.type';
import { Observable } from 'rxjs';
import { User } from '../types/user.type';
import { LOCAL_TOKEN_KEY } from '../common/constants/auth-service.constant';
import { ApiResponse } from '../types/shared.type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: User;
  private _token: string | null = null;

  constructor(private http: HttpClient) {}

  /** user login */
  public singIn(data: AuthLogin): Observable<ApiResponse<AuthSignIn>> {
    return this.http.post<ApiResponse<AuthSignIn>>('/users/login', data);
  }

  /** create a new user */
  public singUp() {}

  /** user close session */
  public logout() {}

  /** get data by token */
  public whoami() {
    return this.http.get<ApiResponse<User>>('/users/whoami');
  }

  public clearUser() {
    this._user = null;
  }

  /** verify if a token already exists in local storage */
  public hasLocalToken(): boolean {
    return !!localStorage.getItem(LOCAL_TOKEN_KEY);
  }

  public setUser(data: User) {
    this._user = data;
  }

  /** user is logged */
  get userIsLogged() {
    return !!this._user;
  }

  get user() {
    return this._user;
  }

  public setToken(token: string | null) {
    // add
    if (token) {
      localStorage.setItem(LOCAL_TOKEN_KEY, token);
    } else {
      // remove
      localStorage.removeItem(LOCAL_TOKEN_KEY);
    }

    this._token = token;
  }

  get token(): string | null {
    return this._token || localStorage.getItem(LOCAL_TOKEN_KEY);
  }
}

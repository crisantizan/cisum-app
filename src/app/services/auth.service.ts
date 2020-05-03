import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  /** user login */
  public singIn() {}

  /** create a new user */
  public singUp() {}

  /** user close session */
  public logout() {}
}

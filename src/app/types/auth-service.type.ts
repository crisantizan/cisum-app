import { User } from './user.type';

/** data to login app */
export interface AuthLogin {
  email: string;
  password: string;
}

/** data when user is login */
export interface AuthSignInResponse {
  user: User;
  token: string;
}

import { UserCreate } from './user.type';

/** user-register component params */
export interface UserRegisterData {
  mode: 'create' | 'edit';
  user?: UserCreate;
}

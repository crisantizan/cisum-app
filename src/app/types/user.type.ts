import { Asset, RoleType } from './shared.type';

export interface UserCreate {
  name: string;
  surname: string;
  email: string;
  password: string;
  image?: Blob | string;
}

/** data of user */
export interface User {
  name: string;
  surname: string;
  password: string;
  email: string;
  role: RoleType;
  image?: Asset;
  createdAt: string;
  updatedAt: string;
}

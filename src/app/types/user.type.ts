export interface UserCreate {
  name: string;
  surname: string;
  email: string;
  password: string;
  image?: Blob | string;
}

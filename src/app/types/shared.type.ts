/** data of api asset */
export interface Asset {
  id: string;
  path: string;
}

/** roles allowed values */
export type RoleType = 'ADMIN' | 'USER';

/** api data response */
export interface ApiResponse<T> {
  method: string;
  path: string;
  response: T;
  status: number;
  timestamp: string;
}

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

/** api response with paginated results */
export interface PaginateResponse<T> {
  docs: T;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number;
  page: number;
  pagingCounter: number;
  prevPage: null | number;
  totalDocs: number;
  totalPages: number;
}

export type PaginateApiResponse<T> = ApiResponse<PaginateResponse<T>>;

export interface BaseResponse<T> {
  code: string;
  data: T;
  message: string;
  page: {
    number: number;
    size: number;
    totalCount: number;
  };
}

export interface BaseRequest {
  accessToken?: string;
}

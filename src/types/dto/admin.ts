import { BaseRequest, BaseResponse } from '@/types/dto/base';

export interface StorageDataRequest extends BaseRequest {
  key: string;
}

export interface StorageDataResponseData {
  valueMap: Record<string, unknown>;
}
export interface StorageDataResponse extends BaseResponse<StorageDataResponseData> {}

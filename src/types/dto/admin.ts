import { BaseRequest, BaseResponse } from '@/types/dto/base';

export interface StorageKeysRequest extends BaseRequest {}

export interface StorageKeysResponseData {
  keyStrings: string[];
}

export interface StorageKeysResponse extends BaseResponse<StorageKeysResponseData> {}

export interface StorageDataRequest extends BaseRequest {
  key: string;
}

export interface StorageDataResponseData {
  valueMap: Record<string, unknown>;
}
export interface StorageDataResponse extends BaseResponse<StorageDataResponseData> {}

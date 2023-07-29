import {
  StorageKeysResponse,
  StorageDataResponse,
  StorageDataRequest,
  StorageKeysRequest,
} from '@/types/dto';
import BaseApiService from './base';

class AdminApiService extends BaseApiService {
  public constructor() {
    super('admin');
  }

  public getKeysFromStorage({ accessToken }: StorageKeysRequest): Promise<StorageKeysResponse> {
    return this.http
      .get('/storage/keys', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
  }

  public getRecruitDataFromStorage({
    accessToken,
    key,
  }: StorageDataRequest): Promise<StorageDataResponse> {
    return this.http
      .get(`/storage/key/recruit-${key}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
  }
}

export default new AdminApiService();

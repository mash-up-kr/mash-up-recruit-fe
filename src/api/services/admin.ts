import { StorageDataResponse, StorageDataRequest } from '@/types/dto';
import BaseApiService from './base';

class AdminApiService extends BaseApiService {
  public constructor() {
    super('admin');
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

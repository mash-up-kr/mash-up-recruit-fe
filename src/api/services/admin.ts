import { StorageDataResponse, StorageDataRequest } from '@/types/dto';
import BaseApiService from './base';

class AdminApiService extends BaseApiService {
  public constructor() {
    super(undefined, process.env.ADMIN_DESTINATION_PATH);
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

  public getFaqDataFromStorage({
    accessToken,
    key,
  }: StorageDataRequest): Promise<StorageDataResponse> {
    return this.http
      .get(`/storage/key/faq-${key}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
  }
}

export default new AdminApiService();

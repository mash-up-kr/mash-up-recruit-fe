import { LoginRequest, LoginResponse, MyApplicantRequest, MyApplicantResponse } from '@/types/dto';
import BaseApiService from './base';

class ApplicantApiService extends BaseApiService {
  public constructor() {
    super('applicants');
  }

  public signIn({ googleIdToken }: LoginRequest): Promise<LoginResponse> {
    return this.http
      .post('/login', { googleIdToken })
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
  }

  public getMyApplicantData({ accessToken }: MyApplicantRequest): Promise<MyApplicantResponse> {
    return this.http
      .get('/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
  }
}

export default new ApplicantApiService();

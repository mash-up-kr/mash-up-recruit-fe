import {
  ApplicationDetailRequest,
  ApplicationDetailResponse,
  ApplicationsRequest,
  ApplicationsResponse,
  ConfirmApplicantRequest,
  ConfirmApplicantResponse,
  CreateMyApplicationRequest,
  CreateMyApplicationResponse,
  RecruitScheduleRequest,
  RecruitScheduleResponse,
  SubmitApplicationRequest,
  SubmitApplicationResponse,
  TempSaveApplicationRequest,
  TempSaveApplicationResponse,
} from '@/types/dto';
import BaseApiService from './base';

class ApplicationApiService extends BaseApiService {
  public constructor() {
    super('applications');
  }

  public getApplications({ accessToken }: ApplicationsRequest): Promise<ApplicationsResponse> {
    return this.http
      .get('/', { headers: { Authorization: `Bearer ${accessToken}` } })
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
  }

  public createMyApplication({
    accessToken,
    teamId,
  }: CreateMyApplicationRequest): Promise<CreateMyApplicationResponse> {
    return this.http
      .post('/', { teamId }, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
  }

  public getApplicationDetail({
    accessToken,
    applicationId,
  }: ApplicationDetailRequest): Promise<ApplicationDetailResponse> {
    return this.http
      .get(`/${applicationId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
  }

  public tempSaveApplication({
    accessToken,
    applicationId,
    updateApplicationRequest,
  }: TempSaveApplicationRequest): Promise<TempSaveApplicationResponse> {
    return this.http
      .put(`/${applicationId}`, updateApplicationRequest, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
  }

  public confirmApplicant({
    accessToken,
    applicationId,
    updateConfirmationRequest,
  }: ConfirmApplicantRequest): Promise<ConfirmApplicantResponse> {
    return this.http
      .post(`/${applicationId}/confirm`, updateConfirmationRequest, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
  }

  public submitApplication({
    accessToken,
    applicationId,
    applicationSubmitRequest,
  }: SubmitApplicationRequest): Promise<SubmitApplicationResponse> {
    return this.http
      .post(`/${applicationId}/submit`, applicationSubmitRequest, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
  }

  public getRecruitSchedule({
    generationNumber,
  }: RecruitScheduleRequest): Promise<RecruitScheduleResponse> {
    return this.http
      .get(`/schedule/${generationNumber}`)
      .then(BaseApiService.handleResponse)
      .catch(BaseApiService.handleError);
  }
}

export default new ApplicationApiService();

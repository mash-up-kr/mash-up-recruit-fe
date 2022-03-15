import { BaseRequest, BaseResponse } from '@/types/dto/base';

export interface Applicant {
  applicantId: number;
  email: string;
  name: string;
  phoneNumber: string;
  birthdate: string;
  residence: string;
  department: string;
  status: 'ACTIVE' | 'WITHDRAWAL';
}

export interface LoginResponseData {
  accessToken: string;
  applicant: Applicant;
}

export interface LoginRequest extends BaseRequest {
  googleIdToken: string;
}

export interface LoginResponse extends BaseResponse<LoginResponseData> {}

export interface MyApplicantData extends Applicant {}

export interface MyApplicantRequest extends BaseRequest {}

export interface MyApplicantResponse extends BaseResponse<MyApplicantData> {}

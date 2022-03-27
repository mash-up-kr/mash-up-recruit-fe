import { BaseRequest, BaseResponse } from '@/types/dto/base';
import { Applicant, Team } from '.';

export interface Question {
  content: string;
  description: string | null;
  maxContentLength: number | null;
  questionId: number;
  questionType: 'MULTI_LINE_TEXT' | 'SINGLE_LINE_TEXT';
  required: boolean;
}

export interface Answer {
  answerId: number;
  content: 'string';
  questionId: number;
}

export type ApplicationAuditStatus =
  | 'INTERVIEW_FAILED' // 인터뷰 탈락
  | 'INTERVIEW_PASSED' // 인터뷰 합격
  | 'SCREENING_FAILED' // 서류심사 탈락
  | 'SCREENING_PASSED' // 서류심사 합격
  | 'SCREENING_EXPIRED' // 제출 기한 만료
  | 'SUBMITTED' // 제출
  | 'WRITING'; // 작성중 (생성 후 | 임시저장)

export interface ApplicationResult {
  interviewEndedAt: string;
  interviewStartedAt: string;
  status: ApplicationAuditStatus;
}

type ConfirmationStatus =
  | 'TO_BE_DETERMINED' // 미검토
  | 'INTERVIEW_CONFIRM_WAITING' // 면접 응답 대기중 - 서류 합격
  | 'INTERVIEW_CONFIRM_ACCEPTED' // 면접 승인
  | 'INTERVIEW_CONFIRM_REJECTED' // 면접 거절
  | 'FINAL_CONFIRM_WAITING' // 최종 합격 응답 대기 - 인터뷰 합격
  | 'FINAL_CONFIRM_ACCEPTED' // 최종 합격 승인
  | 'FINAL_CONFIRM_REJECTED' // 최종 합격 거절
  | 'NOT_APPLICABLE'; // 해당 없음

export type ApplicationStatus = 'CREATED' | 'SUBMITTED' | 'WRITING';

export interface Application {
  answers: Answer[];
  applicant: Applicant;
  applicationId: number;
  confirmationStatus: ConfirmationStatus;
  privacyPolicyAgreed: boolean;
  questions: Question[];
  result: ApplicationResult;
  status: ApplicationStatus;
  submittedAt: string;
  team: Team;
}

interface UpdateApplication {
  answers: Array<{
    answerId: number;
    content: string;
    questionId: number;
  }>;
  applicantName: string;
  phoneNumber: string;
  privacyPolicyAgreed: boolean;
}

// ------------------- From the bottom, API Request and Response interface -------------------

export interface ApplicationsRequest extends BaseRequest {}
export interface ApplicationsResponse extends BaseResponse<Application[]> {}

export interface CreateMyApplicationRequest extends BaseRequest {
  teamId: number;
}
export interface CreateMyApplicationResponse extends BaseResponse<Application> {}

export interface ApplicationDetailRequest extends BaseRequest {
  applicationId: number;
}
export interface ApplicationDetailResponse extends BaseResponse<Application> {}

export interface TempSaveApplicationRequest extends BaseRequest {
  applicationId: number;
  updateApplicationRequest: UpdateApplication;
}
export interface TempSaveApplicationResponse extends BaseResponse<Application> {}

export interface ConfirmApplicantRequest extends BaseRequest {
  applicationId: number;
  updateConfirmationRequest: { status: ConfirmationStatus };
}
export interface ConfirmApplicantResponse extends BaseResponse<Application> {}

export interface SubmitApplicationRequest extends BaseRequest {
  applicationId: number;
  applicationSubmitRequest: UpdateApplication;
}
export interface SubmitApplicationResponse extends BaseResponse<Application> {}

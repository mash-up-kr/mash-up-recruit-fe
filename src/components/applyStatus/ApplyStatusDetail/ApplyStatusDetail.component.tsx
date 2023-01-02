import {
  ScreeningWait,
  ScreeningPass,
  ScreeningFail,
  InterviewReject,
  InterviewAccept,
  InterviewPass,
  InterviewFail,
  FinalConfirmAccept,
  FinalConfirmReject,
} from '@/components';
import { Application } from '@/types/dto';
import { RecruitingProgressStatus } from '@/utils/date';
import { useState } from 'react';
import * as Styled from './ApplyStatusDetail.styled';

interface ApplyStatusDetailProps {
  applications: Application[];
  recruitingProgressStatus: RecruitingProgressStatus;
}

const ApplyStatusDetail = ({ applications, recruitingProgressStatus }: ApplyStatusDetailProps) => {
  const [submittedApplication, setSubmittedApplication] = useState(
    applications.find((application) => application.status === 'SUBMITTED'),
  );

  if (!submittedApplication || recruitingProgressStatus === 'AFTER-FIRST-SEMINAR') return null;

  if (
    recruitingProgressStatus === 'IN-RECRUITING' ||
    recruitingProgressStatus === 'END-RECRUITING'
  ) {
    return (
      <Styled.StatusDetail>
        <ScreeningWait />
      </Styled.StatusDetail>
    );
  }

  if (recruitingProgressStatus === 'AFTER-SCREENING-ANNOUNCED') {
    return (
      <Styled.StatusDetail>
        {(() => {
          if (submittedApplication.result.status === 'SCREENING_PASSED') {
            if (submittedApplication.confirmationStatus === 'INTERVIEW_CONFIRM_WAITING') {
              return (
                <ScreeningPass
                  application={submittedApplication}
                  setSubmittedApplication={setSubmittedApplication}
                />
              );
            }

            if (submittedApplication.confirmationStatus === 'INTERVIEW_CONFIRM_ACCEPTED') {
              return <InterviewAccept application={submittedApplication} />;
            }

            if (submittedApplication.confirmationStatus === 'INTERVIEW_CONFIRM_REJECTED') {
              return <InterviewReject application={submittedApplication} />;
            }
          }

          if (submittedApplication.result.status === 'SCREENING_FAILED') {
            return <ScreeningFail application={submittedApplication} />;
          }

          return (
            <Styled.ExceptionMessage>
              모집결과가 반영되지 않았습니다. 채널톡으로 문의해주세요.
            </Styled.ExceptionMessage>
          );
        })()}
      </Styled.StatusDetail>
    );
  }

  if (recruitingProgressStatus === 'AFTER-INTERVIEWING-ANNOUNCED') {
    return (
      <Styled.StatusDetail>
        {(() => {
          if (submittedApplication.result.status === 'SCREENING_FAILED') {
            return <ScreeningFail application={submittedApplication} />;
          }

          if (
            submittedApplication.result.status === 'SCREENING_PASSED' &&
            submittedApplication.confirmationStatus === 'INTERVIEW_CONFIRM_REJECTED'
          ) {
            return <InterviewReject application={submittedApplication} />;
          }

          if (submittedApplication.result.status === 'INTERVIEW_PASSED') {
            if (submittedApplication.confirmationStatus === 'FINAL_CONFIRM_WAITING') {
              return (
                <InterviewPass
                  application={submittedApplication}
                  setSubmittedApplication={setSubmittedApplication}
                />
              );
            }

            if (submittedApplication.confirmationStatus === 'FINAL_CONFIRM_ACCEPTED') {
              return <FinalConfirmAccept application={submittedApplication} />;
            }

            if (submittedApplication.confirmationStatus === 'FINAL_CONFIRM_REJECTED') {
              return <FinalConfirmReject application={submittedApplication} />;
            }
          }

          if (submittedApplication.result.status === 'INTERVIEW_FAILED') {
            return <InterviewFail application={submittedApplication} />;
          }

          return (
            <Styled.ExceptionMessage>
              모집결과가 반영되지 않았습니다. 채널톡으로 문의해주세요.
            </Styled.ExceptionMessage>
          );
        })()}
      </Styled.StatusDetail>
    );
  }

  return null;
};

export default ApplyStatusDetail;

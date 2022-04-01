import {
  ScreeningWait,
  ScreeningPass,
  ScreeningFail,
  ScreeningReject,
  InterviewAccept,
  InterviewPass,
  InterviewFail,
  FinalConfirmAccept,
  FinalConfirmReject,
} from '@/components';
import { AlertModalDialog } from '@/components/common';
import { Application } from '@/types/dto';
import { RecruitingProgressStatus } from '@/utils/date';
import { useEffect, useState } from 'react';
import * as Styled from './ApplyStatusDetail.styled';

const IS_FIRST_VISIT = 'isFirstVisit';
interface ApplyStatusDetailProps {
  applications: Application[];
  recruitingProgressStatus: RecruitingProgressStatus;
}

const ApplyStatusDetail = ({ applications, recruitingProgressStatus }: ApplyStatusDetailProps) => {
  const [submittedApplication, setSubmittedApplication] = useState(
    applications.find((application) => application.status === 'SUBMITTED'),
  );
  const [isOpenResultDelayModal, setIsOpenResultDelayModal] = useState(false);

  useEffect(() => {
    const { localStorage } = window;
    if (!localStorage.getItem(IS_FIRST_VISIT)) {
      setIsOpenResultDelayModal(true);
    }

    if (localStorage.getItem(IS_FIRST_VISIT) === null) {
      window.localStorage.setItem(IS_FIRST_VISIT, 'false');
    }
  }, []);

  if (!submittedApplication || recruitingProgressStatus === 'AFTER-FIRST-SEMINAR') return null;

  if (
    recruitingProgressStatus === 'IN-RECRUITING' ||
    recruitingProgressStatus === 'END-RECRUITING'
  ) {
    return (
      <Styled.StatusDetail>
        <ScreeningWait />
        {isOpenResultDelayModal && (
          <AlertModalDialog
            heading="서류 결과는 4월 3일 오전 10시에 발표됩니다"
            paragraph="이번 12기 모집에 예상보다 많은 분들이 지원해주셔서 기간 내 서류 검토가 어려워 하루 늦어짐을 공지드립니다. 일정 변동된 점 양해 부탁드립니다."
            handleApprovalButton={() => setIsOpenResultDelayModal(false)}
            setIsOpenModal={setIsOpenResultDelayModal}
          />
        )}
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
              return <ScreeningReject application={submittedApplication} />;
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

  return null;
};

export default ApplyStatusDetail;

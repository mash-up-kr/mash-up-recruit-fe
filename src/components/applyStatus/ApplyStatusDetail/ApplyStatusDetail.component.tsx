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
  ApplyException,
} from '@/components';
import { CURRENT_GENERATION } from '@/constants';
import { Application, RecruitSchedule } from '@/types/dto';
import { getRecruitingProgressStatusFromRecruitingPeriod } from '@/utils/date';
import { useState } from 'react';

interface ApplyStatusDetailProps {
  applications: Application[];
  recruitSchedule: RecruitSchedule;
}

const ApplyStatusDetail = ({ applications, recruitSchedule }: ApplyStatusDetailProps) => {
  const [submittedApplication, setSubmittedApplication] = useState(
    applications.find(
      (application) =>
        application.status === 'SUBMITTED' &&
        application.generationResponse.generationNumber === CURRENT_GENERATION,
    ),
  );

  const recruitingProgressStatus = getRecruitingProgressStatusFromRecruitingPeriod({
    date: new Date(),
    recruitSchedule,
  });

  if (!submittedApplication || recruitingProgressStatus === 'AFTER-FIRST-SEMINAR') return null;

  if (
    recruitingProgressStatus === 'IN-RECRUITING' ||
    recruitingProgressStatus === 'END-RECRUITING'
  ) {
    return <ScreeningWait recruitSchedule={recruitSchedule} />;
  }

  if (recruitingProgressStatus === 'AFTER-SCREENING-ANNOUNCED') {
    return (
      <>
        {(() => {
          if (submittedApplication.result.status === 'SCREENING_PASSED') {
            if (submittedApplication.confirmationStatus === 'INTERVIEW_CONFIRM_WAITING') {
              return (
                <ScreeningPass
                  application={submittedApplication}
                  setSubmittedApplication={setSubmittedApplication}
                  recruitSchedule={recruitSchedule}
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

          return <ApplyException />;
        })()}
      </>
    );
  }

  if (recruitingProgressStatus === 'AFTER-INTERVIEWING-ANNOUNCED') {
    return (
      <>
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
                  recruitSchedule={recruitSchedule}
                />
              );
            }

            if (submittedApplication.confirmationStatus === 'FINAL_CONFIRM_ACCEPTED') {
              return (
                <FinalConfirmAccept
                  application={submittedApplication}
                  recruitSchedule={recruitSchedule}
                />
              );
            }

            if (submittedApplication.confirmationStatus === 'FINAL_CONFIRM_REJECTED') {
              return <FinalConfirmReject application={submittedApplication} />;
            }
          }

          if (submittedApplication.result.status === 'INTERVIEW_FAILED') {
            return <InterviewFail application={submittedApplication} />;
          }

          return <ApplyException />;
        })()}
      </>
    );
  }

  return null;
};

export default ApplyStatusDetail;

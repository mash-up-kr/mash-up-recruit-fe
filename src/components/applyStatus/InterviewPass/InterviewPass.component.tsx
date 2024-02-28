import { Application, RecruitSchedule } from '@/types/dto';
import { CURRENT_GENERATION, DAYS, TEAM_NICK_NAME } from '@/constants';

import { useDetectViewPort, useErrorModalDialog, useLoadingModal } from '@/hooks';
import { applicationApiService } from '@/api/services';
import { useSession } from 'next-auth/react';
import {
  Dispatch,
  MouseEventHandler,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState,
} from 'react';
import { ConfirmRejectFormValues } from '@/components/applyStatus/ConfirmRejectModalDialog/ConfirmRejectModalDialog.component';
import {
  ConfirmRejectModalDialog,
  ConfirmAcceptModalDialog,
  StatusDetailBackground,
} from '@/components';
import { SubmitHandler } from 'react-hook-form';
import dayjs from 'dayjs';
import * as Styled from './InterviewPass.styled';

interface InterviewPassProps {
  application: Application;
  setSubmittedApplication: Dispatch<SetStateAction<Application | undefined>>;
  recruitSchedule: RecruitSchedule;
}

const InterviewPass = ({
  application,
  setSubmittedApplication,
  recruitSchedule,
}: InterviewPassProps) => {
  const { LoadingModal, setIsLoading } = useLoadingModal();
  const { ErrorModalDialog, setIsOpenErrorModal } = useErrorModalDialog();
  const [isOpenRejectFinalConfirmModal, setIsOpenRejectFinalConfirmModal] = useState(false);
  const [isOpenAcceptFinalConfirmModal, setIsOpenAcceptFinalConfirmModal] = useState(false);

  const acceptInterviewButtonRef = useRef() as MutableRefObject<HTMLButtonElement>;
  const rejectInterviewButtonRef = useRef() as MutableRefObject<HTMLButtonElement>;

  const { applicant, applicationId } = application;

  const { size } = useDetectViewPort();

  const session = useSession();

  const handleAcceptInterview = async () => {
    setIsLoading(true);

    try {
      const confirmApplicantRes = await applicationApiService.confirmApplicant({
        accessToken: session.data?.accessToken,
        applicationId,
        updateConfirmationRequest: { status: 'FINAL_CONFIRM_ACCEPTED' },
      });

      setSubmittedApplication(confirmApplicantRes.data);
    } catch (error) {
      setIsOpenErrorModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRejectInterview: SubmitHandler<ConfirmRejectFormValues> = async ({
    confirmInput,
  }) => {
    setIsLoading(true);

    try {
      const confirmApplicantRes = await applicationApiService.confirmApplicant({
        accessToken: session.data?.accessToken,
        applicationId,
        updateConfirmationRequest: {
          status: 'FINAL_CONFIRM_REJECTED',
          rejectionReason: confirmInput,
        },
      });

      setSubmittedApplication(confirmApplicantRes.data);
    } catch (error) {
      setIsOpenErrorModal(true);
    } finally {
      setIsLoading(false);
      setIsOpenRejectFinalConfirmModal(false);
    }
  };

  const handleOpenRejectInterviewModal: MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpenRejectFinalConfirmModal(true);
  };

  const { INTERVIEW_RESULT_ANNOUNCED, AFTER_FIRST_SEMINAR_JOIN } = recruitSchedule;

  const interviewResultAnnouncedDayjs = dayjs(INTERVIEW_RESULT_ANNOUNCED);

  const joinResponseDeadlineDayjs = interviewResultAnnouncedDayjs
    .date(interviewResultAnnouncedDayjs.date() + 1)
    .hour(23)
    .minute(59)
    .second(59);

  const joinResponseDeadlineDate = joinResponseDeadlineDayjs.format(
    `M월 D일(${DAYS[joinResponseDeadlineDayjs.day()]}) HH시 m분 s초`,
  );

  const afterFirstSeminalJoinDayjs = dayjs(AFTER_FIRST_SEMINAR_JOIN);

  const afterFirstSeminalJoinDate = afterFirstSeminalJoinDayjs.format(
    `M월 D일(${DAYS[afterFirstSeminalJoinDayjs.day()]})`,
  );

  return (
    <>
      <StatusDetailBackground imageType="win">
        <Styled.InterviewPass>
          <Styled.ResultSection>
            <Styled.ResultMessage>
              {'축하드립니다.\n'}Mash-Up {CURRENT_GENERATION}기 {size === 'mobile' && '\n'}Rookie
              Recruiting{'\n'}
              <em>{TEAM_NICK_NAME[application.team.name]} 최종 합격</em>하셨습니다!
            </Styled.ResultMessage>
            <Styled.ResultDetail>
              안녕하세요 {applicant.name}님, Mash-Up입니다. Mash-Up {CURRENT_GENERATION}기에 많은
              관심을 가지고 귀한 시간 내어 면접에 참여해 주셔서 감사합니다. 귀하께서는{' '}
              {TEAM_NICK_NAME[application.team.name]} 면접에 합격하여 Mash-Up {CURRENT_GENERATION}기
              Rookie Recruiting에 최종 Crew로 선발 되셨습니다. 축하드립니다!! 마지막으로{' '}
              {CURRENT_GENERATION}기 합류 여부에 대해 응답해주시면 감사하겠습니다. 기다릴게요!
            </Styled.ResultDetail>
          </Styled.ResultSection>
          <Styled.ConfirmSection>
            <Styled.OtDateHeading>Mash-Up OT 일시</Styled.OtDateHeading>
            <Styled.OtDate>{`${afterFirstSeminalJoinDate} 오후 2시 ~ 5시`}</Styled.OtDate>
            <Styled.OtExplanationList>
              <li>
                {`${joinResponseDeadlineDate}까지 ${CURRENT_GENERATION}기 최종 합류 여부 응답 안 할 시 합류하지 않는 것으로 간주되니, 빠른 응답 부탁드립니다.`}
              </li>
              <li>전체 모임은 격주 토요일 오후 2시 ~ 5시에 온/오프라인을 병행하며 진행됩니다.</li>
              <li>
                궁금한 내용은 자주 묻는 질문에서 확인해주시거나, 페이지 우측 하단에 있는 채팅 상담을
                통해 문의해주세요.
              </li>
            </Styled.OtExplanationList>
            <Styled.ConfirmButtonWrapper>
              <Styled.CancelButton
                type="button"
                onClick={handleOpenRejectInterviewModal}
                ref={rejectInterviewButtonRef}
              >
                {CURRENT_GENERATION}기 합류 포기하기
              </Styled.CancelButton>
              <Styled.ApprovalButton
                type="button"
                onClick={() => setIsOpenAcceptFinalConfirmModal(true)}
                ref={acceptInterviewButtonRef}
              >
                {CURRENT_GENERATION}기 합류하기
              </Styled.ApprovalButton>
            </Styled.ConfirmButtonWrapper>
          </Styled.ConfirmSection>
        </Styled.InterviewPass>
      </StatusDetailBackground>

      {isOpenRejectFinalConfirmModal && (
        <ConfirmRejectModalDialog
          heading={`Mash-Up ${CURRENT_GENERATION}기 포기하시겠습니까?`}
          paragraph="합류 포기시에 해당 선택에 대한 번복 불가한 점 참고 부탁드립니다."
          approvalButtonMessage="포기하기"
          cancelButtonMessage="취소"
          handleApprovalButton={handleRejectInterview}
          handleCancelButton={() => setIsOpenRejectFinalConfirmModal(false)}
          setIsOpenModal={setIsOpenRejectFinalConfirmModal}
          beforeRef={rejectInterviewButtonRef}
          inputPlaceholder="합류를 포기하는 이유를 작성해주세요"
        />
      )}
      {isOpenAcceptFinalConfirmModal && (
        <ConfirmAcceptModalDialog
          heading={`Mash-Up ${CURRENT_GENERATION}기 합류하시겠습니까?`}
          paragraph=""
          inputPlaceHolder="합류합니다"
          approvalButtonMessage="합류하기"
          cancelButtonMessage="취소"
          handleApprovalButton={handleAcceptInterview}
          handleCancelButton={() => setIsOpenAcceptFinalConfirmModal(false)}
          setIsOpenModal={setIsOpenAcceptFinalConfirmModal}
          beforeRef={acceptInterviewButtonRef}
        />
      )}
      <LoadingModal setIsOpenModal={setIsLoading} />
      <ErrorModalDialog setIsOpenModal={setIsOpenErrorModal} />
    </>
  );
};

export default InterviewPass;

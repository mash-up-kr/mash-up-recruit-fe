import { Application } from '@/types/dto';
import { CURRENT_GENERATION, TEAM_NICK_NAME } from '@/constants';

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
import { ConfirmModalDialog } from '@/components';
import { getValueOfDateIntoObj } from '@/utils/date';
import holyshitImage from '@/assets/images/holyshit-2x-min.png';
import Image from 'next/image';
import * as Styled from './ScreeningPass.styled';

interface ScreeningPassProps {
  application: Application;
  setSubmittedApplication: Dispatch<SetStateAction<Application | undefined>>;
}

const ScreeningPass = ({ application, setSubmittedApplication }: ScreeningPassProps) => {
  const { LoadingModal, setIsLoading } = useLoadingModal();
  const { ErrorModalDialog, setIsOpenErrorModal } = useErrorModalDialog();
  const [isOpenRejectInterviewModal, setIsOpenRejectInterviewModal] = useState(false);

  const acceptInterviewButtonRef = useRef() as MutableRefObject<HTMLButtonElement>;
  const rejectInterviewButtonRef = useRef() as MutableRefObject<HTMLButtonElement>;

  const { applicant, applicationId } = application;

  const interviewStartDateInstance = new Date(application.result.interviewStartedAt || '');

  const { month, date, hour12Format, minute, dayKr, isAfternoon } = getValueOfDateIntoObj(
    interviewStartDateInstance,
  );

  const { size } = useDetectViewPort();

  const session = useSession();

  const handleAcceptInterview = async () => {
    setIsLoading(true);

    try {
      const confirmApplicantRes = await applicationApiService.confirmApplicant({
        accessToken: session.data?.accessToken,
        applicationId,
        updateConfirmationRequest: { status: 'INTERVIEW_CONFIRM_ACCEPTED' },
      });

      setSubmittedApplication(confirmApplicantRes.data);
    } catch (error) {
      setIsOpenErrorModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRejectInterview: MouseEventHandler<HTMLButtonElement> = async () => {
    setIsLoading(true);

    try {
      const confirmApplicantRes = await applicationApiService.confirmApplicant({
        accessToken: session.data?.accessToken,
        applicationId,
        updateConfirmationRequest: { status: 'INTERVIEW_CONFIRM_REJECTED' },
      });

      setSubmittedApplication(confirmApplicantRes.data);
    } catch (error) {
      setIsOpenErrorModal(true);
    } finally {
      setIsLoading(false);
      setIsOpenRejectInterviewModal(false);
    }
  };

  const handleOpenRejectInterviewModal: MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpenRejectInterviewModal(true);
  };

  return (
    <>
      <Styled.ScreeningPass>
        <Styled.ResultSection>
          <Styled.ResultMessage>
            {'축하드립니다.\n'}Mash-Up {CURRENT_GENERATION}기 {size === 'mobile' && '\n'}Rookie
            Recruiting{'\n'}
            <em>{TEAM_NICK_NAME[application.team.name]} 서류 합격</em>하셨습니다!
          </Styled.ResultMessage>
          <Styled.ResultDetail>
            안녕하세요 {applicant.name}님, Mash-Up입니다. Mash-Up {CURRENT_GENERATION}기에 많은
            관심을 가지고 귀한 시간 내어 지원해 주셔서 진심으로 감사드립니다. {applicant.name}님은
            Mash-Up {CURRENT_GENERATION}기 Rookie Recruiting에서 지원하신{' '}
            {TEAM_NICK_NAME[application.team.name]}의 1차 서류 전형에 합격하셨습니다. 다음 2차 면접
            참여 여부에 대해 선택해주시면 감사하겠습니다.
          </Styled.ResultDetail>
        </Styled.ResultSection>
        <Styled.ConfirmSection>
          <Styled.InterviewDateHeading>면접 일시</Styled.InterviewDateHeading>
          <Styled.InterviewDate>
            {application.result.interviewStartedAt
              ? `${month}월 ${date}일(${dayKr}) ${
                  isAfternoon ? '오후' : '오전'
                } ${hour12Format}시 ${minute}분`
              : '채널톡으로 문의해주세요.'}
          </Styled.InterviewDate>
          <Styled.InterviewExplanationList>
            <li>
              1월 31일(화) 오후 9시까지 면접 참여 여부 선택 안할 시 면접 불참으로 간주되니 빠른 응답
              부탁드립니다.
            </li>
            <li>
              면접 일정 조율이 불가피하게 필요하거나 궁금한 사항이 있으면 채널톡으로 문의해주시길
              바랍니다.
            </li>
          </Styled.InterviewExplanationList>
          <Styled.ConfirmButtonWrapper>
            <Styled.CancelButton
              type="button"
              onClick={handleOpenRejectInterviewModal}
              ref={rejectInterviewButtonRef}
            >
              면접 포기하기
            </Styled.CancelButton>
            <Styled.ApprovalButton
              type="button"
              onClick={handleAcceptInterview}
              ref={acceptInterviewButtonRef}
            >
              면접 참여하기
            </Styled.ApprovalButton>
          </Styled.ConfirmButtonWrapper>
        </Styled.ConfirmSection>
        <Styled.HolyshitImageWrapper>
          <Image src={holyshitImage.src} alt="" layout="fill" />
        </Styled.HolyshitImageWrapper>
        <Styled.GreatIcon />
      </Styled.ScreeningPass>
      {isOpenRejectInterviewModal && (
        <ConfirmModalDialog
          heading={'열심히 지원하셨는데... \n정말 면접 포기하실건가요..?'}
          paragraph="지원자님의 지원서를 인상깊게 봤습니다. 다시 생각해보시는건 어떨까요? 이번에 포기하시면 선택에 대해 다시 번복하실 수 없습니다."
          approvalButtonMessage="고민해볼게요"
          cancelButtonMessage="포기합니다"
          handleApprovalButton={() => setIsOpenRejectInterviewModal(false)}
          handleCancelButton={handleRejectInterview}
          setIsOpenModal={setIsOpenRejectInterviewModal}
          beforeRef={rejectInterviewButtonRef}
        />
      )}
      <LoadingModal setIsOpenModal={setIsLoading} />
      <ErrorModalDialog setIsOpenModal={setIsOpenErrorModal} />
    </>
  );
};

export default ScreeningPass;

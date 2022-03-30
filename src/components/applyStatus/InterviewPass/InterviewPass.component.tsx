import { Application } from '@/types/dto';
import { TEAM_NICK_NAME } from '@/constants';

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
import * as Styled from './InterviewPass.styled';

interface InterviewPassProps {
  application: Application;
  setSubmittedApplication: Dispatch<SetStateAction<Application | undefined>>;
}

const InterviewPass = ({ application, setSubmittedApplication }: InterviewPassProps) => {
  const { LoadingModal, setIsLoading } = useLoadingModal();
  const { ErrorModalDialog, setIsOpenErrorModal } = useErrorModalDialog();
  const [isOpenRejectFinalConfirmModal, setIsOpenRejectFinalConfirmModal] = useState(false);

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

  const handleRejectInterview: MouseEventHandler<HTMLButtonElement> = async () => {
    setIsLoading(true);

    try {
      const confirmApplicantRes = await applicationApiService.confirmApplicant({
        accessToken: session.data?.accessToken,
        applicationId,
        updateConfirmationRequest: { status: 'FINAL_CONFIRM_REJECTED' },
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

  return (
    <>
      <Styled.InterviewPass>
        <Styled.ResultSection>
          <Styled.ResultMessage>
            {'축하드립니다.\n'}Mash-Up 12기 {size === 'mobile' && '\n'}Rookie Recruiting{'\n'}
            <em>{TEAM_NICK_NAME[application.team.name]} 최종 합격</em>하셨습니다!
          </Styled.ResultMessage>
          <Styled.ResultDetail>
            안녕하세요 {applicant.name}님, Mash-Up입니다. Mash-Up 12기에 많은 관심을 가지고 귀한
            시간 내어 면접에 참여해 주셔서 감사합니다. 귀하께서는{' '}
            {TEAM_NICK_NAME[application.team.name]} 면접에 합격하여 Mash-Up 12기 Rookie Recruiting에
            최종 Crew로 선발 되셨습니다. 축하드립니다!! 마지막으로 12기 합류 여부에 대해
            응답해주시면 감사하겠습니다. 기다릴게요!
          </Styled.ResultDetail>
        </Styled.ResultSection>
        <Styled.ConfirmSection>
          <Styled.OtDateHeading>Mash-Up OT 일시</Styled.OtDateHeading>
          <Styled.OtDate>4월 16일(토) 오후 2시 ~ 5시 - ZOOM</Styled.OtDate>
          <Styled.OtExplanationList>
            <li>
              4월 13일(수) 오전 10시까지 12기 최종 합류 여부 응답 안 할 시 합류하지 않는 것으로
              간주되니, 빠른 응답 부탁드립니다.
            </li>
            <li>전체 모임은 격주 토요일 오후 2시에 온라인으로 진행됩니다.</li>
            <li>궁금한 내용은 자주 묻는 질문에서 확인해주시거나, 채널톡으로 문의해주세요.</li>
          </Styled.OtExplanationList>
          <Styled.ConfirmButtonWrapper>
            <Styled.CancelButton
              type="button"
              onClick={handleOpenRejectInterviewModal}
              ref={rejectInterviewButtonRef}
            >
              12기 합류 포기하기
            </Styled.CancelButton>
            <Styled.ApprovalButton
              type="button"
              onClick={handleAcceptInterview}
              ref={acceptInterviewButtonRef}
            >
              12기 합류하기
            </Styled.ApprovalButton>
          </Styled.ConfirmButtonWrapper>
        </Styled.ConfirmSection>
      </Styled.InterviewPass>
      {isOpenRejectFinalConfirmModal && (
        <ConfirmModalDialog
          heading={'Mash-Up 12기 합류 포기.. \n다시 생각해보시는 건 어떨까요..?'}
          paragraph="저희 Mash-Up 스태프는 지원자님과 12기를 꼭 함께 하고 싶어합니다. 이번에 합류 포기를 하시면 해당 선택에 대한 번복은 불가한 점 참고 부탁드립니다. "
          approvalButtonMessage="고민해볼게요"
          cancelButtonMessage="포기합니다"
          handleApprovalButton={() => setIsOpenRejectFinalConfirmModal(false)}
          handleCancelButton={handleRejectInterview}
          setIsOpenModal={setIsOpenRejectFinalConfirmModal}
          beforeRef={rejectInterviewButtonRef}
        />
      )}
      <LoadingModal setIsOpenModal={setIsLoading} />
      <ErrorModalDialog setIsOpenModal={setIsOpenErrorModal} />
    </>
  );
};

export default InterviewPass;

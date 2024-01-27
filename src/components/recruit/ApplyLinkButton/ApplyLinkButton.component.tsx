import { SignInModal } from '@/components';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import {
  generateRecruitSchedule,
  getRecruitingProgressStatusFromRecruitingPeriod,
} from '@/utils/date';
import { RecruitSchedule } from '@/types/dto';
import { applicationApiService } from '@/api/services';
import { CURRENT_GENERATION } from '@/constants';
import * as Styled from './ApplyLinkButton.styled';

interface ApplyLinkProps {
  applyPath: string;
}

const ApplyLinkButton = ({ applyPath }: ApplyLinkProps) => {
  const session = useSession();
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement>(null) as MutableRefObject<HTMLButtonElement>;
  const [isOpenSignInModal, setIsOpenSignInModal] = useState(false);

  const [recruitSchedule, setRecruitSchedule] = useState<RecruitSchedule | null>(null);

  const recruitingProgressStatus = getRecruitingProgressStatusFromRecruitingPeriod({
    date: new Date(),
    recruitSchedule,
  });

  useEffect(() => {
    const fetchRecruitSchedule = async () => {
      const { data: recruitScheduleResponse } = await applicationApiService.getRecruitSchedule({
        generationNumber: CURRENT_GENERATION,
      });

      setRecruitSchedule(generateRecruitSchedule(recruitScheduleResponse));
    };

    fetchRecruitSchedule();
  }, []);

  const isRecruitingInProgress = recruitingProgressStatus === 'IN-RECRUITING';

  const handleLinkButtonClick = () => {
    if (session.status !== 'authenticated') {
      setIsOpenSignInModal(true);
    } else {
      router.push(applyPath);
    }
  };

  return (
    <>
      <Styled.Container>
        <Styled.LinkButton
          ref={buttonRef}
          onClick={handleLinkButtonClick}
          disabled={!isRecruitingInProgress}
        >
          {isRecruitingInProgress ? '지원하기' : '지원기간이 아닙니다'}
        </Styled.LinkButton>
      </Styled.Container>
      {isOpenSignInModal && (
        <SignInModal
          type="apply"
          setIsOpenModal={setIsOpenSignInModal}
          beforeRef={buttonRef}
          callbackUrl={applyPath}
        />
      )}
    </>
  );
};
export default ApplyLinkButton;

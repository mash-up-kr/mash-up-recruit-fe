import { SignInModal } from '@/components';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { MutableRefObject, useRef, useState } from 'react';
import { getRecruitingProgressStatusFromRecruitingPeriod } from '@/utils/date';
import { RecruitSchedule } from '@/types/dto';

import * as Styled from './ApplyLinkButton.styled';

interface ApplyLinkProps {
  applyPath: string;
  recruitSchedule: RecruitSchedule;
}

const ApplyLinkButton = ({ applyPath, recruitSchedule }: ApplyLinkProps) => {
  const session = useSession();
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement>(null) as MutableRefObject<HTMLButtonElement>;
  const [isOpenSignInModal, setIsOpenSignInModal] = useState(false);

  const recruitingProgressStatus = getRecruitingProgressStatusFromRecruitingPeriod({
    date: new Date(),
    recruitSchedule,
  });

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

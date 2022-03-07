import { SignInModalDialog } from '@/components';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ChangeEventHandler, MutableRefObject, useRef, useState } from 'react';
import { getRecruitingProgressStatusFromRecruitingPeriod } from '@/utils/date';
import * as Styled from './ApplyLinkButton.styled';

// TODO:(성백) input 태그 내에서의 포맷을 위한 헬퍼 함수로 Production에서는 제거한다.
const leftPad = (value: number) => {
  if (value >= 10) {
    return value;
  }
  return `0${value}`;
};

const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${leftPad(date.getMonth() + 1)}-${leftPad(date.getDate())}`;
};

interface ApplyLinkProps {
  applyPath: string;
}

const ApplyLinkButton = ({ applyPath }: ApplyLinkProps) => {
  const session = useSession();
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement>(null) as MutableRefObject<HTMLButtonElement>;
  const [isOpenSignInModal, setIsOpenSignInModal] = useState(false);

  // TODO:(성백) 2차 QA를 위한 상태로 Production에서는 제거한다.
  const [currentDate, setCurrentDate] = useState(new Date());

  const recruitingProgressStatus = getRecruitingProgressStatusFromRecruitingPeriod(currentDate);

  const handleLinkButtonClick = () => {
    if (session.status !== 'authenticated') {
      setIsOpenSignInModal(true);
    } else {
      router.push(applyPath);
    }
  };

  // TODO:(성백) 2차 QA를 위한 함수로 Production에서는 제거한다.
  const handleDateChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setCurrentDate(new Date(target.value));
  };

  return (
    <>
      <Styled.Container>
        <input type="date" onChange={handleDateChange} value={formatDate(currentDate)} />
        <Styled.LinkButton
          ref={buttonRef}
          onClick={handleLinkButtonClick}
          disabled={recruitingProgressStatus !== 'IN-PROGRESS'}
        >
          {recruitingProgressStatus === 'IN-PROGRESS' ? '지원하기' : '지원기간이 아닙니다'}
        </Styled.LinkButton>
      </Styled.Container>
      {isOpenSignInModal && (
        <SignInModalDialog
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

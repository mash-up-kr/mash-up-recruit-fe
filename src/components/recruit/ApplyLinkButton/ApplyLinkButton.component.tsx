import { SignInModalDialog } from '@/components';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { MutableRefObject, useRef, useState } from 'react';
import * as Styled from './ApplyLinkButton.styled';

interface ApplyLinkProps {
  applyPath: string;
}

const ApplyLinkButton = ({ applyPath }: ApplyLinkProps) => {
  const session = useSession();
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement>(null) as MutableRefObject<HTMLButtonElement>;
  const [isOpenSignInModal, setIsOpenSignInModal] = useState(false);

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
        <Styled.LinkButton ref={buttonRef} onClick={handleLinkButtonClick}>
          지원하기
        </Styled.LinkButton>
      </Styled.Container>
      {isOpenSignInModal && (
        <SignInModalDialog
          type="apply"
          setIsOpenModal={setIsOpenSignInModal}
          beforeRef={buttonRef}
        />
      )}
    </>
  );
};
export default ApplyLinkButton;

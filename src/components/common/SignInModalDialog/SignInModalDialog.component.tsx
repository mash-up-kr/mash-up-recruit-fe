import { Modal } from '@/components';
import GoogleLogo from '@/assets/svg/google-logo.svg';
import { Dispatch, MouseEventHandler, MutableRefObject, SetStateAction } from 'react';
import XIcon from '@/assets/svg/x-icon.svg';
import { signIn } from 'next-auth/react';
import * as Styled from './SignInModalDialog.styled';

const STATIC_MESSAGE = {
  header: {
    login: 'Mash-Up에 오신 것을 환영해요!',
    apply: '지원하기 위해서는 로그인이 필요해요!',
  },
  paragraph: {
    desktop: {
      login: '로그인을 하시면 더 둘러볼 수 있는 정보가 생겨요 \n저희와 조금 더 친해져보실래요?',
      apply: '로그인을 통해 추후 지원자님의 지원 프로세스를 \n원활하게 안내해드릴 수 있습니다.',
    },
    // TODO:(하준) 태블릿, 모바일 뷰 추가되면 뷰애 맞는 줄바꿈 적용하여 문구 추가
    tablet: {
      login: '',
      apply: '',
    },
    mobile: {
      login: '',
      apply: '',
    },
  },
};

export interface SignInModalDialogProps {
  type: 'login' | 'apply';
  device: 'desktop' | 'tablet' | 'mobile';
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  beforeRef: MutableRefObject<HTMLButtonElement>;
}

const SignInModalDialog = ({ type, device, setIsOpenModal, beforeRef }: SignInModalDialogProps) => {
  const handleCloseSignInModal: MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpenModal(false);
  };

  const handleSignIn: MouseEventHandler<HTMLButtonElement> = () => {
    signIn('google');
  };

  return (
    <Modal beforeRef={beforeRef} setIsOpenModal={setIsOpenModal}>
      <Styled.Dialog>
        <Styled.Heading>{STATIC_MESSAGE.header[type]}</Styled.Heading>
        <Styled.Paragraph>{STATIC_MESSAGE.paragraph[device][type]}</Styled.Paragraph>
        <Styled.SignInButton type="button" onClick={handleSignIn}>
          <GoogleLogo />
          Google 계정으로 로그인
        </Styled.SignInButton>
        <Styled.Notice>
          로그인시 서비스 이용약관과 개인정보 처리방침에 동의하게 됩니다.
        </Styled.Notice>
        <Styled.CloseButton type="button" onClick={handleCloseSignInModal}>
          <div />
          <XIcon />
        </Styled.CloseButton>
      </Styled.Dialog>
    </Modal>
  );
};

export default SignInModalDialog;

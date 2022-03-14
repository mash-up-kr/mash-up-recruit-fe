import GoogleLogo from '@/assets/svg/google-logo.svg';
import { MouseEventHandler } from 'react';
import XIcon from '@/assets/svg/x-icon.svg';
import { signIn } from 'next-auth/react';
import { useDetectViewPort } from '@/hooks';
import * as Styled from './SignInDialog.styled';

const STATIC_MESSAGE = {
  header: {
    login: 'Mash-Up에 오신 것을 환영해요!',
    apply: '지원하기 위해서는 로그인이 필요해요!',
  },
  paragraph: {
    desktop: {
      login: '로그인을 하면 더 둘러볼 수 있는 \n정보가 생겨요! 저희와 조금 더 친해져봐요!',
      apply: '로그인을 통해 지원 프로세스를 원활하게\n 안내받으실 수 있습니다.',
    },
    mobile: {
      login: '로그인을 하면 더 둘러볼 수 있는\n 정보가 생겨요! 저희와 조금 더 친해져봐요!',
      apply: '로그인을 통해 지원 프로세스를 원활하게\n 안내받으실 수 있습니다.',
    },
  },
};

export interface SignInDialogProps {
  type: 'login' | 'apply';
  handleCloseButton: MouseEventHandler<HTMLButtonElement>;
  callbackUrl?: string;
}

const SignInDialog = ({ type, handleCloseButton, callbackUrl }: SignInDialogProps) => {
  const { size } = useDetectViewPort();

  const handleSignIn: MouseEventHandler<HTMLButtonElement> = () => {
    signIn('google', { callbackUrl });
  };

  return (
    <Styled.Dialog>
      <Styled.DialogContent>
        <Styled.Heading>{STATIC_MESSAGE.header[type]}</Styled.Heading>
        <Styled.Paragraph>
          {STATIC_MESSAGE.paragraph[size === 'mobile' ? 'mobile' : 'desktop'][type]}
        </Styled.Paragraph>
        <Styled.SignInButton type="button" onClick={handleSignIn}>
          <GoogleLogo />
          Google 계정으로 로그인
        </Styled.SignInButton>
      </Styled.DialogContent>
      <Styled.Notice>
        <span>•</span>
        로그인시 서비스 이용약관과 개인정보 처리방침에 동의하게 됩니다.
      </Styled.Notice>
      <Styled.CloseButton type="button" onClick={handleCloseButton}>
        <Styled.CloseButtonDeem />
        <XIcon />
      </Styled.CloseButton>
    </Styled.Dialog>
  );
};

export default SignInDialog;

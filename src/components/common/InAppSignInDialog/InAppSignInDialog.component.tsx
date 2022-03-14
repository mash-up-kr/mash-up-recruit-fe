import { InAppBrowser, getInAppBrowser } from '@/utils/userAgent';
import { useCopyToClipboard } from '@/hooks';
import * as Styled from './InAppSignInDialog.styled';

const TARGET_URL = 'https://recruit.mash-up.kr';

const browserNameMap = {
  KAKAO: '카카오톡',
  FACEBOOK: '페이스북',
  INSTAGRAM: '인스타그램',
  NAVER: '네이버',
} as const;

export interface InAppSignInDialogProps {
  handleSuccessCopy: () => void;
  handleCloseButton: () => void;
}

const InAppSignInDialog = ({ handleSuccessCopy, handleCloseButton }: InAppSignInDialogProps) => {
  const browserName = browserNameMap[getInAppBrowser(window.navigator) as InAppBrowser];

  const { copy } = useCopyToClipboard(TARGET_URL, {
    onSuccess: handleSuccessCopy,
  });

  return (
    <Styled.Dialog>
      <Styled.DialogInner>
        <Styled.Heading>{`${browserName}에서는 로그인이 안돼요...`}</Styled.Heading>
        <Styled.Paragraph>
          다른 모바일 브라우저(Chrome, Safari)로 이동해서 다시 로그인해주세요!
        </Styled.Paragraph>
      </Styled.DialogInner>
      <Styled.DialogFooter>
        <Styled.LinkCopyButton type="button" onClick={copy}>
          <div />
          링크 복사
        </Styled.LinkCopyButton>
        <Styled.CloseButton type="button" onClick={handleCloseButton}>
          <div />
          확인
        </Styled.CloseButton>
      </Styled.DialogFooter>
    </Styled.Dialog>
  );
};

export default InAppSignInDialog;

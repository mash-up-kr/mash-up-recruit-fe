import { InAppBrowser, getInAppBrowser } from '@/utils/userAgent';
import { useCopyToClipboard, useToast } from '@/hooks';
import * as Styled from './InAppSignInDialog.styled';

const TARGET_URL = 'https://recruit.mash-up.kr';

const browserNameMap: Record<InAppBrowser, string> = {
  KAKAO: '카카오톡',
  FACEBOOK: '페이스북',
  INSTAGRAM: '인스타그램',
  NAVER: '네이버',
  CAMPUS_PICK: '캠퍼스픽',
  EVERY_TIME: '에브리타임',
  LINKEDIN: '링크드인',
} as const;

export interface InAppSignInDialogProps {
  handleCloseDialog: () => void;
}

const InAppSignInDialog = ({ handleCloseDialog }: InAppSignInDialogProps) => {
  const browserName = browserNameMap[getInAppBrowser(window.navigator) as InAppBrowser];
  const toast = useToast();
  const { copy } = useCopyToClipboard(TARGET_URL, {
    onSuccess: () => {
      toast({ content: '링크 복사 완료!', status: 'success' });
    },
    onError: () => {
      toast({
        content: <span style={{ textDecoration: 'underline' }}>{TARGET_URL}</span>,
        status: 'error',
        persist: true,
      });
    },
    onComplete: handleCloseDialog,
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
        <Styled.CloseButton type="button" onClick={handleCloseDialog}>
          <div />
          확인
        </Styled.CloseButton>
      </Styled.DialogFooter>
    </Styled.Dialog>
  );
};

export default InAppSignInDialog;

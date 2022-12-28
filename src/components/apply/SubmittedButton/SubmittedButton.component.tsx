import { Application } from '@/types/dto';
import * as Styled from './SubmittedButton.styled';

interface SubmittedButtonProps {
  application: Application;
  isCurrentlyOnDetailPage: boolean;
}

const SubmittedButton = ({ application, isCurrentlyOnDetailPage }: SubmittedButtonProps) => {
  return isCurrentlyOnDetailPage && application.status === 'SUBMITTED' ? (
    <Styled.SubmittedCompletedButton type="button" disabled>
      제출 완료된 지원서 입니다
    </Styled.SubmittedCompletedButton>
  ) : (
    <Styled.AlreadySubmittedButton type="button" disabled>
      이미 제출한 지원서가 있습니다
    </Styled.AlreadySubmittedButton>
  );
};

export default SubmittedButton;

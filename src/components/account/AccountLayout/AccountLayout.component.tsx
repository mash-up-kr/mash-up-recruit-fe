import { Applicant } from '@/types/dto';
import { AccountManagement } from '@/components';
import * as Styled from './AccountLayout.styled';

interface AccountLayoutProps {
  userInfo: Applicant;
}

const AccountLayout = ({ userInfo }: AccountLayoutProps) => {
  return (
    <Styled.Layout>
      <AccountManagement userInfo={userInfo} />
    </Styled.Layout>
  );
};

export default AccountLayout;

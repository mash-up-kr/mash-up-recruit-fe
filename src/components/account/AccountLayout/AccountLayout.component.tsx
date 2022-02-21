import { Applicant } from '@/types/dto';
import { AccountManagament } from '@/components';
import * as Styled from './AccountLayout.styled';

interface AccountLayoutProps {
  userInfo: Applicant;
}

const AccountLayout = ({ userInfo }: AccountLayoutProps) => {
  return (
    <Styled.Layout>
      <AccountManagament userInfo={userInfo} />
    </Styled.Layout>
  );
};

export default AccountLayout;

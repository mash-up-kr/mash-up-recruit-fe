import { Applicant } from '@/types/dto';
import { signOut } from 'next-auth/react';
import * as Styled from './AccountManagament.styled';

interface AccountManagamentProps {
  userInfo: Applicant;
}

const AccountManagament = ({ userInfo }: AccountManagamentProps) => {
  const handleSignOut = () => {
    signOut();
  };
  return (
    <Styled.AccountManagement>
      <Styled.Heading>계정 관리</Styled.Heading>
      <Styled.MainWrapper>
        <div>
          <Styled.InfoList>
            <Styled.InfoListItem>
              <Styled.ItemHeading>이메일</Styled.ItemHeading>
              <Styled.ItemContent>{userInfo.email}</Styled.ItemContent>
            </Styled.InfoListItem>
          </Styled.InfoList>
          <Styled.ThankYouSignIng>가입해주셔서 감사합니다.</Styled.ThankYouSignIng>
        </div>
        <Styled.SignOutButton type="button" onClick={handleSignOut}>
          로그아웃
        </Styled.SignOutButton>
      </Styled.MainWrapper>
    </Styled.AccountManagement>
  );
};

export default AccountManagament;

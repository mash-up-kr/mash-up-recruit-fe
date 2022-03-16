import { Applicant } from '@/types/dto';
import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import * as Styled from './AccountManagement.styled';

interface AccountManagementProps {
  userInfo: Applicant;
}

const AccountManagement = ({ userInfo }: AccountManagementProps) => {
  const { email, name, birthdate } = userInfo;
  const [userAgent, setUserAgent] = useState('');
  const isAdmin =
    (email === 'fbgkwns@gmail.com' && name === '어드민1' && birthdate === '9999-12-31') ||
    (email === 'dumbuk12@gmail.com' && name === '어드민2' && birthdate === '9999-12-31');

  useEffect(() => {
    setUserAgent(window.navigator.userAgent);
  }, []);

  const handleSignOut = () => {
    signOut();
  };
  return (
    <>
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
      {isAdmin && <Styled.UserAgent>{userAgent}</Styled.UserAgent>}
    </>
  );
};

export default AccountManagement;

import { FAQ_PAGE, HOME_PAGE } from '@/consts';
import { LinkTo } from '@/components';
import DivisionLine from '@/assets/svg/division-line.svg';
import * as Styled from './MainNavigation.styled';

const MainNavigation = () => {
  return (
    <Styled.Nav>
      <Styled.NavList>
        <li>
          <LinkTo href={HOME_PAGE}>모집 공고</LinkTo>
        </li>
        <li>
          <LinkTo href={FAQ_PAGE}>자주 묻는 질문</LinkTo>
          <DivisionLine />
        </li>
        <li>
          <Styled.LoginButton type="button">로그인</Styled.LoginButton>
        </li>
      </Styled.NavList>
    </Styled.Nav>
  );
};

export default MainNavigation;

import { HOME_PAGE, MY_PAGE_APPLY_STATUS, PATH_NAME } from '@/constants';
import { Application } from '@/types/dto';
import { useRouter } from 'next/router';
import * as Styled from './BackToListLink.styled';

interface BackToListLinkProps {
  application: Application;
}

const BackToListLink = ({ application }: BackToListLinkProps) => {
  const router = useRouter();
  return (
    <Styled.BackToListLink
      href={
        router.pathname === PATH_NAME.APPLY_PAGE
          ? `/recruit/${application.team.name.toLowerCase()}`
          : router.pathname === PATH_NAME.MY_PAGE_APPLICATION_DETAIL
          ? MY_PAGE_APPLY_STATUS
          : HOME_PAGE
      }
    >
      <Styled.ChevronLeft />
      <span>목록으로 돌아가기</span>
    </Styled.BackToListLink>
  );
};

export default BackToListLink;

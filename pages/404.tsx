import styled from '@emotion/styled';
import debuging from '@/assets/images/debuging-2x.png';
import Image from 'next/image';
import { css } from '@emotion/react';
import LinkTo from '@/components/common/LinkTo/LinkTo.component';
import { HOME_PAGE } from '@/constants';

const StyledNotFound = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

const StyledParagraph = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold22};
    margin: 3.6rem 0;
    color: ${theme.colors.gray80};
    letter-spacing: -0.08rem;
  `}
`;

const StyledToHomeLink = styled(LinkTo)`
  ${({ theme }) => css`
    ${theme.button.type.primary};
    display: inline-block;
    padding: 1.6rem 2rem;
    letter-spacing: -0.08rem;
  `}
`;

const NotFound = () => {
  return (
    <StyledNotFound>
      <Image src={debuging.src} width={debuging.width / 2} height={debuging.height / 2} alt="" />
      <StyledParagraph>요청한.. 페이지가.. 없..다.. 왜지..?</StyledParagraph>
      <StyledToHomeLink href={HOME_PAGE}>Mash-Up 리크루팅 홈페이지로 호다닥</StyledToHomeLink>
    </StyledNotFound>
  );
};

export default NotFound;

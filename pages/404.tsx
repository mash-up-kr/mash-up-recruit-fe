import styled from '@emotion/styled';
import debuging from '@/assets/images/debuging-2x.png';
import Image from 'next/image';
import { css } from '@emotion/react';
import LinkTo from '@/components/common/LinkTo/LinkTo.component';
import { HOME_PAGE } from '@/constants';
import { useDetectViewPort } from '@/hooks';

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

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.medium15};
      margin: 2rem 0 5rem;
    }
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
  const { size } = useDetectViewPort();
  return (
    <StyledNotFound>
      <Image
        src={debuging.src}
        width={size === 'mobile' || size === 'tablet_s' ? 160 : 240}
        height={size === 'mobile' || size === 'tablet_s' ? 160 : 240}
        alt=""
      />
      <StyledParagraph>요청한.. 페이지가.. 없..다.. 왜지..?</StyledParagraph>
      <StyledToHomeLink href={HOME_PAGE}>Mash-Up 리크루팅 홈페이지로 호다닥</StyledToHomeLink>
    </StyledNotFound>
  );
};

export default NotFound;

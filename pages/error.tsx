import styled from '@emotion/styled';
import debuging from '@/assets/images/debuging-2x.png';
import Image from 'next/image';
import { css } from '@emotion/react';
import LinkTo from '@/components/common/LinkTo/LinkTo.component';
import { HOME_PAGE } from '@/constants';
import { useDetectViewPort } from '@/hooks';

const StyledErrorPage = styled.div`
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
    white-space: pre-wrap;
    text-align: center;

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

const Error = () => {
  const { size } = useDetectViewPort();
  return (
    <StyledErrorPage>
      <Image
        src={debuging.src}
        width={size === 'mobile' || size === 'tablet_s' ? 160 : 240}
        height={size === 'mobile' || size === 'tablet_s' ? 160 : 240}
        alt=""
      />
      <StyledParagraph>
        {'알 수 없는 에러가.. 발생..했다..\n에러가 자꾸 나면.. 채널톡으로 문의해죠....!'}
      </StyledParagraph>
      <StyledToHomeLink href={HOME_PAGE}>Mash-Up 리크루팅 홈페이지로 호다닥</StyledToHomeLink>
    </StyledErrorPage>
  );
};

export default Error;

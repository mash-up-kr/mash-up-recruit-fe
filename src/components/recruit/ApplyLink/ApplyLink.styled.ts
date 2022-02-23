import LinkTo from '@/components/common/LinkTo/LinkTo.component';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoint.media.mobile}) {
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 1.6rem 0 2rem;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 18.05%);
    }
  `}
`;

export const Link = styled(LinkTo)`
  ${({ theme }) => css`
    ${theme.button.type.primary};
    display: block;
    width: 26rem;
    text-align: center;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 33rem;
    }
  `}
`;

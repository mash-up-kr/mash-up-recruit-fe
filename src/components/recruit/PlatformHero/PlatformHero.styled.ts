import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface StyledContainerProps {
  color: string;
}

export const Container = styled.div<StyledContainerProps>`
  ${({ theme, color }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 28.4rem;
    background-color: ${color};

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      height: 20rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      height: 18rem;
    }
  `}
`;

export const EmojisContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 25rem;
    line-height: 0;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      width: 21rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 17rem;
    }
  `}
`;

export const EmojiContainer = styled.div`
  ${({ theme }) => css`
    svg {
      width: 12rem;
      height: 12rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      svg {
        width: 10rem;
        height: 10rem;
      }
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      svg {
        width: 8rem;
        height: 8rem;
      }
    }
  `}
`;

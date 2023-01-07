import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StatusDetailBackground = styled.div<{ contentSize: 'l' | 's' | 'xs' }>`
  ${({ theme, contentSize }) => css`
    position: relative;
    max-width: 120rem;
    margin: 4rem auto 0;
    padding: 4rem;
    background: ${theme.colors.gray90};
    border-radius: 3rem;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      padding-bottom: ${contentSize === 'l' ? '12rem' : '4rem'};
    }

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      padding-bottom: ${contentSize === 'xs' ? '4rem' : '8.5rem'};
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding: 4rem 2.4rem ${contentSize === 'xs' ? '4rem' : '8.5rem'};
    }
  `}
`;

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 20rem;
    height: 14rem;

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      width: 15rem;
      height: 10.5rem;
    }
  `}
`;

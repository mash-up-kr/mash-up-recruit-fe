import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: calc(100vh - 8rem);
    min-height: 90rem;

    span {
      display: block;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      min-height: 80rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      height: calc(100vh - 6.4rem);
      min-height: 60rem;
    }
  `}
`;

export const Contents = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold146};
    position: relative;
    flex: 1 0 0;
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    color: ${theme.colors.white};

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.en.extrabold100};
      max-width: 64rem;
      height: 60rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.en.extrabold80};
      max-width: 42.7rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.en.extrabold60};

      max-width: 32rem;
      height: 43.5rem;
    }
  `}
`;

export const Generation = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 3rem;
    align-items: center;

    span {
      display: inline-block;
      color: transparent;
      background: linear-gradient(106.25deg, #5e44ff 3.16%, #ff3163 90.62%);
      background-clip: text;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      gap: 1rem;
    }
  `}
`;

export const RightImageContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 38.4rem;
    height: 10.7rem;
    transform: translate(0, -10%);

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      width: 26.5rem;
      height: 7.5rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      width: 21.2rem;
      height: 6rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 15.736rem;
      height: 4.385rem;
    }
  `}
`;

export const RookieRecruiting = styled.div`
  color: transparent;
  background: linear-gradient(134.91deg, #4c49e0 23.26%, #f13f5f 73.66%);
  background-clip: text;
`;

export const DoubleUnderlineContainer = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: 63.613rem;
    left: 0rem;
    line-height: 0;

    svg {
      width: 37.9rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      top: 60rem;
      left: 0rem;

      svg {
        width: 26.5rem;
        height: 5.3rem;
      }
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      top: 46.6rem;
      left: 0rem;

      svg {
        width: 23rem;
        height: 4.6rem;
      }
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      top: 35rem;
      left: 0rem;

      svg {
        width: 16rem;
        height: 3.2rem;
      }
    }
  `}
`;
export const YeahContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 54.612rem;
    left: 38.9rem;
    line-height: 0;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      top: 49.4rem;
      left: 26.6rem;

      svg {
        width: 27.5rem;
        height: 24.3rem;
      }
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      top: 39rem;
      left: 22.4rem;

      svg {
        width: 27.5rem;
        height: 24.3rem;
      }
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      top: 30rem;
      left: 16rem;

      svg {
        width: 15.3rem;
        height: 13.5rem;
      }
    }
  `}
`;

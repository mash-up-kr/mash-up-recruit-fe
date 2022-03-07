import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: calc(100vh - 8rem);
    min-height: 70rem;

    span {
      display: block;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      height: calc(100vh - 6.4rem);
    }
  `}
`;

export const Contents = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold150};
    position: relative;
    flex: 1 0 0;
    width: 100%;
    max-width: 122.3rem;
    margin: 0 auto;
    color: ${theme.colors.white};

    & > svg:first-of-type {
      position: absolute;
      top: 69.512rem;
      left: -6.8rem;
    }

    & > svg:last-of-type {
      position: absolute;
      top: 58.613rem;
      left: 41.3rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.en.extrabold100};
      max-width: 53rem;
      height: 60rem;
      margin: 0 2rem;

      & > svg:first-of-type {
        top: 60rem;
        left: 0rem;
        width: 26.5rem;
        height: 5.3rem;
      }

      & > svg:last-of-type {
        top: 49.4rem;
        left: 26.6rem;
        width: 27.5rem;
        height: 24.3rem;
      }
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.en.extrabold80};

      & > svg:first-of-type {
        top: 46.6rem;
        left: 0rem;
        width: 23rem;
        height: 4.6rem;
      }

      & > svg:last-of-type {
        top: 39rem;
        left: 22.4rem;
        width: 27.5rem;
        height: 24.3rem;
      }
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.en.extrabold60};

      max-width: 32.394rem;
      height: 43.5rem;

      & > svg:first-of-type {
        top: 35rem;
        left: 0rem;
        width: 16rem;
        height: 3.2rem;
      }

      & > svg:last-of-type {
        top: 30rem;
        left: 16rem;
        width: 15.3rem;
        height: 13.5rem;
      }
    }
  `}
`;

export const Generation = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;

  span {
    display: inline-block;
    color: transparent;
    background: linear-gradient(106.25deg, #5e44ff 3.16%, #ff3163 90.62%);
    background-clip: text;
  }
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

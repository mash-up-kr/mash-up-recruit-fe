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
    width: 100%;
    max-width: 120rem;
    height: 71.6rem;
    margin: 0 auto;
    color: ${theme.colors.white};

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.en.extrabold100};
      max-width: 64rem;
      height: 49.2rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.en.extrabold80};
      max-width: 42.7rem;
      height: 39.2rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.en.extrabold60};
      max-width: 32rem;
      height: 29.6rem;
    }
  `}
`;

export const WeAre = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 3rem;
    align-items: center;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      gap: 1rem;
    }
  `}
`;

export const LeftImageContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 28.4rem;
    height: 10.9rem;
    transform: translate(0, -10%);

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      width: 20.5rem;
      height: 7.865rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      width: 14.4rem;
      height: 5.6rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 11rem;
      height: 4.2rem;
    }
  `}
`;

export const MashUp = styled.div`
  display: inline-block;
  color: transparent;
  background: linear-gradient(90deg, #ff3b5e 33.96%, #6046ff 74.2%);
  background-clip: text;
`;

export const Crewz = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 3rem;
    align-items: center;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      gap: 1rem;
    }
  `}
`;

export const RightImageContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 37.5rem;
    height: 10.8rem;
    transform: translate(0, -10%);

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      width: 22.7rem;
      height: 6.486rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      width: 16.4rem;
      height: 4.8rem;
      transform: translate(0);
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 12.5rem;
      height: 3.6rem;
    }
  `}
`;

export const HiContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 40.2rem;
    left: 73.6rem;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      top: 25rem;
      left: 44.3rem;

      svg {
        width: 23rem;
        height: 18.4rem;
      }
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      top: calc(100% + 1.8rem);
      left: 0;

      svg {
        width: 13.8rem;
        height: 11rem;
      }
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      top: calc(100% + 1.2rem);
    }
  `}
`;

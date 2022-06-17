import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      min-height: 72rem;
      color: ${theme.colors.white};

      span {
        ${theme.fonts.en.extrabold24};
      }

      time {
        ${theme.fonts.en.extrabold80};
      }
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      min-height: 72rem;

      span {
        ${theme.fonts.en.extrabold20};
      }

      time {
        ${theme.fonts.en.extrabold60};
      }
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      min-height: 66.7rem;
      span {
        ${theme.fonts.en.extrabold15};
      }

      time {
        ${theme.fonts.en.extrabold46};
      }
    }
  `}
`;

export const Contents = styled.div`
  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 39.8rem;
      height: 56.2rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      width: 26.5rem;
      height: 53.8rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 20.7rem;
      height: 38.7rem;
    }
  `}
`;

export const StartDateContainer = styled.div`
  display: flex;
`;

export const StartDate = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EndDateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const EndDate = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PeriodBackgroundContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: -3.6rem;
    left: 6.4rem;
    width: 29.6rem;
    height: 53rem;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      top: -3.6rem;
      left: 0.1rem;
      height: 51.7rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      top: -4.5rem;
      left: -1.4rem;
    }
  `}
`;

export const PeriodArrowContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 41rem;
    left: 1.4rem;
    line-height: 0;

    svg {
      width: 8rem;
      height: 12rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      top: 39.7rem;
      left: 0.6rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      top: 30.5rem;
      left: 1.8rem;
      svg {
        width: 6rem;
        height: 9rem;
      }
    }
  `}
`;

export const ComputerContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 8rem;
    width: 21.6rem;
    height: 30.3rem;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      left: 6rem;
      width: 18rem;
      height: 25rem;
    }
  `}
`;

export const FireContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 28.3rem;
    width: 10rem;
    height: 10rem;
    line-height: 0;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      top: 27.8rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      top: 21.7rem;
      width: 8rem;
      height: 8rem;
    }
  `}
`;

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      display: flex;
      align-items: center;
      justify-content: center;
      height: calc(100vh - 8rem);
      min-height: 70rem;
      color: ${theme.colors.white};

      span {
        ${theme.fonts.en.extrabold24};
      }

      time {
        ${theme.fonts.en.extrabold80};
      }
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      span {
        ${theme.fonts.en.extrabold20};
      }

      time {
        ${theme.fonts.en.extrabold60};
      }
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
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
      width: 38.8rem;
      height: 56.2rem;

      svg {
        position: absolute;
        top: -3.6rem;
        left: 6.4rem;
      }
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      width: 26.5rem;
      height: 53.8rem;

      svg {
        top: -3rem;
        left: 0.1rem;
        width: 29.6rem;
        height: 51.7rem;
      }
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 20.7rem;
      height: 38.7rem;

      svg {
        top: -4.5rem;
        left: -1.4rem;
        width: 24rem;
        height: 39.5rem;
      }
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

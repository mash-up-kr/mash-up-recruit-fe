import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 30rem auto;
    color: ${theme.colors.gray20};

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      margin: 20rem auto;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      margin: 12rem auto;
    }
  `}
`;

export const Contents = styled.div`
  ${({ theme }) => css`
    max-width: 124rem;
    margin: 0 auto;
    padding: 0 2rem;
    letter-spacing: -0.08rem;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      max-width: 76.8rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      max-width: 57.6rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      max-width: 37.5rem;
    }
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold46};
    margin: 6rem 0;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      margin: 4rem 0;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.en.extrabold26};
    }
  `}
`;

export const List = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    height: 22rem;
    color: ${theme.colors.white};
    background: linear-gradient(134.91deg, #4c49e0 23.26%, #f13f5f 73.66%);

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(6, 1fr);
      height: 47rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      width: 53.6rem;
      height: 35rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      display: grid;
      grid-template-rows: repeat(6, 1fr);
      grid-template-columns: repeat(2, 1fr);
      width: 33rem;
      height: 62rem;
    }
  `}
`;

export const ListItem = styled.li`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    align-items: center;
    justify-content: center;
    width: 22rem;

    &:before {
      position: absolute;
      top: -0.1rem;
      right: -0.1rem;
      bottom: -0.1rem;
      left: -0.1rem;
      background: radial-gradient(circle, transparent 10.9rem, ${theme.colors.gray95} 11rem);
      content: '';
    }

    &:not(:last-of-type):after {
      position: absolute;
      top: -0.1rem;
      left: 100%;
      width: 2.5rem;
      height: 101%;
      background: ${theme.colors.gray95};
      content: '';
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      width: 100%;

      &:first-of-type {
        grid-column: 1/3;
      }
      &:nth-of-type(2) {
        grid-column: 3/5;
      }

      &:nth-of-type(3) {
        grid-column: 5/7;
      }

      &:nth-of-type(4) {
        grid-row: 2/3;
        grid-column: 2/4;
      }

      &:last-of-type {
        grid-row: 2/3;
        grid-column: 4/6;
      }

      &:not(:last-of-type):after {
        position: absolute;
        height: 0;
        content: '';
      }

      &:nth-of-type(4):after {
        position: absolute;
        top: 0;
        left: -51%;
        width: 51%;
        height: 101%;
        background: ${theme.colors.gray95};
        content: '';
      }

      &:last-of-type:after {
        position: absolute;
        right: -51%;
        bottom: -0.1rem;
        width: 51%;
        height: 101%;
        background: ${theme.colors.gray95};
        content: '';
      }
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      &:before {
        position: absolute;
        top: -0.1rem;
        right: -0.1rem;
        bottom: -0.1rem;
        left: -0.1rem;
        background: radial-gradient(circle, transparent 8rem, ${theme.colors.gray95} 8.1rem);
        content: '';
      }
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      &:nth-of-type(1) {
        grid-row: 1/3;
        grid-column: 1/2;
      }

      &:nth-of-type(2) {
        grid-row: 2/4;
        grid-column: 2/3;
      }

      &:nth-of-type(3) {
        grid-row: 3/5;
        grid-column: 1/2;
      }

      &:nth-of-type(4) {
        grid-row: 4/6;
        grid-column: 2/3;
      }

      &:nth-of-type(5) {
        grid-row: 5/7;
        grid-column: 1/2;
      }

      &:first-of-type:after {
        position: absolute;
        top: -0.1rem;
        right: -101%;
        width: 101%;
        height: 11rem;
        background: ${theme.colors.gray95};
        content: '';
      }

      &:nth-of-type(4):after {
        width: 0;
      }

      &:last-of-type:after {
        position: absolute;
        right: -101%;
        bottom: -0.1rem;
        width: 101%;
        height: 11rem;
        background: ${theme.colors.gray95};
        content: '';
      }
    }
  `}
`;

export const SubHeading = styled.h3`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold22};
    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.bold18};
    }
  `}
`;

export const Date = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16};
    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.regular13};
    }
  `}
`;

export const Note = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16};
    margin-top: -0.4rem;
    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.regular13};
    }
  `}
`;

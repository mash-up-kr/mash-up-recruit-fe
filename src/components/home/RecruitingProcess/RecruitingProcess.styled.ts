import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 30rem auto;
    color: ${theme.colors.gray20};

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      max-width: none;
      margin: 20rem 0;
      padding: 0 2rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      margin: 12rem 0;
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
      margin: 0 auto;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      height: 35rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      display: grid;
      grid-template-rows: repeat(6, 1fr);
      grid-template-columns: repeat(2, 1fr);
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
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: radial-gradient(circle, transparent 11rem, ${theme.colors.gray95} 11.1rem);
      content: '';
    }

    &:not(:last-of-type):after {
      position: absolute;
      left: 100%;
      width: 2.5rem;
      height: 100%;
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
        left: -50%;
        width: 50%;
        height: 100%;
        background: ${theme.colors.gray95};
        content: '';
      }

      &:last-of-type:after {
        position: absolute;
        right: -50%;
        bottom: 0;
        width: 50%;
        height: 100%;
        background: ${theme.colors.gray95};
        content: '';
      }
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      &:before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
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
        top: 0;
        right: -100%;
        width: 100%;
        height: 11rem;
        background: ${theme.colors.gray95};
        content: '';
      }

      &:nth-of-type(4):after {
        width: 0;
      }

      &:last-of-type:after {
        position: absolute;
        right: -100%;
        bottom: 0;
        width: 100%;
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

import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 5.8rem auto;
    color: ${theme.colors.gray20};
    scroll-margin-top: 9.5rem;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      max-width: none;
      margin: 0 2rem;
      scroll-margin-top: 8.8rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      scroll-margin-top: 6.8rem;
    }
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold46};

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.en.extrabold32};
    }
  `}
`;

export const SubTitle = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold18};
    margin: 1.5rem 0 5rem 0;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      margin: 0.8rem 0 3.8rem 0;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.medium14};
    }
  `}
`;

export const List = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: space-between;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      gap: 0;
      height: 120rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      gap: 3rem;
      height: auto;
    }
  `}
`;

export const ListItem = styled.li`
  ${({ theme }) => css`
    width: 38rem;
    height: 38rem;
    background: ${theme.colors.white};
    border-radius: 5.4rem;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      width: calc(50% - 0.9rem);
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      width: 100%;
      height: 20rem;
    }
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 5rem 4rem;
    background: ${theme.colors.purple70};
    border-radius: 5rem;
    transition: transform 0.35s ease;

    &:hover {
      transform: translate(1.2rem, -1.2rem);
    }

    a {
      width: 12.1rem;
    }

    button {
      ${theme.fonts.en.extrabold15};
      margin: 0;
      padding: 1.9rem 2rem;
      color: ${theme.colors.purple70};
      background: ${theme.colors.white};
      border: none;
      border-radius: 2rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      height: 20rem;
      padding: 3.6rem;

      &:hover {
        transform: translate(0.6rem, -0.6rem);
      }

      button {
        ${theme.fonts.en.extrabold15};
        padding: 1rem 2rem;
        color: ${theme.colors.purple70};
        background: ${theme.colors.white};
        border: none;
        border-radius: 1.6rem;
      }
    }
  `}
`;

export const CardHeader = styled.div`
  ${({ theme }) => css`
    h3 {
      ${theme.fonts.en.extrabold32};
      margin-bottom: 1.2rem;

      @media (max-width: ${theme.breakPoint.media.tabletS}) {
        ${theme.fonts.en.extrabold26};
        margin-bottom: 0.6rem;
      }
    }
    p {
      ${theme.fonts.en.light20};
      @media (max-width: ${theme.breakPoint.media.tabletS}) {
        ${theme.fonts.en.light20};
      }
    }
  `}
`;

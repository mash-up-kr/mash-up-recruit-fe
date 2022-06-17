import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const AccountManagement = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: 120rem;
    height: 30.7rem;
    margin: 16rem auto;
    padding: 5rem 3.4rem 5rem 5rem;
    background: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.gray20};
    border-radius: 3rem;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      height: 31rem;
      margin-top: 5.5rem;
      padding: 3.6rem;
    }
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold30};
    color: ${theme.colors.gray80};

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.bold24};
    }
  `}
`;

export const MainWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-top: 6rem;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      flex-flow: column nowrap;
      justify-content: flex-start;
      margin-top: 2.7rem;
    }
  `}
`;

export const InfoList = styled.ul`
  position: relative;
`;

export const InfoListItem = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      display: block;
    }
  `}
`;

export const ItemHeading = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold18};
    display: inline-block;
    width: 14.8rem;
    margin-right: 2rem;
    color: ${theme.colors.gray50};

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.bold16};
      display: block;
      width: 100%;
      margin-right: 0;
      margin-bottom: 1.2rem;
      overflow: hidden;
    }
  `}
`;

export const ItemContent = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold18};
    display: inline-block;
    max-width: 80rem;
    overflow: hidden;
    color: ${theme.colors.gray80};
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      max-width: 45vw;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.bold16};
      display: block;
      max-width: 100%;
    }
  `}
`;

export const ThankYouSignIng = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16};
    display: block;
    margin-top: 1rem;
    margin-left: 16.8rem;
    color: ${theme.colors.gray50};

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.medium14};
      margin-left: 0;
    }
  `}
`;

export const SignOutButton = styled.button`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold18};
    width: 9.6rem;
    height: 4.8rem;
    margin-left: 1rem;
    padding: 0;
    color: ${theme.colors.gray80};
    white-space: nowrap;
    background: transparent;
    border: 0;
    border-radius: 1rem;

    @media (hover: hover) {
      &:hover {
        background: ${theme.colors.gray10};
      }
    }

    &:active {
      background: ${theme.colors.gray10};
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.bold16};
      position: absolute;
      bottom: 2.5rem;
      left: 2rem;
      margin-top: 6rem;
      margin-left: 0;
    }
  `}
`;

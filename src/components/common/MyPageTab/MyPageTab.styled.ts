import { css } from '@emotion/react';
import styled from '@emotion/styled';
import LinkTo from '@/components/common/LinkTo/LinkTo.component';
import { HOME_PAGE } from '@/constants';
import isPropValid from '@emotion/is-prop-valid';

export const MyPageTabPanel = styled.div`
  position: absolute;
  top: 4.4rem;
  right: 0;
  height: 0;
  overflow: hidden;
  border-radius: 1.6rem;
`;

interface MyPageTabContentProps {
  currentPage: string;
}

export const MyPageTabContent = styled.div<MyPageTabContentProps>`
  ${({ theme, currentPage }) => {
    const isHomePage = currentPage === HOME_PAGE;
    return css`
      width: 19.2rem;
      padding: 2.4rem 1.2rem 1.2rem;
      background: ${isHomePage ? theme.colors.gray95 : theme.colors.white};
      border: 0.1rem solid ${isHomePage ? theme.colors.gray90 : theme.colors.gray20};
      border-radius: 1.6rem;
    `;
  }}
`;

interface UserNameProps {
  currentPage: string;
}

export const UserName = styled.span<UserNameProps>`
  ${({ theme, currentPage }) => css`
    ${theme.fonts.kr.bold18};
    display: inline-block;
    padding-left: 1.2rem;
    color: ${currentPage === HOME_PAGE ? theme.colors.gray10 : theme.colors.gray80};
  `}
`;

interface UserEmailProps {
  currentPage: string;
}

export const UserEmail = styled.span<UserEmailProps>`
  ${({ theme, currentPage }) => css`
    ${theme.fonts.kr.medium13};
    display: block;
    width: 16.8rem;
    margin: 0.2rem 0 1rem;
    padding-left: 1.2rem;
    overflow: hidden;
    color: ${currentPage === HOME_PAGE ? theme.colors.gray60 : theme.colors.gray50};
    white-space: nowrap;
    text-overflow: ellipsis;
  `}
`;

interface TabLinkProps {
  currentPage: string;
}

export const TabLink = styled(LinkTo, {
  shouldForwardProp: (prop) => isPropValid(prop),
})<TabLinkProps>`
  ${({ theme, currentPage }) => {
    const isHomePage = currentPage === HOME_PAGE;

    return css`
      ${theme.fonts.kr.medium16};
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 1.2rem;
      color: ${isHomePage ? theme.colors.gray10 : theme.colors.gray80};
      background: ${isHomePage ? theme.colors.gray95 : theme.colors.white};
      border: 0;
      border-radius: 1.2rem;

      @media (hover: hover) {
        &:hover {
          background: ${isHomePage ? theme.colors.gray90 : theme.colors.gray10};
        }
      }

      &:active {
        background: ${isHomePage ? theme.colors.gray90 : theme.colors.gray10};
      }

      & > svg > path {
        stroke: ${isHomePage ? theme.colors.gray10 : theme.colors.gray80};
      }
    `;
  }}
`;

interface SignOutButtonProps {
  currentPage: string;
}

export const SignOutButton = styled.button<SignOutButtonProps>`
  ${({ theme, currentPage }) => {
    const isHomePage = currentPage === HOME_PAGE;

    return css`
      ${theme.fonts.kr.medium16};
      width: 100%;
      padding: 1rem 0.6rem 1rem 1.2rem;
      color: ${isHomePage ? theme.colors.gray60 : theme.colors.gray50};
      text-align: start;
      background: ${isHomePage ? theme.colors.gray95 : theme.colors.white};
      border: 0;
      border-radius: 1.2rem;

      & > svg {
        margin-left: 9.5rem;
      }

      @media (hover: hover) {
        &:hover {
          background: ${isHomePage ? theme.colors.gray90 : theme.colors.gray10};
        }
      }

      &:active {
        background: ${isHomePage ? theme.colors.gray90 : theme.colors.gray10};
      }
    `;
  }}
`;

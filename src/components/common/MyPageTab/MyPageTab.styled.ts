import { css } from '@emotion/react';
import styled from '@emotion/styled';
import LinkTo from '@/components/common/LinkTo/LinkTo.component';

export const MyPageTabPanel = styled.div`
  position: absolute;
  top: 4.4rem;
  right: 0;
  height: 0;
  overflow: hidden;
  border-radius: 1.6rem;
  transition: 0.5s;
`;

export const MyPageTabContent = styled.div`
  ${({ theme }) =>
    css`
      padding: 2.8rem 1.6rem 1.4rem 1.2rem;
      background: ${theme.colors.white};
      border: 0.1rem solid ${theme.colors.gray20};
      border-radius: 1.6rem;
    `}
`;

export const UserName = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold18};
    padding-left: 1.2rem;
  `}
`;

export const UserEmail = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium13};
    display: block;
    width: 16.8rem;
    margin: 0.2rem 0 1rem;
    padding-left: 1.2rem;
    overflow: hidden;
    color: ${theme.colors.gray50};
    white-space: nowrap;
    text-overflow: ellipsis;
  `}
`;

export const TabLink = styled(LinkTo)`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium14};
    display: block;
    padding: 1rem 0.6rem 1rem 1.2rem;
    color: ${theme.colors.gray80};
    background: ${theme.colors.white};
    border: 0;
    border-radius: 1.2rem;

    & > svg {
      margin-left: 9.5rem;
    }

    &:hover {
      background: ${theme.colors.gray10};
    }
  `}
`;

export const SignOutButton = styled.button`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium14};
    width: 100%;
    padding: 1rem 0.6rem 1rem 1.2rem;
    color: ${theme.colors.gray50};
    text-align: start;
    background: ${theme.colors.white};
    border: 0;
    border-radius: 1.2rem;

    & > svg {
      margin-left: 9.5rem;
    }

    &:hover {
      background: ${theme.colors.gray10};
    }
  `}
`;

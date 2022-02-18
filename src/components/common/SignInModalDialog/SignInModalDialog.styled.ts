import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Dialog = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: ${theme.zIndex.dialog};
    width: 100%;
    max-width: 44rem;
    min-height: 27.3rem;
    padding: 4rem 4rem 2.4rem 4rem;
    text-align: center;
    background: ${theme.colors.white};
    border-radius: 2rem;
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold22}
    margin-top: 3.4rem;
    color: ${theme.colors.gray80};
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16}
    margin: 0.8rem auto 2.4rem;
    color: ${theme.colors.gray60};
    white-space: pre-wrap;
  `}
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 4.4rem;
    height: 4.4rem;
    padding: 0;
    background: ${theme.colors.gray10};
    border: 0;
    border-radius: 1.2rem;

    &:hover {
      & > div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 1.2rem;
      }
    }
  `}
`;

export const SignInButton = styled.button`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 36rem;
    margin-bottom: 1.6rem;
    padding: 1.6rem 2rem;
    background: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.gray40};
    border-radius: 1.6rem;

    & > svg {
      position: absolute;
      left: 2.4rem;
    }

    &:hover {
      background: ${theme.colors.gray10};
      border: 0.1rem solid ${theme.colors.gray40};
    }
  `}
`;

export const Notice = styled.em`
  ${({ theme }) => css`
    ${theme.fonts.kr.regular13};
    color: ${theme.colors.gray60};
    font-style: normal;
  `}
`;

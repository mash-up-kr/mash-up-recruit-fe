import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Dialog = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.zIndex.dialog};
    min-width: 44rem;
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

export const LoginButton = styled.button`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 36rem;
    margin-bottom: 1.6rem;
    padding: 1.6rem 2rem;
    background: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.gray40};
    border-radius: 1.6rem;

    & > svg {
      position: absolute;
      left: 2.4rem;
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

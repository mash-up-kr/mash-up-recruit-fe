import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Dialog = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.zIndex.dialog};
    min-width: 45.1rem;
    background: ${theme.colors.white};
    border-radius: 2rem;
  `}
`;

export const DialogInner = styled.div`
  padding: 2.4rem;
  border-radius: 2rem 2rem 0 0;
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold22};
    color: ${theme.colors.gray80};
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16}
    margin: 1.6rem auto 0;
    color: ${theme.colors.gray60};
    white-space: pre-wrap;
  `}
`;

export const DialogFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    padding: 1.6rem 2.4rem;
    background: ${theme.colors.gray10};
    border-radius: 0 0 2rem 2rem;
  `}
`;

export const CancelButton = styled.button`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16};
    width: 10rem;
    height: 5rem;
    padding: 0;
    color: ${theme.colors.gray80};
    background: ${theme.colors.gray40};
    border-radius: 1.2rem;
  `}
`;

export const ApprovalButton = styled.button`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16};
    width: 10rem;
    height: 5rem;
    margin-left: 1.2rem;
    padding: 0;
    color: ${theme.colors.white};
    background: ${theme.colors.purple70};
    border-radius: 1.2rem;
  `}
`;

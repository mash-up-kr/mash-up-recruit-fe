import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Dialog = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: ${theme.zIndex.dialog};
    width: 100%;
    max-width: 44rem;
    min-height: 27.3rem;
    text-align: center;
    background: ${theme.colors.white};
    border-radius: 2rem;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      max-width: 26.8rem;
    }
  `}
`;

export const DialogContent = styled.div`
  ${({ theme }) => css`
    padding: 4rem 4rem 0rem 4rem;
    text-align: center;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      max-width: 26.8rem;
      padding: 4.4rem 2.4rem 2rem 2.4rem;
      text-align: left;
      border-bottom: 0.1rem solid ${theme.colors.gray20};
    }
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold22}
    margin-top: 3.4rem;
    color: ${theme.colors.gray80};

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.kr.bold16}
      margin-top: 0;
      letter-spacing: -0.08rem;
    }
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16}
    margin: 0.8rem auto 2.4rem;
    color: ${theme.colors.gray60};
    white-space: pre-wrap;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.kr.regular14}
      margin-bottom: 2rem;
      letter-spacing: -0.048rem;
    }
  `}
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 2rem;
    right: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
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

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      top: 1.2rem;
      right: 1.2rem;
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 0.655rem;

      &:hover {
        & > div {
          border-radius: 0.655rem;
        }
      }

      & > svg {
        width: 0.655rem;
        height: 0.655rem;
      }
    }
  `}
`;

export const CloseButtonDeem = styled.div``;

export const SignInButton = styled.button`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 36rem;
    padding: 1.6rem 2rem;
    color: ${theme.colors.gray70};
    letter-spacing: -0.048rem;
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

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.kr.medium14}
      padding: 1.35rem 2rem;

      & > svg {
        position: absolute;
        left: 1.5rem;
        width: 1.4rem;
        height: 1.4rem;
      }
    }
  `}
`;

export const Notice = styled.em`
  ${({ theme }) => css`
    ${theme.fonts.kr.regular13};
    display: inline-block;
    padding: 1.6rem 0 2.4rem;
    color: ${theme.colors.gray60};
    font-style: normal;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      display: flex;
      padding: 1.2rem 2.4rem 2rem;
      letter-spacing: -0.08rem;
      text-align: left;

      & > span {
        margin-right: 0.5rem;
        margin-left: 0.8rem;
      }
    }
  `}
`;

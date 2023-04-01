import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Dialog = styled.div`
  position: relative;
  width: 29rem;
  padding: 5rem 0 3rem;
  text-align: center;
  background: #292a34;
  border-radius: 3rem;
`;

export const Notify = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold18};
    color: #ffffff;
    text-align: center;
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium14};
    margin: 0.8rem 0 1.6rem;
    color: #ffffff;
    white-space: pre-wrap;
    text-align: center;
  `}
`;

export const GoToOfficialPage = styled.a`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16};
    display: inline-block;
    width: 21rem;
    padding: 1.2rem 0;
    color: ${theme.colors.white};
    letter-spacing: -0.05em;
    text-align: center;
    background: ${theme.colors.purple70};
    border: 0;
    border-radius: 1rem;
    cursor: pointer;
  `}
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16};
    display: block;
    width: 21rem;
    margin: 1rem auto 0;
    padding: 1.2rem 0;
    color: ${theme.colors.white};
    letter-spacing: -0.05em;
    text-align: center;
    background: #4f5273;
    border: 0;
    border-radius: 1rem;
    cursor: pointer;
  `}
`;

export const MashongWrapper = styled.div`
  position: absolute;
  top: -7.2rem;
  left: 50%;
  width: 11.1rem;
  height: 11rem;
  transform: translate3d(-50%, 0, 0);
`;

export const SpeechBubble = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: -8.1rem;
    left: -1.2rem;
    width: 21.1rem;
    background: ${theme.colors.white};
    border-radius: 3rem;
  `}
`;

export const Speech = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium13};
    display: block;
    padding: 1.4rem;
  `}
`;

export const SpeechDotBig = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: -0.9rem;
    left: 50%;
    width: 1.8rem;
    height: 1.8rem;
    background: ${theme.colors.white};
    border-radius: 50%;
    transform: translate3d(-50%, 0, 0);
  `}
`;

export const SpeechDotSmall = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: -2.3rem;
    left: 45%;
    width: 1rem;
    height: 1rem;
    background: ${theme.colors.white};
    border-radius: 50%;
    transform: translate3d(-50%, 0, 0);
  `}
`;

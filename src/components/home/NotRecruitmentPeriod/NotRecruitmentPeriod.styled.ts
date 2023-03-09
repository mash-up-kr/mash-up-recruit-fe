import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Dialog = styled.div`
  position: relative;
  width: 57.5rem;
  padding: 11rem 0 6rem;
  text-align: center;
  background: #292a34;
  border-radius: 5.7rem;
`;

export const Notify = styled.p`
  color: #ffffff;
  font-weight: 700;
  font-size: 4rem;
  line-height: 1.5;
  letter-spacing: -0.05em;
  text-align: center;
`;

export const Paragraph = styled.p`
  margin: 1.6rem 0 3rem;
  color: #ffffff;
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 1.2;
  letter-spacing: -0.05em;
  white-space: pre-wrap;
  text-align: center;
`;

export const GoToOfficialPage = styled.a`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold20};
    display: inline-block;
    width: 27.9rem;
    padding: 3rem 0;
    color: ${theme.colors.white};
    letter-spacing: -0.05em;
    text-align: center;
    background: ${theme.colors.purple70};
    border: 0;
    border-radius: 1.6rem;
    cursor: pointer;
  `}
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold20};
    display: block;
    width: 27.9rem;
    margin: 1.6rem auto 0;
    padding: 3rem 0;
    color: ${theme.colors.white};
    letter-spacing: -0.05em;
    text-align: center;
    background: #4f5273;
    border: 0;
    border-radius: 1.6rem;
    cursor: pointer;
  `}
`;

export const MashongWrapper = styled.div`
  position: absolute;
  top: -16.5rem;
  left: 50%;
  width: 23.1rem;
  height: 22.9rem;
  transform: translate3d(-50%, 0, 0);
`;

export const SpeechBubble = styled.div`
  position: absolute;
  top: -5.1rem;
  left: 17.9rem;
  width: 26.5rem;
  background: #ffffff;
  border-radius: 4.25rem;
`;

export const Speech = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16};
    display: block;
    padding: 2.6rem;
  `}
`;

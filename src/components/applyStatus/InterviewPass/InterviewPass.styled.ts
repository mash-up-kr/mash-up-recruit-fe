import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const InterviewPass = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    max-width: 92rem;
    margin: 0 auto;
    white-space: pre-wrap;

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      flex-flow: column nowrap;
      max-width: 100%;
      margin: 0;
    }
  `}
`;

export const ResultSection = styled.div`
  ${({ theme }) => css`
    width: 39.5rem;
    padding: 1.7rem 0;

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      width: 100%;
      padding: 0;
    }
  `}
`;

export const ResultMessage = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold26};
    margin-bottom: 1.6rem;
    color: ${theme.colors.white};
    font-style: normal;
    letter-spacing: -0.08rem;

    & > em {
      color: ${theme.colors.purple60};
      font-style: normal;
    }

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      ${theme.fonts.kr.bold22};
    }
  `}
`;

export const ResultDetail = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium15};
    color: ${theme.colors.white};
    letter-spacing: -0.08rem;

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      ${theme.fonts.kr.regular14};
    }
  `}
`;

export const ConfirmSection = styled.div`
  ${({ theme }) => css`
    width: 47.15rem;
    margin-left: 4rem;
    padding: 3.6rem 4.4rem;
    background: rgba(98, 68, 255, 0.08);
    border: 0.1rem solid ${theme.colors.purple70};
    border-radius: 2rem;

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      width: 100%;
      margin-top: 4rem;
      margin-left: 0;
      padding: 2.4rem;
    }
  `}
`;

export const OtDateHeading = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16};
    color: ${theme.colors.gray50};
    letter-spacing: -0.08rem;
  `}
`;

export const OtDate = styled.time`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold22};
    display: block;
    margin-top: 0.4rem;
    margin-bottom: 1.6rem;
    color: ${theme.colors.white};
    letter-spacing: -0.08rem;

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      ${theme.fonts.kr.bold18};
    }
  `}
`;

export const OtExplanationList = styled.ul`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium13};
    margin-left: 1.83rem;
    color: ${theme.colors.gray50};
    letter-spacing: -0.08rem;
    list-style: disc;
  `}
`;

export const ConfirmButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    margin-top: 2.4rem;

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      margin-top: 2.2rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      flex-flow: column nowrap;
    }
  `}
`;

export const CancelButton = styled.button`
  ${({ theme }) => css`
    ${theme.button.type.defaultLine};
    width: 50%;
    margin-right: 1.2rem;
    color: ${theme.colors.gray60};
    border-color: transparent;

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      ${theme.fonts.kr.medium14};
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 1.2rem;
    }
  `}
`;

export const ApprovalButton = styled.button`
  ${({ theme }) => css`
    ${theme.button.type.primary};
    width: 50%;

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      ${theme.fonts.kr.medium14};
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 100%;
    }
  `}
`;

import LinkTo from '@/components/common/LinkTo/LinkTo.component';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PersonalInformationSection = styled.section`
  margin-top: 6rem;
`;

export const SectionHeading = styled.h4`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold24};
    margin-bottom: 2.4rem;
    color: ${theme.colors.gray80};
    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.kr.bold22}
    }
  `}
`;

export const PersonalInformationWrapper = styled.div`
  width: 100%;
  max-width: 53.2rem;
  margin-bottom: 3.6rem;
`;

export const ModifyEmailMessage = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.kr.regular15};
    margin-top: 0.6rem;
    color: ${theme.colors.gray60};
  `}
`;

export const QuestionListSection = styled.section`
  margin-top: 6rem;
`;

export const QuestionWrapper = styled.div`
  margin-bottom: 3.6rem;
`;

export const ControlSection = styled.div`
  ${({ theme }) => css`
    width: 41.6rem;
    margin-top: 3.6rem;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 100%;
    }
  `}
`;

export const TempSaveButton = styled.button`
  ${({ theme }) => css`
    ${theme.button.type.primaryLine}
    width: 20rem;
    margin-right: 1.6rem;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 1.6rem;
    }
  `}
`;

export const SubmitButton = styled.button`
  ${({ theme }) => css`
    ${theme.button.type.primary}
    width: 20rem;
    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 100%;
      margin-right: 0;
    }
  `}
`;

export const AlreadySubmitedButton = styled.button`
  ${({ theme }) => css`
    ${theme.button.type.primary}
    display: inline-block;
    width: 100%;
    text-align: center;
  `}
`;

export const SubmitedCompletedButton = styled.button`
  ${({ theme }) => css`
    ${theme.button.type.defaultLine}
    display: inline-block;
    width: 100%;
    text-align: center;
  `}
`;

export const BackToListLink = styled(LinkTo)`
  ${({ theme }) => css`
    ${theme.button.type.defaultLine}
    display: inline-block;
    width: 100%;
    margin-top: 1.6rem;
    text-align: center;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      margin-top: 6rem;
    }
  `}
`;

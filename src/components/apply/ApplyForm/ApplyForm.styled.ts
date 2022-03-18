import LinkTo from '@/components/common/LinkTo/LinkTo.component';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ChevronRight7 from '@/assets/svg/chevron-right-7.svg';

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

  &:last-of-type {
    margin-bottom: 0;
  }
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

export const AlreadySubmittedButton = styled.button`
  ${({ theme }) => css`
    ${theme.button.type.primary}
    display: inline-block;
    width: 100%;
    text-align: center;
  `}
`;

export const SubmittedCompletedButton = styled.button`
  ${({ theme }) => css`
    ${theme.button.type.primary}
    display: inline-block;
    width: 100%;
    text-align: center;
  `}
`;

export const BackToListLink = styled(LinkTo)`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16};
    display: inline-block;
    margin-top: 3.2rem;
    padding: 0.8rem 1.2rem 0.6rem 0.2rem;
    border-radius: 0.8rem;

    & > span {
      vertical-align: middle;
    }

    @media (hover: hover) {
      &:hover {
        background: ${theme.colors.gray10};
      }
    }

    &:active {
      background: ${theme.colors.gray10};
    }
  `}
`;

export const ChevronLeft = styled(ChevronRight7)`
  margin-right: 1.1rem;
  margin-left: 1rem;
  transform: rotate(180deg);
`;

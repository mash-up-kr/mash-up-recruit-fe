import { css } from '@emotion/react';
import styled from '@emotion/styled';

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

export const QuestionListSection = styled.section`
  margin-top: 6rem;
`;

export const QuestionWrapper = styled.div`
  margin-bottom: 3.6rem;
`;

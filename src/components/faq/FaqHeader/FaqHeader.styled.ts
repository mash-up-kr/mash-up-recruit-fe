import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold46};
    flex-basis: 100%;
    margin: 8.4rem 0 5rem;
    color: ${theme.colors.gray80};

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.kr.bold32};
      margin: 3.6rem 0 0;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.bold24};
      margin: 5.4rem 0 3rem;
    }
  `}
`;

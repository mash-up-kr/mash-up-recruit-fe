import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold46};
    flex-basis: 100%;
    margin: 8.4rem 0 5.4rem;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.bold24};
      margin: 5.4rem 0 3rem 0;
    }
  `}
`;

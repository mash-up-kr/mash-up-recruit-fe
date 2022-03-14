import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold46};
    width: 100%;
    max-width: 78.4rem;
    margin: 0 auto 3.3rem;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.en.extrabold32};
      max-width: 68rem;
      margin: 0 auto 3.6rem;
      padding: 0 2rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      max-width: none;
    }
  `}
`;

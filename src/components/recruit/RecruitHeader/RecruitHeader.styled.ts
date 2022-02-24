import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 78.4rem;
    margin: 3.6rem auto 0;
    color: ${theme.colors.gray80};

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      max-width: 60rem;
      margin: 3rem 2rem 0;
    }

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      max-width: none;
      margin: 3rem 0 0;
      padding: 0 2rem;
    }
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold46};
    margin-bottom: 0.8rem;

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.en.extrabold26};
      margin-bottom: 0.8rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.en.extrabold26};
      margin-bottom: 0.8rem;
    }
  `}
`;

export const SubTitle = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold32};

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      ${theme.fonts.en.extrabold15};
    }
  `}
`;

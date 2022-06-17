import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StatusDetail = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: 120rem;
    margin: 4rem auto 0;
    padding: 4rem;
    background: ${theme.colors.gray90};
    border-radius: 3rem;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      padding: 4rem 2.4rem;
    }
  `}
`;

// TODO:(하준) 컴포넌트 구조 정리 후 사용하기
export const HiddenHeading = styled.h3`
  ${({ theme }) => css`
    ${theme.a11y.visuallyHidden};
  `}
`;

export const ExceptionMessage = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.kr.bold26};
    color: ${theme.colors.white};
    letter-spacing: -0.08rem;

    @media (max-width: ${theme.breakPoint.media.tabletS}) {
      ${theme.fonts.kr.bold22};
    }
  `}
`;

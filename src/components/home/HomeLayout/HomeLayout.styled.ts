import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Layout = styled.div`
  ${({ theme }) => css`
    min-height: 200vh;
    margin-top: -8rem;
    padding-top: 8rem;
    background: ${theme.colors.black};

    /* TODO:(하준) 테스트용, 실제 페이지 UI 작업시 삭제 */
    & * {
      color: ${theme.colors.white};
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      margin-top: -6rem;
      padding-top: 6rem;
    }
  `}
`;

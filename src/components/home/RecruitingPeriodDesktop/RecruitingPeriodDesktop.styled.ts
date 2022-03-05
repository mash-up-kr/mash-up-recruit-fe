import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0rem;
    left: 93.9rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25.3rem;
    height: 71.1rem;

    span {
      ${theme.fonts.en.extrabold20};
    }

    time {
      ${theme.fonts.en.extrabold100};
    }

    svg {
      position: absolute;
      top: -11.288rem;
      right: -14.8rem;
    }

    @media (max-width: ${theme.breakPoint.media.tabletL}) {
      display: none;
    }
  `}
`;

export const StartDate = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EndDate = styled.div`
  display: flex;
  flex-direction: column;
`;

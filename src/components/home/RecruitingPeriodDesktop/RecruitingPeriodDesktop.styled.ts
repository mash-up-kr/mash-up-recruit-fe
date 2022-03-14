import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: -1.5rem;
    left: 81.9rem;
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

export const PeriodBackgroundDesktopContainer = styled.div`
  position: absolute;
  top: -12.788rem;
  right: -14.8rem;
  width: 48.7rem;
  height: 72.9rem;
`;

export const PeriodArrowContainer = styled.div`
  position: absolute;
  top: 64rem;
  width: 6rem;
  height: 9rem;
  line-height: 0;
`;

export const ComputerContainer = styled.div`
  position: absolute;
  left: 12.7rem;
  width: 36rem;
  height: 50rem;
`;

export const FireContainer = styled.div`
  position: absolute;
  top: 60.8rem;
  left: 26.1rem;
  width: 10rem;
  height: 10rem;
  line-height: 0;
`;

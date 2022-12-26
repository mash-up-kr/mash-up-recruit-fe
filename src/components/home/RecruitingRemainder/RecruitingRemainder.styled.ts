import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100vh;
    margin-top: -8rem;
    padding-top: 8rem;
    overflow: hidden;
    background: ${theme.colors.gray95};
    user-select: none;

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      margin-top: -6rem;
      padding-top: 6rem;
    }

    &::after {
      position: absolute;
      bottom: 0;
      display: block;
      width: 100%;
      height: 60rem;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
      content: '';

      @media (max-width: ${theme.breakPoint.media.tabletM}) {
        height: 40rem;
      }

      @media (max-width: ${theme.breakPoint.media.mobile}) {
        height: 20rem;
      }
    }
  `}
`;

export const RemainderContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: ${theme.zIndex.content};
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      gap: 0.8rem;
    }
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    ${theme.fonts.kr.bold32};

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      ${theme.fonts.kr.bold24};
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.kr.bold14};
    }
  `}
`;

export const Counter = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold300};
    display: flex;
    gap: 2.4rem;
    color: ${theme.colors.white};

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      ${theme.fonts.en.extrabold200};
      gap: 0.4rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.en.extrabold100};
      gap: 0.2rem;
    }
  `}
`;

export const D = styled.span`
  &::after {
    content: 'D';
  }
`;

export const Separator = styled.span`
  &::after {
    content: '-';
  }
`;

export const Day = styled.span``;

export const Timer = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.en.extrabold180};
    display: flex;
    gap: 1rem;
    color: ${theme.colors.white};

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      ${theme.fonts.en.extrabold100};
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      ${theme.fonts.en.extrabold70};
    }
  `}
`;

export const Hours = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26rem;

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      width: 14rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 9rem;
    }
  `}
`;

export const Minutes = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26rem;

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      width: 14rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 9rem;
    }
  `}
`;

export const Seconds = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26rem;

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      width: 14rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 9rem;
    }
  `}
`;

export const Colon = styled.span`
  &::after {
    display: block;
    content: ':';
  }
`;

export const SphereContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 63rem;

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      height: 42rem;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      height: 21rem;
    }
  `}
`;

export const BackLight = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100rem;
    height: 50rem;
    background: linear-gradient(0deg, #ff1c60 36.93%, #5243ff 100%);
    border-radius: 50rem 50rem 0 0;
    opacity: 0.8;
    filter: blur(5.7rem);

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      width: 66.6rem;
      height: 33.3rem;
      border-radius: 33.3rem 33.3rem 0 0;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      width: 33.3rem;
      height: calc(33.3rem / 2);
      border-radius: calc(33.3rem / 2) calc(33.3rem / 2) 0 0;
    }
  `}
`;

export const Sphere = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 6rem;
    width: 120rem;
    height: 60rem;
    background: red;
    background: linear-gradient(180deg, #2c3265 -3.9%, #000000 20.31%);
    border-radius: 60rem 60rem 0 0;
    box-shadow: inset 0 0 5.621rem rgba(101, 75, 204, 0.45);

    @media (max-width: ${theme.breakPoint.media.tabletM}) {
      top: 4rem;
      width: 80rem;
      height: 40rem;
      border-radius: 40rem 40rem 0 0;
    }

    @media (max-width: ${theme.breakPoint.media.mobile}) {
      top: 2rem;
      width: 40rem;
      height: 20rem;
      border-radius: 20rem 20rem 0 0;
    }
  `}
`;

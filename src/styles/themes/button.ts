import { css } from '@emotion/react';
import { fonts } from '@/styles/themes/fonts';
import { colors } from '@/styles/themes/colors';

export const button = {
  type: {
    primary: css`
      ${fonts.kr.medium16};
      height: 5.6rem;
      padding: 1.6rem 1.95rem;
      color: ${colors.white};
      background: ${colors.purple70};
      border: 0;
      border-radius: 1.6rem;
      transition: 0.3s;

      @media (hover: hover) {
        &:hover {
          background: ${colors.purple80};
        }
      }

      &:active {
        background: ${colors.purple80};
      }

      &:disabled {
        background: ${colors.purple40};
      }
    `,
    primaryLine: css`
      ${fonts.kr.medium16};
      height: 5.6rem;
      padding: 1.6rem 1.95rem;
      color: ${colors.purple70};
      background: ${colors.purple10};
      border: 0.1rem solid ${colors.purple60};
      border-radius: 1.6rem;
      transition: 0.3s;

      @media (hover: hover) {
        &:hover {
          background: ${colors.purple20};
        }
      }

      &:active {
        background: ${colors.purple20};
      }

      &:disabled {
        color: ${colors.purple40};
        background: ${colors.purple10};
        border-color: ${colors.purple20};
      }
    `,
    defaultLine: css`
      ${fonts.kr.medium16};
      height: 5.6rem;
      padding: 1.6rem 1.95rem;
      color: ${colors.gray70};
      background: ${colors.white};
      border: 0.1rem solid ${colors.gray40};
      border-radius: 1.6rem;
      transition: 0.3s;

      @media (hover: hover) {
        &:hover {
          background: ${colors.gray10};
        }
      }

      &:active {
        background: ${colors.gray10};
      }

      &:disabled {
        color: ${colors.gray50};
        background: ${colors.gray10};
        border-color: ${colors.gray30};
      }
    `,
    white: css`
      ${fonts.kr.medium16};
      height: 5.6rem;
      padding: 1.6rem 1.95rem;
      color: ${colors.gray60};
      background: ${colors.white};
      border: 0.1rem solid transparent;
      border-radius: 1.6rem;
      transition: 0.3s;

      @media (hover: hover) {
        &:hover {
          background: ${colors.gray40};
        }
      }

      &:active {
        background: ${colors.gray40};
      }
    `,
    gray20: css`
      ${fonts.kr.medium16};
      height: 5.6rem;
      padding: 1.6rem 1.95rem;
      color: ${colors.gray80};
      background: ${colors.gray20};
      border: 0.1rem solid transparent;
      border-radius: 1.6rem;
      transition: 0.3s;

      @media (hover: hover) {
        &:hover {
          background: ${colors.gray40};
        }
      }

      &:active {
        background: ${colors.gray40};
      }

      &:disabled {
        color: ${colors.gray40};
        background: ${colors.gray20};
      }
    `,
    gray40: css`
      ${fonts.kr.medium16};
      height: 5.6rem;
      padding: 1.6rem 1.95rem;
      color: ${colors.gray80};
      background: ${colors.gray40};
      border: 0.1rem solid transparent;
      border-radius: 1.6rem;
      transition: 0.3s;

      @media (hover: hover) {
        &:hover {
          background: ${colors.gray60};
        }
      }

      &:active {
        background: ${colors.gray60};
      }

      &:disabled {
        color: ${colors.gray50};
        background: ${colors.gray40};
      }
    `,
  },
};

export type ButtonTheme = typeof button;

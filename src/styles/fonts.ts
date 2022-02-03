import { css } from '@emotion/react';

export const fonts = {
  kr: {
    bold46: css`
      font-weight: 700;
      font-size: 4.6rem;
      line-height: 1.5;
    `,
    bold22: css`
      font-weight: 700;
      font-size: 2.2rem;
      line-height: 1.5;
    `,
    bold18: css`
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 1.5;
    `,
    medium16: css`
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 1.5;
    `,
    medium15: css`
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 1.5;
    `,
    regular15: css`
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 1.5;
    `,
    medium14: css`
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.5;
    `,
    regular14: css`
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.5;
    `,
    medium13: css`
      font-weight: 500;
      font-size: 1.3rem;
      line-height: 1.5;
    `,
  },
  en: {
    extrabold46: css`
      font-weight: 800;
      font-size: 4.6rem;
      line-height: normal;
    `,
    extrabold26: css`
      font-weight: 800;
      font-size: 2.6rem;
      line-height: normal;
    `,
    extrabold20: css`
      font-weight: 800;
      font-size: 2rem;
      line-height: normal;
    `,
    extrabold18: css`
      font-weight: 800;
      font-size: 1.8rem;
      line-height: normal;
    `,
    extrabold15: css`
      font-weight: 800;
      font-size: 1.5rem;
      line-height: normal;
    `,
  },
} as const;

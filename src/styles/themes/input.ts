import { css } from '@emotion/react';
import { InputSize } from '@/components/common/LabeledInput/LabeledInput.component';
import { fonts } from '@/styles/themes/fonts';

export const input = {
  size: {
    [InputSize.xs]: css`
      ${fonts.kr.regular13};
      height: 3.6rem;
      padding: 0.8rem 1.2rem;
    `,
    [InputSize.sm]: css`
      ${fonts.kr.regular15};
      height: 4rem;
      padding: 0.85rem 1.2rem;
    `,
    [InputSize.md]: css`
      ${fonts.kr.regular15};
      height: 4.8rem;
      padding: 1.25rem 1.4rem;
    `,
  },
} as const;

export type InputType = typeof input;

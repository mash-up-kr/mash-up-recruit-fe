import LinkTo from '@/components/common/LinkTo/LinkTo.component';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ChevronRight7 from '@/assets/svg/chevron-right-7.svg';

export const BackToListLink = styled(LinkTo)`
  ${({ theme }) => css`
    ${theme.fonts.kr.medium16};
    display: inline-block;
    margin-top: 3.2rem;
    padding: 0.8rem 1.2rem 0.6rem 0.2rem;
    border-radius: 0.8rem;

    & > span {
      vertical-align: middle;
    }

    @media (hover: hover) {
      &:hover {
        background: ${theme.colors.gray10};
      }
    }

    &:active {
      background: ${theme.colors.gray10};
    }
  `}
`;

export const ChevronLeft = styled(ChevronRight7)`
  margin-right: 1.1rem;
  margin-left: 1rem;
  transform: rotate(180deg);
`;

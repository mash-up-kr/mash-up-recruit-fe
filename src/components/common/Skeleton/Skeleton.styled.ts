import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface SkeletonProps {
  width: string;
  height: string;
  borderRadius?: number;
  color: string;
  isLoading: boolean;
}

export const Skeleton = styled.div<SkeletonProps>`
  ${({ width, height, borderRadius, color, isLoading }) => css`
    @keyframes fade {
      from {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    display: inline-block;
    width: ${width};
    height: ${height};
    background: ${color};
    border-radius: ${borderRadius ?? '1rem'};
    animation: 0.6s linear infinite fade;

    & * {
      opacity: ${isLoading ? 0 : 1};
    }
  `}
`;

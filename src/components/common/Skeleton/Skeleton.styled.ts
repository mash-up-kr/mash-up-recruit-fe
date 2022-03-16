import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface SkeletonProps {
  width: string;
  height: string;
  borderRadius?: number;
  color: string;
  isLoading: boolean;
  isAnimation: boolean;
}

export const Skeleton = styled.div<SkeletonProps>`
  ${({ width, height, borderRadius, color, isLoading, isAnimation }) => css`
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
    animation: ${isAnimation ? '0.6s' : 0} linear infinite fade;

    & * {
      opacity: ${isLoading ? 0 : 1};
    }
  `}
`;

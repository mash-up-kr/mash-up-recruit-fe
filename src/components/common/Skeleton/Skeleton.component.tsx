import { ReactNode } from 'react';
import * as Styled from './Skeleton.styled';

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: number;
  color: string;
  isLoading: boolean;
  children?: ReactNode;
  className?: string;
  isAnimation?: boolean;
}

const Skeleton = ({
  width = 'auto',
  height = 'auto',
  borderRadius,
  color,
  isLoading,
  children,
  className = '',
  isAnimation = false,
}: SkeletonProps) => {
  if (!children)
    return isLoading ? (
      <Styled.Skeleton
        width={width}
        height={height}
        borderRadius={borderRadius}
        isLoading={isLoading}
        color={color}
        className={className}
        isAnimation={isAnimation}
      />
    ) : null;

  return isLoading ? (
    <Styled.Skeleton
      width={width}
      height={height}
      borderRadius={borderRadius}
      isLoading={isLoading}
      color={color}
      className={className}
      isAnimation={isAnimation}
    >
      {children}
    </Styled.Skeleton>
  ) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  );
};

export default Skeleton;

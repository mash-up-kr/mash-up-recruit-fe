import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

interface LottieProps {
  animationData: any;
  width?: number;
  height?: number;
}

const Lottie = ({ animationData, width, height, ...restProps }: LottieProps) => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current) {
      lottie.loadAnimation({
        animationData,
        container: element.current,
      });
    }
  }, [animationData]);

  return (
    <div
      style={{ width: width ?? '100%', height: height ?? '100%' }}
      ref={element}
      {...restProps}
    />
  );
};

export default Lottie;

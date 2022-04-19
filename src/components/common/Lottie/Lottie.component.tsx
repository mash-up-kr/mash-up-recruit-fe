import { useEffect, useRef } from 'react';

const lottie = import('lottie-web/build/player/lottie_light').then((module) => module.default);

async function loadLottieAnimation<T extends HTMLElement>(animationData: any, container: T) {
  const lottiePlayer = await lottie;
  lottiePlayer.loadAnimation({
    animationData,
    container,
  });
}

interface LottieProps {
  animationData: any;
  width?: number;
  height?: number;
}

const Lottie = ({ animationData, width, height }: LottieProps) => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current) {
      loadLottieAnimation(animationData, element.current);
    }
  }, [animationData]);

  return <div style={{ width: width ?? '100%', height: height ?? '100%' }} ref={element} />;
};

export default Lottie;

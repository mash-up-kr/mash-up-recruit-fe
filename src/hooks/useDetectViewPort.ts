import throttle from 'lodash-es/throttle';
import { useEffect, useState } from 'react';
import { breakPoint } from '@/styles';
import { ViewPort, VIEWPORT_SIZE } from '@/constants';

const useDetectViewport = (initialViewPort = breakPoint.value) => {
  const [size, setSize] = useState<ViewPort>(VIEWPORT_SIZE.DESKTOP);

  const { mobile, tabletS, tabletL } = initialViewPort;

  useEffect(() => {
    const detectionViewport = () => {
      const { innerWidth: vw } = window;

      if (vw <= mobile) {
        setSize(VIEWPORT_SIZE.MOBILE);
      } else if (vw > mobile && vw <= tabletS) {
        setSize(VIEWPORT_SIZE.TABLET_S);
      } else if (vw > tabletS && vw <= tabletL) {
        setSize(VIEWPORT_SIZE.TABLET_L);
      } else if (vw > tabletL) {
        setSize(VIEWPORT_SIZE.DESKTOP);
      }
    };

    detectionViewport();

    const throttleDetectViewport = throttle(detectionViewport, 200);
    window.addEventListener('resize', throttleDetectViewport);

    return () => {
      window.removeEventListener('resize', throttleDetectViewport);
    };
  }, [mobile, tabletL, tabletS]);

  return { size };
};

export default useDetectViewport;

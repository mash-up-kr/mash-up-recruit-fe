import throttle from 'lodash-es/throttle';
import { useEffect, useState } from 'react';
import { breakPoint } from '@/styles';
import { ViewPort, VIEWPORT_SIZE } from '@/constants';

const useDetectViewport = (initialViewPort = breakPoint.value) => {
  const [size, setSize] = useState<ViewPort>(VIEWPORT_SIZE.DESKTOP);

  const { mobile, tabletS, tabletM, tabletL } = initialViewPort;

  useEffect(() => {
    const detectionViewport = () => {
      const { innerWidth: vw } = window;

      if (vw <= mobile) {
        setSize(VIEWPORT_SIZE.MOBILE);
      } else if (vw > mobile && vw <= tabletS) {
        setSize(VIEWPORT_SIZE.TABLET_S);
      } else if (vw > tabletS && vw <= tabletM) {
        setSize(VIEWPORT_SIZE.TABLET_M);
      } else if (vw > tabletM && vw <= tabletL) {
        setSize(VIEWPORT_SIZE.TABLET_L);
      } else if (vw > tabletL) {
        setSize(VIEWPORT_SIZE.DESKTOP);
      }
    };

    detectionViewport();

    const handleDetectViewport = throttle(detectionViewport, 200);
    window.addEventListener('resize', handleDetectViewport);

    return () => {
      window.removeEventListener('resize', handleDetectViewport);
    };
  }, [mobile, tabletL, tabletM, tabletS]);

  return { size };
};

export default useDetectViewport;

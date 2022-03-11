import { useEffect, RefObject } from 'react';

const useDetectOutsideClick = (
  ref: RefObject<HTMLElement>,
  // eslint-disable-next-line no-unused-vars
  eventHandler: (event: MouseEvent) => void,
) => {
  useEffect(() => {
    const handleCorrespondRefAndTarget = (event: MouseEvent) => {
      if (ref?.current && ref.current.contains(event.target as Node)) {
        return;
      }

      eventHandler(event);
    };

    window.addEventListener('click', handleCorrespondRefAndTarget);

    return () => {
      window.removeEventListener('click', eventHandler);
    };
  }, [eventHandler, ref]);
};

export default useDetectOutsideClick;

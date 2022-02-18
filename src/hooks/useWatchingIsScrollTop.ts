import { useEffect, useState } from 'react';
import throttle from 'lodash-es/throttle';

const useWatchingIsScrollTop = () => {
  const [isScrollTop, setIsScrollTop] = useState(true);

  useEffect(() => {
    const changeIsScrollTop = () => {
      const currentScrollY = window.scrollY;
      setIsScrollTop(currentScrollY === 0);
    };

    const handleChangeIsScrollTop = throttle(changeIsScrollTop, 200);

    window.addEventListener('scroll', handleChangeIsScrollTop);
    return () => {
      window.removeEventListener('scroll', handleChangeIsScrollTop);
    };
  }, []);

  return isScrollTop;
};

export default useWatchingIsScrollTop;

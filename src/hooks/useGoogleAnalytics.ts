import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { pageview } from '@/lib/ga';

const useGoogleAnalytics = () => {
  const router = useRouter();

  const handleRouteChange = (url: URL) => {
    if (process.env.NODE_ENV !== 'production') return;
    pageview(url);
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};
export default useGoogleAnalytics;

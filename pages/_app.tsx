import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles, theme } from '@/styles';
import { Layout, LoadingModal } from '@/components';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isRouteChange, setIsRouteChange] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleShowLoadingSpinner = () => setIsRouteChange(true);
    const handleHideLoadingSpinner = () => setIsRouteChange(false);

    router.events.on('routeChangeStart', handleShowLoadingSpinner);
    router.events.on('routeChangeComplete', handleHideLoadingSpinner);
    router.events.on('routeChangeError', handleHideLoadingSpinner);

    return () => {
      router.events.off('routeChangeStart', handleShowLoadingSpinner);
      router.events.off('hashChangeComplete', handleHideLoadingSpinner);
      router.events.off('routeChangeError', handleHideLoadingSpinner);
    };
  }, [router.events]);

  return (
    <>
      <Global styles={globalStyles} />
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
            {isRouteChange && <LoadingModal setIsOpenModal={setIsRouteChange} />}
          </Layout>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
};

export default MyApp;

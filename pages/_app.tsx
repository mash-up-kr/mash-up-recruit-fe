import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles, theme } from '@/styles';
import { GlobalSEO, Layout, LoadingModal } from '@/components';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ChannelService from '@/utils/services/ChannelService';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isRouteChange, setIsRouteChange] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleShowLoadingSpinner = () => setIsRouteChange(true);
    const handleHideLoadingSpinner = () => setIsRouteChange(false);

    router.events.on('routeChangeStart', handleShowLoadingSpinner);
    router.events.on('routeChangeComplete', handleHideLoadingSpinner);
    router.events.on('routeChangeError', handleHideLoadingSpinner);

    const channelServiceInstance = new ChannelService();
    channelServiceInstance.boot({
      pluginKey: process.env.NEXT_PUBLIC_CHANNEL_PLUGIN,
    });

    return () => {
      router.events.off('routeChangeStart', handleShowLoadingSpinner);
      router.events.off('hashChangeComplete', handleHideLoadingSpinner);
      router.events.off('routeChangeError', handleHideLoadingSpinner);
    };
  }, [router.events]);

  return (
    <>
      <GlobalSEO />
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

import type { AppProps } from 'next/app';
import { css, Global, ThemeProvider } from '@emotion/react';
import { globalStyles, theme } from '@/styles';
import { ChannelTalk, Layout, LoadingModal, DefaultSEO } from '@/components';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { HOME_PAGE } from '@/constants';
import { useGoogleAnalytics } from '@/hooks';
import { isProduction } from '@/utils/assertion';
import { defaultSEOConfig } from '@/constants/seo';
import { Session } from 'next-auth';

const MyApp = ({ Component, pageProps }: AppProps<{ session: Session }>) => {
  const [isRouteChange, setIsRouteChange] = useState(false);
  const router = useRouter();
  const GoogleAnalyticsScripts = useGoogleAnalytics();

  useEffect(() => {
    const handleShowLoadingSpinner = () => setIsRouteChange(true);
    const handleHideLoadingSpinner = () => setIsRouteChange(false);

    router.events.on('routeChangeStart', handleShowLoadingSpinner);
    router.events.on('routeChangeComplete', handleHideLoadingSpinner);
    router.events.on('routeChangeError', handleHideLoadingSpinner);

    return () => {
      router.events.off('routeChangeStart', handleShowLoadingSpinner);
      router.events.off('routeChangeComplete', handleHideLoadingSpinner);
      router.events.off('routeChangeError', handleHideLoadingSpinner);
    };
  }, [router.events]);

  return (
    <>
      <GoogleAnalyticsScripts />
      <DefaultSEO {...defaultSEOConfig} />
      <Global
        styles={css`
          ${globalStyles}

          html {
            width: 100vw;
            overflow-x: hidden;
            background: ${router.pathname === HOME_PAGE ? theme.colors.gray95 : theme.colors.white};
          }
        `}
      />
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
            {isProduction && <ChannelTalk />}
            {isRouteChange && <LoadingModal setIsOpenModal={setIsRouteChange} />}
          </Layout>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
};

export default MyApp;

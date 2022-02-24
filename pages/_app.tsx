import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles, theme } from '@/styles';
import { Layout } from '@/components';
import { SessionProvider } from 'next-auth/react';
import { useGoogleAnalytics } from '@/hooks';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useGoogleAnalytics();

  return (
    <>
      <Global styles={globalStyles} />
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
};

export default MyApp;

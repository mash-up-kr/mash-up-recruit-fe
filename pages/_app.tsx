import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import { resetCss, theme } from '@/styles';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={resetCss} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;

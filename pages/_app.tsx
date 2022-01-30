import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import resetCss from '@/styles/reset';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={resetCss} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

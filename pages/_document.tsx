import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <link
            href="/fonts/Gilroy-Light.woff2"
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            href="/fonts/Gilroy-Extrabold.woff2"
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            href="/fonts/SpoqaHanSansNeo-Regular.woff2"
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            href="/fonts/SpoqaHanSansNeo-Medium.woff2"
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            href="/fonts/SpoqaHanSansNeo-Bold.woff2"
            rel="preload"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <div id="modal-root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

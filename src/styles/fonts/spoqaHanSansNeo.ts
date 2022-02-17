import { css } from '@emotion/react';

const spoqaHanSansNeo = css`
  @font-face {
    font-weight: 400;
    font-family: 'SpoqaHanSansNeo';
    font-style: normal;
    src: local('Spoqa Han Sans Neo Regular'), local('SpoqaHanSansNeo-Regular'),
      url('/fonts/SpoqaHanSansNeo-Regular.woff2') format('woff2'),
      url('/fonts/SpoqaHanSansNeo-Regular.woff') format('woff'),
      url('/fonts/SpoqaHanSansNeo-Regular.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-weight: 500;
    font-family: 'SpoqaHanSansNeo';
    font-style: normal;
    src: local('Spoqa Han Sans Neo Medium'), local('SpoqaHanSansNeo-Medium'),
      url('/fonts/SpoqaHanSansNeo-Medium.woff2') format('woff2'),
      url('/fonts/SpoqaHanSansNeo-Medium.woff') format('woff'),
      url('/fonts/SpoqaHanSansNeo-Medium.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-weight: 700;
    font-family: 'SpoqaHanSansNeo';
    font-style: normal;
    src: local('Spoqa Han Sans Neo Bold'), local('SpoqaHanSansNeo-Bold'),
      url('/fonts/SpoqaHanSansNeo-Bold.woff2') format('woff2'),
      url('/fonts/SpoqaHanSansNeo-Bold.woff') format('woff'),
      url('/fonts/SpoqaHanSansNeo-Bold.ttf') format('truetype');
    font-display: swap;
  }
`;

export default spoqaHanSansNeo;

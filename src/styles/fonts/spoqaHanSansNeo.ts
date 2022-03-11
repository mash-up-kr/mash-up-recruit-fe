import { css } from '@emotion/react';

const spoqaHanSansNeo = css`
  @font-face {
    font-weight: 400;
    font-family: 'SpoqaHanSansNeo';
    font-style: normal;
    src: local('Spoqa Han Sans Neo Regular'), local('SpoqaHanSansNeo-Regular'),
      url('https://static.mash-up.kr/fonts/SpoqaHanSansNeo-Regular.woff2') format('woff2'),
      url('https://static.mash-up.kr/fonts/SpoqaHanSansNeo-Regular.woff') format('woff'),
      url('https://static.mash-up.kr/fonts/SpoqaHanSansNeo-Regular.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-weight: 500;
    font-family: 'SpoqaHanSansNeo';
    font-style: normal;
    src: local('Spoqa Han Sans Neo Medium'), local('SpoqaHanSansNeo-Medium'),
      url('https://static.mash-up.kr/fonts/SpoqaHanSansNeo-Medium.woff2') format('woff2'),
      url('https://static.mash-up.kr/fonts/SpoqaHanSansNeo-Medium.woff') format('woff'),
      url('https://static.mash-up.kr/fonts/SpoqaHanSansNeo-Medium.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-weight: 700;
    font-family: 'SpoqaHanSansNeo';
    font-style: normal;
    src: local('Spoqa Han Sans Neo Bold'), local('SpoqaHanSansNeo-Bold'),
      url('https://static.mash-up.kr/fonts/SpoqaHanSansNeo-Bold.woff2') format('woff2'),
      url('https://static.mash-up.kr/fonts/SpoqaHanSansNeo-Bold.woff') format('woff'),
      url('https://static.mash-up.kr/fonts/SpoqaHanSansNeo-Bold.ttf') format('truetype');
    font-display: swap;
  }
`;

export default spoqaHanSansNeo;

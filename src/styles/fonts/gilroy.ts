import { css } from '@emotion/react';

const gilroy = css`
  @font-face {
    font-weight: 300;
    font-family: 'Gilroy';
    font-style: normal;
    src: local('Gilroy Light'), local('Gilroy-Light'),
      url('https://static.mash-up.kr/fonts/Gilroy-Light.woff2') format('woff2'),
      url('https://static.mash-up.kr/fonts/Gilroy-Light.woff') format('woff'),
      url('https://static.mash-up.kr/fonts/Gilroy-Light.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-weight: 800;
    font-family: 'Gilroy';
    font-style: normal;
    src: local('Gilroy Extrabold'), local('Gilroy-Extrabold'),
      url('https://static.mash-up.kr/fonts/Gilroy-Extrabold.woff2') format('woff2'),
      url('https://static.mash-up.kr/fonts/Gilroy-Extrabold.woff') format('woff'),
      url('https://static.mash-up.kr/fonts/Gilroy-Extrabold.ttf') format('truetype');
    font-display: swap;
  }
`;

export default gilroy;

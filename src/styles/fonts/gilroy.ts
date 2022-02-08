import { css } from '@emotion/react';

const gilroy = css`
  @font-face {
    font-weight: 300;
    font-family: 'Gilroy';
    font-style: normal;
    src: local('Gilroy Light'), local('Gilroy-Light'),
      url('fonts/Gilroy-Light.woff2') format('woff2'), url('fonts/Gilroy-Light.woff') format('woff'),
      url('fonts/Gilroy-Light.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-weight: 800;
    font-family: 'Gilroy';
    font-style: normal;
    src: local('Gilroy Extrabold'), local('Gilroy-Extrabold'),
      url('fonts/Gilroy-Extrabold.woff2') format('woff2'),
      url('fonts/Gilroy-Extrabold.woff') format('woff'),
      url('fonts/Gilroy-Extrabold.ttf') format('truetype');
    font-display: swap;
  }
`;

export default gilroy;

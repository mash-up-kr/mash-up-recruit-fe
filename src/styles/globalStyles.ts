import resetCss from '@/styles/reset';
import { css } from '@emotion/react';

const globalStyles = css`
  ${resetCss}

  @font-face {
    font-weight: 300;
    font-family: 'SpoqaHanSansNeo';
    font-style: normal;
    src: local('Spoqa Han Sans Neo Light'), local('SpoqaHanSansNeo-Light'),
      url('fonts/SpoqaHanSansNeo-Light.woff2') format('woff2'),
      url('fonts/SpoqaHanSansNeo-Light.woff') format('woff'),
      url('fonts/SpoqaHanSansNeo-Light.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-weight: 300;
    font-family: 'SpoqaHanSansNeo';
    font-style: normal;
    src: local('Gilroy Extrabold'), local('Gilroy-Extrabold'),
      url('fonts/Gilroy-Extrabold.woff2') format('woff2'),
      url('fonts/Gilroy-Extrabold.woff') format('woff'),
      url('fonts/Gilroy-ExtraBold.ttf') format('truetype');
    font-display: swap;
    unicode-range: U+0041-005A, U+0061-007A;
  }

  @font-face {
    font-weight: 400;
    font-family: 'SpoqaHanSansNeo';
    font-style: normal;
    src: local('Spoqa Han Sans Neo Regular'), local('SpoqaHanSansNeo-Regular'),
      url('fonts/SpoqaHanSansNeo-Regular.woff2') format('woff2'),
      url('fonts/SpoqaHanSansNeo-Regular.woff') format('woff'),
      url('fonts/SpoqaHanSansNeo-Regular.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-weight: 400;
    font-family: 'SpoqaHanSansNeo';
    font-style: normal;
    src: local('Gilroy Extrabold'), local('Gilroy-Extrabold'),
      url('fonts/Gilroy-Extrabold.woff2') format('woff2'),
      url('fonts/Gilroy-Extrabold.woff') format('woff'),
      url('fonts/Gilroy-ExtraBold.ttf') format('truetype');
    font-display: swap;
    unicode-range: U+0041-005A, U+0061-007A;
  }

  @font-face {
    font-weight: 500;
    font-family: 'SpoqaHanSansNeo';
    font-style: normal;
    src: local('Spoqa Han Sans Neo Medium'), local('SpoqaHanSansNeo-Medium'),
      url('fonts/SpoqaHanSansNeo-Medium.woff2') format('woff2'),
      url('fonts/SpoqaHanSansNeo-Medium.woff') format('woff'),
      url('fonts/SpoqaHanSansNeo-Medium.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-weight: 500;
    font-family: 'SpoqaHanSansNeo';
    font-style: normal;
    src: local('Gilroy Extrabold'), local('Gilroy-Extrabold'),
      url('fonts/Gilroy-Extrabold.woff2') format('woff2'),
      url('fonts/Gilroy-Extrabold.woff') format('woff'),
      url('fonts/Gilroy-ExtraBold.ttf') format('truetype');
    font-display: swap;
    unicode-range: U+0041-005A, U+0061-007A;
  }

  @font-face {
    font-weight: 700;
    font-family: 'SpoqaHanSansNeo';
    font-style: normal;
    src: local('Spoqa Han Sans Neo Bold'), local('SpoqaHanSansNeo-Bold'),
      url('fonts/SpoqaHanSansNeo-Bold.woff2') format('woff2'),
      url('fonts/SpoqaHanSansNeo-Bold.woff') format('woff'),
      url('fonts/SpoqaHanSansNeo-Bold.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-weight: 700;
    font-family: 'SpoqaHanSansNeo';
    font-style: normal;
    src: local('Gilroy Extrabold'), local('Gilroy-Extrabold'),
      url('fonts/Gilroy-Extrabold.woff2') format('woff2'),
      url('fonts/Gilroy-Extrabold.woff') format('woff'),
      url('fonts/Gilroy-ExtraBold.ttf') format('truetype');
    font-display: swap;
    unicode-range: U+0041-005A, U+0061-007A;
  }

  @font-face {
    font-weight: 800;
    font-family: 'SpoqaHanSansNeo';
    font-style: normal;
    src: local('Gilroy Extrabold'), local('Gilroy-Extrabold'),
      url('fonts/Gilroy-Extrabold.woff2') format('woff2'),
      url('fonts/Gilroy-Extrabold.woff') format('woff'),
      url('fonts/Gilroy-ExtraBold.ttf') format('truetype');
    font-display: swap;
    unicode-range: U+0041-005A, U+0061-007A;
  }
`;

export default globalStyles;

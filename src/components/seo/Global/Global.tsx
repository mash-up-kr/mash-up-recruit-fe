import Head from 'next/head';
import favicon from 'public/favicon.ico';
import ogImage from '@/assets/images/og-image.png';

const GlobalSEO = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <title>Mash-up Recruit | IT 연합 동아리</title>
      <meta
        name="description"
        content="매쉬업은 개발, 디자인에 관심과 열정이 있는 사람들이 모인 단체로 UX/UI Design, Android, iOS, Backend(노드,스프링), Web 총 6개의 팀으로 구성되어 있습니다. 매쉬업에서는 전체모임의 세미나 및 네트워킹을 진행하고 있으며, 이를 통하여 개인의 전문역량과 협업능력을 증대시키고자 합니다."
      />
      <meta
        name="keywords"
        content="IT동아리,메쉬업,매쉬업,매시업,mashup,mash-up,iOS,개발동아리,android,디자인,디자인동아리,UX,UI,product-design,design,web,프론트엔드,front-end,백엔드,backend,spring,node,IT,동아리,IT연합동아리"
      />
      <meta property="og:url" content="https://recruit.mash-up.kr/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Mash-up Recruit | IT 연합 동아리" />
      <meta
        property="og:description"
        content="매쉬업은 개발, 디자인에 관심과 열정이 있는 사람들이 모인 단체로 Product Design, Android, iOS, Backend(노드,스프링), Web 총 6개의 팀으로 구성되어 있습니다. 매쉬업에서는 전체모임의 세미나 및 네트워킹을 진행하고 있으며, 이를 통하여 개인의 전문역량과 협업능력을 증대시키고자 합니다."
      />
      <meta property="og:image" content={ogImage.src} />
      <link rel="icon" href={favicon.src} />
    </Head>
  );
};

export default GlobalSEO;

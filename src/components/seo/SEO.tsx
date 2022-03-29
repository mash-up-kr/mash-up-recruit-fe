import Head from 'next/head';
import { ReactNode } from 'react';
import { titleTemplate } from '@/constants/seo';

interface BaseMetaTag {
  content: string;
}

interface HTML5MetaTag extends BaseMetaTag {
  name: string;
  property?: undefined;
  httpEquiv?: undefined;
}

interface RDFaMetaTag extends BaseMetaTag {
  property: string;
  name?: undefined;
  httpEquiv?: undefined;
}

interface HTTPEquivMetaTag extends BaseMetaTag {
  httpEquiv:
    | 'content-security-policy'
    | 'content-type'
    | 'default-style'
    | 'x-ua-compatible'
    | 'refresh';
  name?: undefined;
  property?: undefined;
}

type MetaTag = HTML5MetaTag | RDFaMetaTag | HTTPEquivMetaTag;

interface LinkTag {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
  color?: string;
  as?: string;
  crossOrigin?: string;
}

interface OpenGraphImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
  type?: string;
}

interface OpenGraph {
  url?: string;
  type?: string;
  title?: string;
  description?: string;
  images?: OpenGraphImage[];
}

export interface SEOProps {
  title?: string;
  description?: string;
  openGraph?: OpenGraph;
  additionalMetaTags?: MetaTag[];
  additionalLinkTags?: LinkTag[];
}

export interface DefaultSEOProps extends SEOProps {
  keywords?: string[];
}

const buildOpenGraphImageTags = (images: OpenGraphImage[]) => {
  return images.reduce((tags, image, index) => {
    tags.push(<meta key={`og:image:${index}`} property="og:image" content={image.url} />);

    if (image.alt) {
      tags.push(<meta key={`og:image:alt${index}`} property="og:image:alt" content={image.alt} />);
    }

    if (image.type) {
      tags.push(
        <meta key={`og:image:type${index}`} property="og:image:type" content={image.type} />,
      );
    }

    if (image.width) {
      tags.push(
        <meta
          key={`og:image:width${index}`}
          property="og:image:width"
          content={image.width.toString()}
        />,
      );
    }

    if (image.height) {
      tags.push(
        <meta
          key={`og:image:height${index}`}
          property="og:image:height"
          content={image.height.toString()}
        />,
      );
    }

    return tags;
  }, [] as ReactNode[]);
};

interface BuildTagsParams extends DefaultSEOProps, SEOProps {}

const buildTags = (config: BuildTagsParams) => {
  const tagsToRender: ReactNode[] = [];

  const updatedTitle = config.title ? `${titleTemplate}${config.title}` : '';

  if (updatedTitle) {
    tagsToRender.push(<title key="title">{updatedTitle}</title>);
  }

  if (config.description) {
    tagsToRender.push(<meta key="description" name="description" content={config.description} />);
  }

  if (config.openGraph?.title || updatedTitle) {
    tagsToRender.push(
      <meta key="og:title" property="og:title" content={config.openGraph?.title || updatedTitle} />,
    );
  }

  if (config.openGraph?.description || config.description) {
    tagsToRender.push(
      <meta
        key="og:description"
        property="og:description"
        content={config.openGraph?.description || config.description}
      />,
    );
  }

  if (config.openGraph?.url) {
    tagsToRender.push(<meta key="og:url" property="og:url" content={config.openGraph.url} />);
  }

  if (config.openGraph?.type) {
    tagsToRender.push(<meta key="og:type" property="og:type" content={config.openGraph.type} />);
  }

  if (config.openGraph?.images?.length) {
    tagsToRender.push(...buildOpenGraphImageTags(config.openGraph.images));
  }

  if (config.additionalMetaTags?.length) {
    config.additionalMetaTags.forEach((tag) => {
      tagsToRender.push(
        <meta key={`meta:${tag.name ?? tag.property ?? tag.httpEquiv}`} {...tag} />,
      );
    });
  }

  if (config.additionalLinkTags?.length) {
    config.additionalLinkTags.forEach((tag) => {
      tagsToRender.push(<link key={`link${[tag.rel, tag.href].join('')}`} {...tag} />);
    });
  }

  if (config.keywords) {
    tagsToRender.push(<meta key="keywords" name="keywords" content={config.keywords.join(',')} />);
  }

  return tagsToRender;
};

export const DefaultSEO = ({
  title,
  description,
  openGraph,
  additionalLinkTags,
  additionalMetaTags,
  keywords,
}: DefaultSEOProps) => {
  return (
    <Head>
      {buildTags({
        title,
        description,
        openGraph,
        additionalLinkTags,
        additionalMetaTags,
        keywords,
      })}
    </Head>
  );
};

const SEO = ({
  title,
  description,
  openGraph,
  additionalLinkTags,
  additionalMetaTags,
}: SEOProps) => {
  return (
    <Head>
      {buildTags({
        title,
        description,
        openGraph,
        additionalLinkTags,
        additionalMetaTags,
      })}
    </Head>
  );
};
export default SEO;

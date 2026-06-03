import React from 'react';
import { useLocation } from 'react-router-dom';
import { Head } from 'vite-react-ssg';

interface ArticleSchemaProps {
  title: string;
  description: string;
  image: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  category?: string;
  location?: string;
}

const SITE_ORIGIN = 'https://www.thegivingcircle.in';

const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  title,
  description,
  image,
  datePublished = '2024-01-15',
  dateModified = new Date().toISOString().split('T')[0],
  author = 'The Giving Circle Team',
  category = 'Social Impact',
  location = 'India',
}) => {
  const { pathname } = useLocation();
  const pageUrl = `${SITE_ORIGIN}${pathname}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Organization',
      name: author,
      url: SITE_ORIGIN,
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Giving Circle',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_ORIGIN}/Giving_Circle..-removebg-preview.png`,
        width: 227,
        height: 56,
      },
      url: SITE_ORIGIN,
    },
    datePublished,
    dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    articleSection: category,
    inLanguage: 'en-IN',
    about: {
      '@type': 'Thing',
      name: category,
    },
    locationCreated: {
      '@type': 'Place',
      name: location,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <Head>
      <script type="application/ld+json" data-schema="article">
        {JSON.stringify(articleSchema)}
      </script>
    </Head>
  );
};

export default ArticleSchema;

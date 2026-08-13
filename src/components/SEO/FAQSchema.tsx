import React from 'react';
import { Head } from 'vite-react-ssg';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <Head>
      <script type="application/ld+json" data-schema="faq">
        {JSON.stringify(schema)}
      </script>
    </Head>
  );
};

export default FAQSchema;

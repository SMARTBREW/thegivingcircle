import React, { useEffect } from 'react';

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
  useEffect(() => {
    // Create or update Article schema
    let schemaScript = document.querySelector('script[data-schema="article"]');
    
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('data-schema', 'article');
      document.head.appendChild(schemaScript);
    }

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "image": {
        "@type": "ImageObject",
        "url": image,
        "width": 1200,
        "height": 630
      },
      "author": {
        "@type": "Organization",
        "name": author,
        "url": "https://www.thegivingcircle.in"
      },
      "publisher": {
        "@type": "Organization",
        "name": "The Giving Circle",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.thegivingcircle.in/Giving_Circle..-removebg-preview.png",
          "width": 227,
          "height": 56
        },
        "url": "https://www.thegivingcircle.in"
      },
      "datePublished": datePublished,
      "dateModified": dateModified,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
      },
      "articleSection": category,
      "inLanguage": "en-IN",
      "about": {
        "@type": "Thing",
        "name": category
      },
      "locationCreated": {
        "@type": "Place",
        "name": location,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        }
      }
    };

    schemaScript.textContent = JSON.stringify(articleSchema);

    // Cleanup function to remove schema when component unmounts
    return () => {
      const script = document.querySelector('script[data-schema="article"]');
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [title, description, image, datePublished, dateModified, author, category, location]);

  return null; // This component doesn't render anything visible
};

export default ArticleSchema;


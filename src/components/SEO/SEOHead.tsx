import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  ogImage = 'https://www.thegivingcircle.in/Giving_Circle..-removebg-preview.png',
  ogTitle,
  ogDescription,
  canonicalUrl,
  noindex = false,
}) => {
  const location = useLocation();
  
  // Default values
  const defaultTitle = "The Giving Circle - Community Giving Platform | Support Social Causes India";
  const defaultDescription = "The Giving Circle is India's trusted social impact platform connecting Cause Champions with verified causes. Join our community giving platform to support social causes, donate to verified charity, and create real impact stories across India.";
  const defaultCanonical = `https://www.thegivingcircle.in${location.pathname}`;

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description || defaultDescription);

    // Update or create meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Update robots meta tag
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Update or create canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl || defaultCanonical);

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    };

    updateOGTag('og:url', canonicalUrl || defaultCanonical);
    updateOGTag('og:title', ogTitle || title || defaultTitle);
    updateOGTag('og:description', ogDescription || description || defaultDescription);
    updateOGTag('og:image', ogImage);
    updateOGTag('og:type', 'website');
    updateOGTag('og:site_name', 'The Giving Circle');
    updateOGTag('og:locale', 'en_IN');

    // Update Twitter Card tags
    const updateTwitterTag = (property: string, content: string) => {
      let twitterTag = document.querySelector(`meta[property="${property}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('property', property);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', content);
    };

    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:url', canonicalUrl || defaultCanonical);
    updateTwitterTag('twitter:title', ogTitle || title || defaultTitle);
    updateTwitterTag('twitter:description', ogDescription || description || defaultDescription);
    updateTwitterTag('twitter:image', ogImage);

  }, [title, description, keywords, ogImage, ogTitle, ogDescription, canonicalUrl, noindex, location.pathname, defaultCanonical, defaultTitle, defaultDescription]);

  return null; // This component doesn't render anything
};

export default SEOHead;


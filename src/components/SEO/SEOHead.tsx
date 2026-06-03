import { useLocation } from 'react-router-dom';
import { Head } from 'vite-react-ssg';

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

const SITE_ORIGIN = 'https://www.thegivingcircle.in';
const DEFAULT_TITLE =
  'The Giving Circle - Community Giving Platform | Support Social Causes India';
const DEFAULT_DESCRIPTION =
  "The Giving Circle is India's trusted social impact platform connecting Cause Champions with verified causes. Support social causes, donate to verified charity, and create real impact stories across India.";

/**
 * Renders per-page <head> tags. Uses vite-react-ssg's <Head> so the tags are
 * baked into the static HTML at build time (correct for crawlers) and stay
 * reactive on the client during SPA navigation.
 */
const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  ogImage = `${SITE_ORIGIN}/Giving_Circle..-removebg-preview.png`,
  ogTitle,
  ogDescription,
  canonicalUrl,
  noindex = false,
}) => {
  const location = useLocation();

  const resolvedTitle = title || DEFAULT_TITLE;
  const resolvedDescription = description || DEFAULT_DESCRIPTION;
  const resolvedCanonical = canonicalUrl || `${SITE_ORIGIN}${location.pathname}`;
  const resolvedOgTitle = ogTitle || title || DEFAULT_TITLE;
  const resolvedOgDescription = ogDescription || description || DEFAULT_DESCRIPTION;
  const robots = noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  return (
    <Head>
      <title>{resolvedTitle}</title>
      <meta name="title" content={resolvedTitle} />
      <meta name="description" content={resolvedDescription} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={resolvedCanonical} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="The Giving Circle" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={resolvedCanonical} />
      <meta name="twitter:title" content={resolvedOgTitle} />
      <meta name="twitter:description" content={resolvedOgDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};

export default SEOHead;

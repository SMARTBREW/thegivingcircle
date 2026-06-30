import { Navigate, useParams } from 'react-router-dom';
import {
  getNGOProfilePathById,
  getNGOProfilePathBySlug,
} from '../utils/ngoRoutes';

const VARIANT_PREFIXES = [
  'top-ngo-in-',
  'verified-ngo-in-',
  'trusted-ngo-in-',
  'leading-ngo-in-',
] as const;

const CANONICAL_CITY_SLUGS = new Set([
  'best-ngo-in-delhi',
  'best-ngo-in-gurugram',
  'best-ngo-in-noida',
  'best-ngo-in-faridabad',
]);

/** Map legacy local-seo / ngos variant slugs to the one canonical city page. */
function resolveCanonicalNgoSlug(slug: string): string {
  for (const prefix of VARIANT_PREFIXES) {
    if (slug.startsWith(prefix)) {
      return `best-ngo-in-${slug.slice(prefix.length)}`;
    }
  }
  if (slug === 'ngo-in-noida') return 'best-ngo-in-noida';
  if (slug === 'ngo-in-gurugram') return 'best-ngo-in-gurugram';
  if (CANONICAL_CITY_SLUGS.has(slug)) return slug;
  return '';
}

export function NGODetailLegacyRedirect() {
  const { id } = useParams<{ id: string }>();
  return <Navigate to={getNGOProfilePathById(id || '')} replace />;
}

export function NGOSlugLegacyRedirect() {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={getNGOProfilePathBySlug(slug || '')} replace />;
}

export function LocalSEOSlugRedirect() {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) {
    return <Navigate to="/ngos" replace />;
  }
  const canonical = resolveCanonicalNgoSlug(slug);
  if (!canonical) {
    return <Navigate to="/ngos" replace />;
  }
  return <Navigate to={`/ngos/${canonical}`} replace />;
}

/** Client fallback when CloudFront 301 is missed — never render duplicate hub content. */
export function NGOLocationFallbackRedirect() {
  const { location } = useParams<{ location: string }>();
  if (!location) {
    return <Navigate to="/ngos" replace />;
  }
  const canonical = resolveCanonicalNgoSlug(location);
  if (!canonical) {
    return <Navigate to="/ngos" replace />;
  }
  return <Navigate to={`/ngos/${canonical}`} replace />;
}

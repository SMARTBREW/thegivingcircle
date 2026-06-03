import { Navigate, useParams } from 'react-router-dom';
import {
  getNGOProfilePathById,
  getNGOProfilePathBySlug,
} from '../utils/ngoRoutes';

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
  return <Navigate to={`/ngos/${slug}`} replace />;
}

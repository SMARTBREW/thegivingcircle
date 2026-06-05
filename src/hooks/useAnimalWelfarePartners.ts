import { useCallback, useEffect, useState } from 'react';
import { fetchAnimalWelfarePartners } from '../api/animalWelfareApi';
import type { AnimalWelfarePartner } from '../types/animalWelfare';

export interface UseAnimalWelfarePartnersOptions {
  citySlug: string | undefined;
  page: number;
  pageSize: number;
  search?: string;
}

export function useAnimalWelfarePartners({
  citySlug,
  page,
  pageSize,
  search = '',
}: UseAnimalWelfarePartnersOptions) {
  const [partners, setPartners] = useState<AnimalWelfarePartner[]>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!citySlug) return;

    setLoading(true);
    setError(null);

    try {
      const { partners: rows, pagination } = await fetchAnimalWelfarePartners(citySlug, {
        page,
        limit: pageSize,
        q: search.trim() || undefined,
      });

      setPartners(Array.isArray(rows) ? rows : []);
      setTotal(pagination?.total ?? 0);
      setTotalPages(pagination?.totalPages ?? 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load directory from database');
      setPartners([]);
      setTotal(0);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  }, [citySlug, page, pageSize, search]);

  useEffect(() => {
    load();
  }, [load]);

  return {
    partners,
    total,
    totalPages,
    loading,
    error,
    reload: load,
  };
}

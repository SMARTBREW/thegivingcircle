import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import SEOHead from '../../components/SEO/SEOHead';
import PartnerFormModal from '../../components/animal-welfare/PartnerFormModal';
import PartnersTable from '../../components/animal-welfare/PartnersTable';
import PartnersPagination from '../../components/animal-welfare/PartnersPagination';
import StrengthenNetworkSection from '../../components/animal-welfare/StrengthenNetworkSection';
import { getAnimalWelfareCity } from '../../constants/animalWelfareCities';
import { submitAnimalWelfarePartnerSuggestion } from '../../api/animalWelfareApi';
import { useAnimalWelfarePartners } from '../../hooks/useAnimalWelfarePartners';
import type { AnimalWelfarePartnerInput } from '../../types/animalWelfare';

const PAGE_SIZE_OPTIONS = [5, 10, 15, 25] as const;

const AnimalWelfareCityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const cityConfig = getAnimalWelfareCity(citySlug);

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [search, setSearch] = useState('');
  const [searchDebounced, setSearchDebounced] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const t = window.setTimeout(() => setSearchDebounced(search.trim()), 300);
    return () => window.clearTimeout(t);
  }, [search]);

  const { partners, total, totalPages, loading, error } = useAnimalWelfarePartners({
    citySlug,
    page,
    pageSize,
    search: searchDebounced,
  });

  useEffect(() => {
    setPage(1);
  }, [searchDebounced, pageSize, citySlug]);

  const pageNumbers = useMemo(() => {
    const maxButtons = 7;
    let start = Math.max(1, page - Math.floor(maxButtons / 2));
    const end = Math.min(totalPages, start + maxButtons - 1);
    start = Math.max(1, end - maxButtons + 1);
    const nums: number[] = [];
    for (let p = start; p <= end; p++) nums.push(p);
    return nums;
  }, [page, totalPages]);

  if (!cityConfig) {
    return <Navigate to="/animal-emergency.html" replace />;
  }

  const serialOffset = (page - 1) * pageSize;

  const openCreate = () => {
    setModalOpen(true);
  };

  const handleSubmit = async (input: AnimalWelfarePartnerInput) => {
    if (!citySlug || !cityConfig) return;
    setSubmitting(true);
    try {
      const result = await submitAnimalWelfarePartnerSuggestion({
        citySlug,
        regionLabel: cityConfig.label,
        ...input,
      });
      setModalOpen(false);
      setSuccessMessage(
        result.message ||
          'Thank you! Your suggestion has been sent for review. We will add verified listings to the directory soon.'
      );
      setSuccessModalOpen(true);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Submission failed');
    } finally {
      setSubmitting(false);
    }
  };

  const canonicalUrl = `https://www.thegivingcircle.in/animal-welfare/${cityConfig.slug}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title={`Animal Welfare Directory — ${cityConfig.label} | The Giving Circle`}
        description={`Directory of rescues, vets, NGOs and ambulances for animal welfare in ${cityConfig.label}. Verified listings with contact numbers and service areas.`}
        keywords={`animal welfare ${cityConfig.label}, stray animal rescue ${cityConfig.label}, vet on call ${cityConfig.label}, animal ambulance ${cityConfig.label}, NGO animal rescue`}
        canonicalUrl={canonicalUrl}
      />

      <section className="bg-gradient-to-br from-green-50 via-white to-green-100 pt-32 pb-8 sm:pb-10 border-b border-green-100/80">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 text-sm" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-gray-600">
              <li>
                <Link to="/" className="text-green-700 hover:text-green-900 font-medium">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <a href="/animal-emergency.html" className="text-green-700 hover:text-green-900 font-medium">
                  Animal emergency
                </a>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600">{cityConfig.label}</li>
            </ol>
          </nav>
          <p className="inline-block bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
            Animal Welfare Directory
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-3">
            Animal Welfare Services — {cityConfig.label}
          </h1>
          <p className="text-gray-700 max-w-3xl">
            Rescues, veterinarians, NGOs and ambulances operating in {cityConfig.label}. For urgent injured animals,
            call the{' '}
            <a href="tel:+919315982650" className="text-green-700 font-semibold hover:underline">
              24/7 helpline
            </a>{' '}
            first.
          </p>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">
          <div className="px-4 sm:px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2 items-center">
              <button
                type="button"
                onClick={openCreate}
                className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                + Add
              </button>
              <a
                href="/animal-emergency.html"
                className="inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-200 bg-white px-4 py-2.5 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
              >
                ← All regions
              </a>
            </div>
            <div className="flex flex-wrap gap-2 items-center w-full sm:w-auto">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, org, area, address, email…"
                className="flex-1 min-w-[200px] sm:w-72 border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white shadow-sm focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none"
                aria-label="Search directory"
              />
              <label htmlFor="page-size" className="text-sm font-medium text-gray-600 whitespace-nowrap">
                Per page
              </label>
              <select
                id="page-size"
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white shadow-sm focus:ring-2 focus:ring-green-600 outline-none"
              >
                {PAGE_SIZE_OPTIONS.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="px-4 sm:px-6 py-2.5 text-xs text-gray-600 bg-amber-50/90 border-b border-amber-100">
            {loading
              ? 'Loading directory from database…'
              : `${total} listing${total === 1 ? '' : 's'}${searchDebounced ? ` matching “${searchDebounced}”` : ''}. Suggestions are reviewed before being added to the list.`}
          </p>

          {error && (
            <div className="mx-4 sm:mx-6 mt-4 p-3 rounded-lg bg-red-50 text-red-800 text-sm border border-red-100">
              {error}. Start the API with <code className="text-xs">cd server && npm run dev</code>, then run{' '}
              <code className="text-xs">npm run seed:animal-welfare</code> if Pune is empty.
            </div>
          )}

          {loading ? (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-gray-600">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-700" />
              <p className="text-sm">Fetching list from database…</p>
            </div>
          ) : partners.length === 0 ? (
            <div className="px-6 py-12 text-center text-gray-600">
              <p className="mb-4">No listings yet for {cityConfig.label}.</p>
              <button
                type="button"
                onClick={openCreate}
                className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm"
              >
                Add first listing
              </button>
            </div>
          ) : (
            <PartnersTable partners={partners} serialOffset={serialOffset} />
          )}

          {!loading && totalPages > 0 && (
            <PartnersPagination
              page={page}
              totalPages={totalPages}
              pageNumbers={pageNumbers}
              onPageChange={setPage}
            />
          )}
        </div>

        <div className="mt-8">
          <StrengthenNetworkSection onShareClick={openCreate} />
        </div>
      </div>

      <PartnerFormModal
        open={modalOpen}
        title="Add"
        defaultCity={cityConfig.city}
        initial={null}
        saving={submitting}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
      />

      {successModalOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="submit-success-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Close"
            onClick={() => setSuccessModalOpen(false)}
          />
          <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-8 z-10 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-8 w-8 text-green-700" aria-hidden />
            </div>
            <h2 id="submit-success-title" className="text-xl font-bold text-gray-900 mb-2">
              Submitted successfully
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">{successMessage}</p>
            <button
              type="button"
              onClick={() => setSuccessModalOpen(false)}
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-green-700 rounded-lg hover:bg-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimalWelfareCityPage;

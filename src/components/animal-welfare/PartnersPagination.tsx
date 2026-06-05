interface PartnersPaginationProps {
  page: number;
  totalPages: number;
  pageNumbers: number[];
  onPageChange: (page: number) => void;
}

const PartnersPagination = ({ page, totalPages, pageNumbers, onPageChange }: PartnersPaginationProps) => {
  if (totalPages <= 0) return null;

  const btnBase =
    'inline-flex items-center justify-center min-w-[2.25rem] h-9 px-3 text-sm font-medium rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none';

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 py-4 bg-gray-50/90 border-t border-gray-200">
      <p className="text-sm text-gray-600">
        Page <span className="font-semibold text-gray-900">{page}</span> of{' '}
        <span className="font-semibold text-gray-900">{totalPages}</span>
      </p>
      <nav className="flex flex-wrap items-center gap-1.5" aria-label="Pagination">
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => onPageChange(Math.max(1, page - 1))}
          className={`${btnBase} border-gray-300 bg-white text-gray-700 hover:bg-gray-50`}
        >
          Previous
        </button>
        {pageNumbers.map((p) => (
          <button
            key={p}
            type="button"
            disabled={p === page}
            onClick={() => onPageChange(p)}
            aria-current={p === page ? 'page' : undefined}
            className={`${btnBase} ${
              p === page
                ? 'border-green-700 bg-green-700 text-white shadow-sm'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            {p}
          </button>
        ))}
        <button
          type="button"
          disabled={page >= totalPages}
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          className={`${btnBase} border-gray-300 bg-white text-gray-700 hover:bg-gray-50`}
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default PartnersPagination;

import { ExternalLink, Plus } from 'lucide-react';

const AWBI_ABC_URL = 'https://www.awbi.gov.in/view/index/Project-Recognition-for-ABC';
const DELHI_MCD_URL = 'https://mcdonline.nic.in/mcdonline/';

interface StrengthenNetworkSectionProps {
  /** Opens the suggest-listing form on city pages */
  onShareClick?: () => void;
  /** Fallback link when no click handler (e.g. emergency hub page) */
  shareHref?: string;
}

const StrengthenNetworkSection = ({
  onShareClick,
  shareHref = '/animal-welfare/pan-india',
}: StrengthenNetworkSectionProps) => {
  const shareButtonClass =
    'inline-flex items-center gap-2 rounded-full bg-amber-400 hover:bg-amber-300 text-green-950 font-semibold text-sm px-5 py-2.5 shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-[#1a4d3a]';

  const shareButtonContent = (
    <>
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-950/10">
        <Plus className="h-4 w-4" aria-hidden />
      </span>
      Share Local Resources
    </>
  );

  return (
    <section
      className="rounded-2xl bg-[#1a4d3a] text-white px-6 sm:px-10 py-10 sm:py-12 text-center"
      aria-labelledby="strengthen-network-heading"
    >
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/30 bg-white/10">
        <Plus className="h-7 w-7 text-white" strokeWidth={2.5} aria-hidden />
      </div>

      <h2 id="strengthen-network-heading" className="text-2xl sm:text-3xl font-bold mb-3">
        Help Us Strengthen the Network!
      </h2>
      <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto mb-8">
        Your contribution will empower strays and their guardians across India.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
        {onShareClick ? (
          <button type="button" onClick={onShareClick} className={shareButtonClass}>
            {shareButtonContent}
          </button>
        ) : (
          <a href={shareHref} className={shareButtonClass}>
            {shareButtonContent}
          </a>
        )}
        <p className="text-white/90 text-sm sm:text-base">Add ambulances, vets, shelters &amp; more</p>
      </div>

      <div className="border-t border-white/20 pt-8">
        <p className="text-white font-semibold mb-4">Additional Resources:</p>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href={DELHI_MCD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            Delhi MCD Zone Contact List
            <ExternalLink className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
          </a>
          <a
            href={AWBI_ABC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            AWBI Approved ABC Centers
            <ExternalLink className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
          </a>
        </div>
      </div>

      <p className="mt-8 text-xs sm:text-sm text-white/70 italic max-w-2xl mx-auto leading-relaxed">
        Disclaimer: We are not responsible for the validity, accuracy, or completeness of the information shared
        here. Use at your own discretion.
      </p>
    </section>
  );
};

export default StrengthenNetworkSection;

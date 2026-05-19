import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function YoungChampionsHero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-green-100 pt-28 pb-14 sm:pt-32 sm:pb-16 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-green-200/40 blur-3xl"
        aria-hidden
      />
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-3 py-1.5 text-xs sm:text-sm font-medium text-green-800 shadow-sm mb-6">
          <Sparkles className="text-green-700 shrink-0" size={16} aria-hidden />
          Student & youth volunteer pathway · India
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 max-w-4xl">
          Young Champions — lead giving on your campus &amp; in your community
        </h1>
        <div className="w-20 h-1.5 bg-green-700 mb-8" aria-hidden />
        <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-8 leading-relaxed">
          The Young Champions track is for students and early-career changemakers who want to rally peers around verified causes—education,
          welfare, and relief—with transparent fundraising and real partner NGOs behind every campaign.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            to="/onboarding"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-700 text-white font-semibold px-6 py-3.5 hover:bg-green-800 transition-colors shadow-md hover:shadow-lg"
          >
            Apply as a Cause Champion
            <ArrowRight size={18} aria-hidden />
          </Link>
          <Link
            to="/live-causes"
            className="inline-flex items-center justify-center rounded-lg border-2 border-green-700 text-green-800 font-semibold px-6 py-3.5 hover:bg-green-50 transition-colors"
          >
            Explore live causes
          </Link>
        </div>
      </div>
    </section>
  );
}

import { TrendingUp, Shield, Heart } from 'lucide-react';

const highlights = [
  {
    icon: TrendingUp,
    stat: 'Transparent goals',
    detail: 'Campaign pages show progress bars and partner context—so your cohort sees where support lands.',
  },
  {
    icon: Shield,
    stat: 'Verified NGOs',
    detail: 'We spotlight partners with documentation you can reference when presenting to faculty or donors.',
  },
  {
    icon: Heart,
    stat: 'Community-first tone',
    detail: 'Champions learn to fundraise with dignity: beneficiary-led framing, no sensationalism.',
  },
];

export default function ImpactShowcase() {
  return (
    <section className="py-14 sm:py-16 bg-white" aria-labelledby="young-champions-impact">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="young-champions-impact" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          What “impact” looks like for Young Champions
        </h2>
        <div className="w-16 h-1 bg-green-700 mb-8" aria-hidden />
        <p className="text-gray-600 max-w-3xl mb-12 leading-relaxed">
          Youth leadership here is measured in trust built: informed peers, donations that reach official rails, and repeat engagement—not
          vanity metrics alone.
        </p>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {highlights.map(({ icon: Icon, stat, detail }) => (
            <div key={stat} className="text-center md:text-left rounded-xl border border-gray-100 p-8 bg-gradient-to-b from-green-50/60 to-white">
              <Icon className="mx-auto md:mx-0 text-green-700 mb-4" size={32} aria-hidden />
              <p className="text-xl font-bold text-gray-900 mb-2">{stat}</p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
        <blockquote className="rounded-xl border-l-4 border-green-700 bg-green-50/50 px-6 py-6 max-w-3xl">
          <p className="text-gray-800 italic leading-relaxed mb-3">
            “When students carry verified stories back to their friends, giving stops feeling abstract—we see classmates stay involved across
            semesters.”
          </p>
          <footer className="text-sm text-gray-600 not-italic">
            — How student coordinators often describe verified-story-led fundraising
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

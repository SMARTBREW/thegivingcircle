import { Link } from 'react-router-dom';
import { Shield, CheckCircle } from 'lucide-react';
import SEOHead from '../../components/SEO/SEOHead';
import ArticleSchema from '../../components/SEO/ArticleSchema';

const TopNGOsInDelhi2026 = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Top NGOs in Delhi You Can Trust for Donations in 2026 | The Giving Circle"
        description="Find the most trusted and transparent NGOs in Delhi in 2026. Ranked by impact, transparency and donor trust. Includes 80G status, cause areas and how to donate safely."
        keywords="top NGOs in Delhi 2026, best NGOs Delhi, trusted charities Delhi, donate to NGO Delhi, verified Delhi NGOs, most transparent NGOs Delhi, top charities Delhi NCR"
        canonicalUrl="https://www.thegivingcircle.in/top-ngos-in-delhi-2026"
        ogTitle="Top NGOs in Delhi 2026 — Trusted Charities | The Giving Circle"
        ogDescription="Delhi's most trusted NGOs ranked by transparency, impact and donor satisfaction. 80G tax benefits available."
      />
      <ArticleSchema
        title="Top NGOs in Delhi You Can Trust for Donations in 2026"
        description="Find the most trusted and transparent NGOs in Delhi in 2026, ranked by impact, transparency and donor trust."
        image="https://www.thegivingcircle.in/Giving_Circle..-removebg-preview.png"
        datePublished={currentDate}
        dateModified={currentDate}
        category="NGO Rankings"
        location="Delhi"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-100 pt-32 pb-12 sm:pb-16">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link to="/" className="text-green-700 hover:text-green-900">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link to="/ngos" className="text-green-700 hover:text-green-900">NGO Directory</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600">Top NGOs in Delhi 2026</li>
            </ol>
          </nav>

          <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">Delhi NCR · Updated {currentDate}</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Top NGOs in Delhi You Can Trust for Donations in 2026
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            Ranked by Impact, Transparency & Donor Trust
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <Shield className="text-green-700" size={16} />
              All NGOs FCRA Verified
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <CheckCircle className="text-green-700" size={16} />
              Active 80G Certification
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>By The Giving Circle Research Team</span>
            <span>•</span>
            <span>7 min read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Intro */}
        <section className="mb-12">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Delhi NCR is home to some of India's most active and impactful NGOs but also to thousands of poorly run or opaque organisations. This guide lists only the NGOs that passed our multi-layer verification in 2026.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We evaluated over 100 Delhi-based NGOs on financial transparency, programme delivery, governance and impact reporting. Here are the ones that made the cut.
          </p>
          <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
            <p className="text-green-900 font-medium">All listed NGOs have: Valid FCRA · Active 80G certification · Audited financials · Published impact data</p>
          </div>
        </section>

        {/* Top NGO List */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Top Verified NGOs in Delhi NCR (2026)</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="space-y-6">
            {[
              { rank: 1, name: "JWP - Joint Women's Program", cause: 'Child Education', description: 'Operates across multiple Delhi colonies providing after-school tutoring, digital literacy and life skills training. Strong girl child education focus.', impact: '800+ children supported annually', founded: '2011', href: '/jwp-cause-details' },
              // { rank: 2, name: 'Khushi Foundation', cause: 'Education & Child Welfare', description: 'One of Delhi\'s most established child welfare NGOs with programmes spanning education, nutrition and community health.', impact: '1,200+ beneficiaries annually', founded: '2008', href: '/jwp-cause-details' },
              { rank: 3, name: 'AnimalCare India', cause: 'Animal Welfare', description: 'Delhi\'s leading stray animal welfare organisation. Runs mass vaccination drives, emergency rescue and a specialised Flood Animal Rescue programme.', impact: '10,000+ animals treated annually', founded: '2014', href: '/animalcare-ngo-detail' },
              { rank: 4, name: 'Bowls of Hope', cause: 'Animal Welfare', description: 'Feeds stray animals across Delhi NCR daily. Simple mission, transparent operations and growing volunteer network.', impact: '5,000+ meals served weekly', founded: '2016', href: '/bowls-of-hope-cause-details' },
            ].map(({ rank, name, cause, description, impact, founded, href }) => (
              <div key={rank} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-50 px-6 py-3 flex items-center gap-3 border-b border-gray-100">
                  <span className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-sm">#{rank}</span>
                  <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                  <span className="ml-auto bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">{cause}</span>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{description}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-1 text-gray-600"><span className="font-medium">Impact:</span> {impact}</span>
                    <span className="flex items-center gap-1 text-gray-600"><span className="font-medium">Founded:</span> {founded}</span>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <Link to={href} className="text-green-700 font-medium text-sm hover:text-green-900">View Cause →</Link>
                    <span className="text-gray-300">|</span>
                    <Link to="/live-causes" className="text-green-700 font-medium text-sm hover:text-green-900">Donate Now →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Choose */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">How to Choose the Right Delhi NGO to Donate To</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="space-y-4">
            {[
              { tip: 'Match your values', body: 'Choose a cause that resonates with you personally education, animal welfare, women empowerment or disaster relief. Sustained giving comes from genuine alignment.' },
              { tip: 'Verify independently', body: 'Check FCRA on MHA\'s portal and 80G on the Income Tax website. Never donate based on social media posts alone.' },
              { tip: 'Ask for impact data', body: 'Any credible NGO will share outcome data not just photos, but numbers: how many children educated, animals treated, families fed.' },
              { tip: 'Check overhead ratios', body: 'Administrative expenses above 30% of total spending is a red flag. The Giving Circle displays this for all listed NGOs.' },
            ].map(({ tip, body }) => (
              <div key={tip} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                <span className="flex-shrink-0 text-green-700 font-bold mt-1">→</span>
                <div>
                  <span className="font-semibold text-gray-900">{tip}: </span>
                  <span className="text-gray-700">{body}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Directories */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">More Delhi NGO Directories</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { label: 'Best NGOs in Delhi', href: '/ngos/best-ngo-in-delhi' },
              { label: 'Verified NGOs in Delhi', href: '/ngos/verified-ngo-in-delhi' },
              { label: 'Trusted NGOs in Delhi', href: '/ngos/trusted-ngo-in-delhi' },
              { label: 'Verified NGOs in Delhi (Guide)', href: '/verified-ngos-in-delhi' },
              { label: 'NGOs for Women Empowerment', href: '/ngo-for-women-empowerment' },
              { label: 'NGO Directory India', href: '/ngos' },
            ].map(({ label, href }) => (
              <Link key={href} to={href} className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-green-400 transition-all text-sm font-medium text-gray-900 hover:text-green-700">
                {label} →
              </Link>
            ))}
          </div>
        </section>

      </div>

      {/* Full-width CTA */}
      <section className="bg-green-700 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Donate to a Verified Delhi NGO Today
          </h2>
          <p className="text-green-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Safe, transparent, impactful every cause on The Giving Circle is independently verified.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/live-causes" className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              Explore Live Causes
            </Link>
            <Link to="/onboarding" className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-lg transition-all hover:-translate-y-1">
              Become a Cause Champion
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopNGOsInDelhi2026;

import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEO/SEOHead';
import { Shield, CheckCircle, TrendingUp } from 'lucide-react';

const SEOHubIndex = () => {
  const locations = [
    { name: 'Delhi', slug: 'best-ngo-in-delhi' },
    { name: 'Gurugram', slug: 'best-ngo-in-gurugram' },
    { name: 'Noida', slug: 'best-ngo-in-noida' },
    { name: 'Faridabad', slug: 'best-ngo-in-faridabad' },
  ];

  const keywordVariations = [
    { keyword: 'Best NGO', slugPrefix: 'best-ngo-in' },
    { keyword: 'Top NGO', slugPrefix: 'top-ngo-in' },
    { keyword: 'Verified NGO', slugPrefix: 'verified-ngo-in' },
    { keyword: 'Trusted NGO', slugPrefix: 'trusted-ngo-in' },
    { keyword: 'Leading NGO', slugPrefix: 'leading-ngo-in' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="NGO Directory - Find Best NGOs in Delhi, Gurugram, Noida, Faridabad | Community Support Platform"
        description="Comprehensive directory of verified NGOs in Delhi NCR region. Find best, top-rated, trusted, and leading NGOs in Delhi, Gurugram, Noida, and Faridabad. Support verified charity organizations through India's leading community giving platform and corporate giving platforms. Join our circle of support to connect with trusted NGOs and support social causes."
        keywords="NGO directory, best NGOs Delhi, top NGOs Gurugram, verified NGOs Noida, trusted NGOs Faridabad, NGO list Delhi NCR, charity directory, social impact organizations, community support platform, giving platform, community giving, support social causes, india care, social giving, community causes, community helpline, causes to support, corporate giving platforms, give and help, giving circle, giving community, social causes to support, top ngo in india, best ngo in india, ngo full form, ngo role, role of ngo, indian ngo, donation 80g, giveindia, dog ngos, helping the poor"
        canonicalUrl="https://www.thegivingcircle.in/ngos"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-100 pt-32 pb-12 sm:pb-16">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link to="/" className="text-green-700 hover:text-green-900">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600">NGO Directory</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            NGO Directory  -  Find Verified NGOs Near You
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            Explore city-wise NGO listings and keyword directories across Delhi NCR. Every listing is designed to help donors discover verified NGOs and give with confidence.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <Shield className="text-green-700" size={16} />
              Verified Partners
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <CheckCircle className="text-green-700" size={16} />
              Transparent Reporting
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <TrendingUp className="text-green-700" size={16} />
              Real Impact
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/live-causes" className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
              Explore Live Causes
            </Link>
            <Link to="/onboarding" className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Become a Cause Champion
            </Link>
          </div>
        </div>
      </section>

      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Locations Grid */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Explore NGOs by Location</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location) => (
              <div key={location.slug} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{location.name}</h3>
                <ul className="space-y-2">
                  {keywordVariations.map((kw) => (
                    <li key={kw.slugPrefix}>
                      <Link
                        to={`/ngos/${kw.slugPrefix}-${location.name.toLowerCase()}`}
                        className="text-green-700 hover:text-green-900 text-sm block"
                      >
                        {kw.keyword} in {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Keyword Variations Grid */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Browse by Category</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {keywordVariations.map((kw) => (
              <div key={kw.slugPrefix} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{kw.keyword}</h3>
                <ul className="space-y-2">
                  {locations.map((location) => (
                    <li key={location.slug}>
                      <Link
                        to={`/ngos/${kw.slugPrefix}-${location.name.toLowerCase()}`}
                        className="text-green-700 hover:text-green-900 text-sm block"
                      >
                        {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* All Pages Grid */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Complete NGO Directory</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {locations.map((location) =>
              keywordVariations.map((kw) => (
                <Link
                  key={`${kw.slugPrefix}-${location.name.toLowerCase()}`}
                  to={`/ngos/${kw.slugPrefix}-${location.name.toLowerCase()}`}
                  className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-green-400 transition-all"
                >
                  <span className="text-gray-900 font-medium">
                    {kw.keyword} in {location.name}
                  </span>
                </Link>
              ))
            )}
          </div>
        </section>
      </div>

      {/* Full-width CTA */}
      <section className="bg-green-700 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
          <p className="text-green-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join The Giving Circle and connect with verified NGOs creating real impact. Donate transparently and track outcomes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/onboarding" className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              Become a Cause Champion
            </Link>
            <Link to="/live-causes" className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-lg transition-all hover:-translate-y-1">
              Explore Causes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOHubIndex;

import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEO/SEOHead';

const SEOHubIndex: React.FC = () => {
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
    <div className="min-h-screen bg-white">
      <SEOHead
        title="NGO Directory - Find Best NGOs in Delhi, Gurugram, Noida, Faridabad | The Giving Circle"
        description="Comprehensive directory of verified NGOs in Delhi NCR region. Find best, top-rated, trusted, and leading NGOs in Delhi, Gurugram, Noida, and Faridabad. Support verified charity organizations through The Giving Circle platform."
        keywords="NGO directory, best NGOs Delhi, top NGOs Gurugram, verified NGOs Noida, trusted NGOs Faridabad, NGO list Delhi NCR, charity directory, social impact organizations"
        canonicalUrl="https://www.thegivingcircle.in/local-seo"
      />

      {/* Breadcrumbs */}
      <nav className="bg-gray-50 py-3 px-4 border-b">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-700">NGO Directory</li>
          </ol>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            NGO Directory - Find Verified NGOs Near You
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover verified and trusted NGOs in Delhi NCR region. Connect with top-rated charity organizations making real social impact.
          </p>
        </div>

        {/* Locations Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Explore NGOs by Location
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location) => (
              <div key={location.slug} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{location.name}</h3>
                <ul className="space-y-2">
                  {keywordVariations.map((kw) => (
                    <li key={kw.slugPrefix}>
                      <Link
                        to={`/local-seo/${kw.slugPrefix}-${location.name.toLowerCase()}`}
                        className="text-blue-600 hover:text-blue-800 text-sm block"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Browse by Category
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {keywordVariations.map((kw) => (
              <div key={kw.slugPrefix} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{kw.keyword}</h3>
                <ul className="space-y-2">
                  {locations.map((location) => (
                    <li key={location.slug}>
                      <Link
                        to={`/local-seo/${kw.slugPrefix}-${location.name.toLowerCase()}`}
                        className="text-blue-600 hover:text-blue-800 text-sm block"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Complete NGO Directory
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {locations.map((location) =>
              keywordVariations.map((kw) => (
                <Link
                  key={`${kw.slugPrefix}-${location.name.toLowerCase()}`}
                  to={`/local-seo/${kw.slugPrefix}-${location.name.toLowerCase()}`}
                  className="block border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-blue-500 transition-all"
                >
                  <span className="text-gray-900 font-medium">
                    {kw.keyword} in {location.name}
                  </span>
                </Link>
              ))
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join The Giving Circle and connect with verified NGOs creating real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/onboarding"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Become a Cause Champion
            </Link>
            <Link
              to="/live-causes"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Causes
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SEOHubIndex;

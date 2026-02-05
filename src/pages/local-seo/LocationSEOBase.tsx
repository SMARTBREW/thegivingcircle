import React from 'react';
import SEOHead from '../../components/SEO/SEOHead';
import ArticleSchema from '../../components/SEO/ArticleSchema';
import { Link } from 'react-router-dom';

interface LocationSEOBaseProps {
  location: string;
  locationSlug: string;
  title: string;
  description: string;
  keywords: string;
  primaryKeyword: string;
  relatedLocations?: Array<{ name: string; slug: string }>;
  relatedKeywords?: Array<{ keyword: string; slug: string }>;
}

const LocationSEOBase: React.FC<LocationSEOBaseProps> = ({
  location,
  locationSlug,
  title,
  description,
  keywords,
  primaryKeyword,
  relatedLocations = [],
  relatedKeywords = [],
}) => {
  const canonicalUrl = `https://www.thegivingcircle.in/ngos/${locationSlug}`;
  const currentDate = new Date().toISOString().split('T')[0];

  // Default related locations if not provided
  const defaultLocations = [
    { name: 'Delhi', slug: 'best-ngo-in-delhi' },
    { name: 'Gurugram', slug: 'best-ngo-in-gurugram' },
    { name: 'Noida', slug: 'best-ngo-in-noida' },
    { name: 'Faridabad', slug: 'best-ngo-in-faridabad' },
  ].filter(loc => loc.slug !== locationSlug);

  const locationsToShow = relatedLocations.length > 0 ? relatedLocations : defaultLocations;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        ogTitle={title}
        ogDescription={description}
      />
      
      <ArticleSchema
        title={title}
        description={description}
        image="https://www.thegivingcircle.in/Giving_Circle..-removebg-preview.png"
        datePublished={currentDate}
        dateModified={currentDate}
        category="NGO Directory"
        location={location}
      />

      {/* Breadcrumbs */}
      <nav className="bg-gray-50 py-3 px-4 border-b">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
            <li className="text-gray-500">/</li>
            <li><Link to="/ngos" className="text-blue-600 hover:text-blue-800">NGO Directory</Link></li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-700">{location}</li>
          </ol>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {primaryKeyword} in {location}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover verified and trusted NGOs in {location} making a real impact. Connect with top-rated charity organizations through our giving platform and community support platform. Join our giving community to support social causes, give and help create positive change through social giving and community support initiatives.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Leading NGOs in {location} - Verified & Trusted
            </h2>
            <p className="text-gray-700 mb-4">
              {location} is home to numerous non-profit organizations working tirelessly to create positive social change through community giving and social giving. At The Giving Circle, our giving platform and community support platform connect you with the most trusted and verified NGOs in {location} that are making a real difference through community support and support of community initiatives. Join our support circle and giving community to support social causes in the india community.
            </p>
            <p className="text-gray-700 mb-4">
              Our giving platform ensures transparency, accountability, and real impact through community support and giving to community initiatives. Every NGO partner undergoes a rigorous verification process, creating supported causes and causes to support where your contributions reach those who need them most. By supporting india's communities, we enable communities for communities and provide giving support, circle aid, and community helpline resources for meaningful social impact.
            </p>
          </div>
        </section>

        {/* Why Choose NGOs on The Giving Circle */}
        <section className="mb-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose NGOs on Our Community Support Platform?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">✓ Verified & Trusted</h3>
              <p className="text-gray-700">
                All NGOs undergo comprehensive verification to ensure legitimacy and transparency.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">✓ Real Impact Tracking</h3>
              <p className="text-gray-700">
                Track your contributions through our giving platform and see the real-world impact of your social giving and support to communities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">✓ Transparent Operations</h3>
              <p className="text-gray-700">
                Complete transparency in how funds are used and distributed to beneficiaries.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">✓ Multiple Causes</h3>
              <p className="text-gray-700">
                Support social causes including education, healthcare, animal welfare, disaster relief through our community support platform. Find causes to support that matter to you.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">✓ Easy Donation Process</h3>
              <p className="text-gray-700">
                Simple, secure, and hassle-free donation process with multiple payment options.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">✓ Community Driven</h3>
              <p className="text-gray-700">
                Join our giving community and support community of Cause Champions working together. Create a circle of support, give and help through community giving, providing support from community to support social causes across the india community.
              </p>
            </div>
          </div>
        </section>

        {/* Top NGO Categories in Location */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Top NGO Categories in {location}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600 text-sm">
                NGOs working on education, literacy, and skill development programs.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm">
                Health services, medical camps, and healthcare access initiatives.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Animal Welfare</h3>
              <p className="text-gray-600 text-sm">
                Animal rescue, vaccination, and care programs for stray animals.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Disaster Relief</h3>
              <p className="text-gray-600 text-sm">
                Emergency response and disaster relief operations.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Women Empowerment</h3>
              <p className="text-gray-600 text-sm">
                Programs focused on women's rights, education, and economic empowerment.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Child Welfare</h3>
              <p className="text-gray-600 text-sm">
                Child protection, education, and development programs.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Environmental</h3>
              <p className="text-gray-600 text-sm">
                Environmental conservation and sustainability initiatives.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rural Development</h3>
              <p className="text-gray-600 text-sm">
                Rural infrastructure, livelihood, and community development programs.
              </p>
            </div>
          </div>
        </section>

        {/* How to Support NGOs in Location */}
        <section className="mb-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How to Support NGOs in {location}
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Browse Verified NGOs</h3>
                <p className="text-gray-700">
                  Explore our directory of verified NGOs in {location} working across various social causes. Find causes to support and supported causes through our giving platform.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Cause</h3>
                <p className="text-gray-700">
                  Select causes to support that resonate with you - community causes including education, healthcare, animal welfare, or disaster relief. Join our support circle for social giving.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Make a Contribution</h3>
                <p className="text-gray-700">
                  Give through our giving platform securely and track the impact of your social giving. Provide community support and giving to community through our community support platform.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Track Impact</h3>
                <p className="text-gray-700">
                  Receive updates on how your giving support and community support are making a difference in {location} communities. See how our support community and circle of support create impact through communities for communities initiatives.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/live-causes"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore Live Causes
            </Link>
          </div>
        </section>

        {/* Related Locations */}
        {locationsToShow.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Explore NGOs in Nearby Locations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {locationsToShow.map((loc) => (
                <Link
                  key={loc.slug}
                  to={`/ngos/${loc.slug}`}
                  className="block border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-500 transition-all"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Best NGOs in {loc.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Discover verified NGOs and causes to support making impact through community support in {loc.name}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related Keywords */}
        {relatedKeywords.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Related Topics
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedKeywords.map((kw) => (
                <Link
                  key={kw.slug}
                  to={`/ngos/${kw.slug}`}
                  className="inline-block bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  {kw.keyword}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make a Difference in {location}?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our giving community and community support platform to connect with verified NGOs creating real impact. Be part of our support circle, give through our giving platform, and support social causes through social giving and community support. Together we create a circle of support for supporting india's communities for communities.
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

export default LocationSEOBase;

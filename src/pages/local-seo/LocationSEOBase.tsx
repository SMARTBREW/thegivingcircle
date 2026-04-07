import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../../components/SEO/SEOHead';
import ArticleSchema from '../../components/SEO/ArticleSchema';

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

const GLOBAL_KEYWORDS =
  'causes to support, circle aid, circle of support, communities for communities, communities support, community causes, community giving, community helpline, community offering, community support platform, corporate giving platforms, give and help, give through, giving circle, giving community, giving india, giving platform, giving support, giving to community, india care, india community, social causes to support, social giving, support circle, support community, support from community, support of community, support social causes, supported causes, supporting india, donate sanitary pads India, period poverty India, rabies prevention donation, stray dog vaccination programs, animal welfare NGO India, menstrual hygiene projects';

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
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const defaultLocations = [
    { name: 'Delhi', slug: 'best-ngo-in-delhi' },
    { name: 'Gurugram', slug: 'best-ngo-in-gurugram' },
    { name: 'Noida', slug: 'best-ngo-in-noida' },
    { name: 'Faridabad', slug: 'best-ngo-in-faridabad' },
  ].filter((loc) => loc.slug !== locationSlug);

  const locationsToShow = relatedLocations.length > 0 ? relatedLocations : defaultLocations;

  const faqItems = [
    {
      q: `How do I verify an NGO in ${location}?`,
      a: 'Check FCRA registration on the Ministry of Home Affairs portal, 80G certification on the Income Tax website, and annual audited statements. The Giving Circle verifies these before listing.',
    },
    {
      q: 'Are donations tax-deductible?',
      a: 'Yes. Donations to 80G-certified NGOs are eligible for tax deductions. You receive a receipt within 48 hours.',
    },
    {
      q: 'How do I know my donation created impact?',
      a: 'We publish quarterly impact reports and fund utilisation updates on cause pages so donors can track outcomes.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title={title}
        description={description}
        keywords={`${keywords}, ${GLOBAL_KEYWORDS}`}
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

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-100 pt-32 pb-12 sm:pb-16">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link to="/" className="text-green-700 hover:text-green-900">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link to="/ngos" className="text-green-700 hover:text-green-900">
                  NGO Directory
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600">{location}</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {primaryKeyword} in {location}
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            Discover verified and trusted NGOs in {location} making a real impact. Connect with top-rated charity organizations through The Giving Circle and donate with confidence.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <Shield className="text-green-700" size={16} />
              FCRA & 80G Verified
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <CheckCircle className="text-green-700" size={16} />
              Transparent Reporting
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <TrendingUp className="text-green-700" size={16} />
              Real Impact Data
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/live-causes"
              className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
            >
              Explore Live Causes
            </Link>
            <Link
              to="/onboarding"
              className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Become a Cause Champion
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Leading NGOs in {location}  -  Verified & Trusted
          </h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              {location} is home to numerous non-profit organizations working tirelessly to create positive social change through community giving and social giving. At The Giving Circle, our giving platform and community support platform connect you with the most trusted and verified NGOs in {location} that are making a real difference through community support and support of community initiatives.
            </p>
            <p className="text-gray-700 mb-4">
              Our giving platform ensures transparency, accountability, and real impact through community support and giving to community initiatives. Every NGO partner undergoes a rigorous verification process so your contributions reach those who need them most.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Why Donate Through The Giving Circle?
          </h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '✓ Verified & Trusted', body: 'All NGOs undergo verification for legitimacy, compliance and transparency.' },
              { title: '✓ Real Impact Tracking', body: 'Quarterly reporting so donors can track outcomes, not just spend.' },
              { title: '✓ Transparent Operations', body: 'Clear fund utilisation updates and public reporting practices.' },
              { title: '✓ Multiple Causes', body: 'Support education, healthcare, animal welfare, disaster relief and more.' },
              { title: '✓ Secure Giving', body: 'Simple, secure payments and a consistent donor experience.' },
              { title: '✓ Community Driven', body: 'Join a giving community of Cause Champions creating collective impact.' },
            ].map(({ title: t, body }) => (
              <div key={t} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t}</h3>
                <p className="text-gray-700">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Top NGO Categories in {location}
          </h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Education', desc: 'Education, literacy and skill development programmes.' },
              { label: 'Healthcare', desc: 'Medical camps, treatment access and preventive health.' },
              { label: 'Animal Welfare', desc: 'Rescue, vaccination, feeding and shelter programmes.' },
              { label: 'Disaster Relief', desc: 'Emergency response and rehabilitation support.' },
              { label: 'Women Empowerment', desc: 'Rights, education, skills training and livelihoods.' },
              { label: 'Child Welfare', desc: 'Protection, nutrition, education and development.' },
              { label: 'Environment', desc: 'Sustainability, clean-up and conservation work.' },
              { label: 'Rural Development', desc: 'Infrastructure, livelihoods and community development.' },
            ].map(({ label, desc }) => (
              <div key={label} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{label}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            How to Support NGOs in {location}
          </h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

          <div className="space-y-4">
            {[
              { step: 1, title: 'Browse verified NGOs', body: `Explore verified NGOs in ${location} working across multiple causes.` },
              { step: 2, title: 'Choose a cause', body: 'Pick a cause that resonates: education, healthcare, animals, disaster relief and more.' },
              { step: 3, title: 'Donate securely', body: 'Give through our platform with secure payments and transparent reporting.' },
              { step: 4, title: 'Track impact', body: 'Receive updates and reports showing what your donation achieved.' },
            ].map(({ step, title: t, body }) => (
              <div key={step} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  {step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t}</h3>
                  <p className="text-gray-700">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/live-causes"
              className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
            >
              Explore Live Causes
            </Link>
          </div>
        </section>

        {locationsToShow.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Explore NGOs in Nearby Locations</h2>
            <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {locationsToShow.map((loc) => (
                <Link
                  key={loc.slug}
                  to={`/ngos/${loc.slug}`}
                  className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-green-500 transition-all"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Best NGOs in {loc.name}</h3>
                  <p className="text-gray-600 text-sm">Discover verified NGOs and causes to support in {loc.name}.</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {relatedKeywords.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Related Topics</h2>
            <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
            <div className="flex flex-wrap gap-3">
              {relatedKeywords.map((kw) => (
                <Link
                  key={kw.slug}
                  to={`/ngos/${kw.slug}`}
                  className="inline-block bg-white border border-gray-200 hover:bg-green-50 hover:border-green-400 text-gray-700 hover:text-green-800 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  {kw.keyword}
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">{faq.q}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="text-green-700 shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400 shrink-0" size={20} />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="p-4 sm:p-5 pt-0 text-gray-600 text-sm sm:text-base leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="bg-green-700 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference in {location}?
          </h2>
          <p className="text-green-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join The Giving Circle to connect with verified NGOs creating real impact  -  and track your contribution transparently.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/onboarding"
              className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Become a Cause Champion
            </Link>
            <Link
              to="/live-causes"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-lg transition-all hover:-translate-y-1"
            >
              Explore Causes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationSEOBase;

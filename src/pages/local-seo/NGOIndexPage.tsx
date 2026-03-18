import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../../components/SEO/SEOHead';
import ArticleSchema from '../../components/SEO/ArticleSchema';

const CAUSE_PAGES = [
  { title: 'Donate for Child Education', description: 'Support NGOs bringing quality education to underprivileged children across India.', href: '/donate-for-education-india', icon: '📚' },
  { title: 'NGOs for Women Empowerment', description: 'Discover organisations enabling women\'s rights, livelihoods and leadership.', href: '/ngo-for-women-empowerment', icon: '👩' },
  { title: 'Verified NGOs in Delhi', description: 'Find background-checked, transparent NGOs operating in Delhi NCR.', href: '/verified-ngos-in-delhi', icon: '✅' },
  { title: 'CSR Projects in India', description: 'Connect corporate CSR budgets with credible, measurable social impact projects.', href: '/csr-projects-in-india', icon: '🏢' },
];

const ARTICLE_PAGES = [
  { title: 'Top Verified NGOs in India 2026', description: 'With tax benefits, impact data and full transparency scores.', href: '/top-verified-ngos-india-2026' },
  { title: 'What is a Giving Circle?', description: 'A complete guide to collective giving in India — how it works and why it matters.', href: '/what-is-a-giving-circle' },
  { title: 'Top NGOs in Delhi 2026', description: 'Trusted organisations ranked by transparency, impact and donor reviews.', href: '/top-ngos-in-delhi-2026' },
  { title: 'Volunteering Opportunities in Delhi', description: 'NGOs you can join to make real impact with your time and skills.', href: '/volunteer-opportunities-delhi' },
  { title: 'How to Volunteer in India', description: 'A practical guide to finding and joining reputable NGO volunteering programmes.', href: '/how-to-volunteer-india' },
];

const faqs = [
  { q: 'How do I verify if an NGO is legitimate?', a: 'Check FCRA registration on the Ministry of Home Affairs portal, 80G certification on the Income Tax website, and annual returns filed with the Registrar of Societies. The Giving Circle does all of this before listing any NGO.' },
  { q: 'Are donations through The Giving Circle tax deductible?', a: 'Yes. All NGOs listed on The Giving Circle have valid 80G certification. Donations generate an automatic 80G receipt emailed to you within 48 hours.' },
  { q: 'Can my company donate through The Giving Circle for CSR?', a: 'Absolutely. Our NGO partners work under Schedule VII of the Companies Act. We provide full MoU, utilisation certificates and impact reports for CSR compliance.' },
  { q: 'What is a Giving Circle and how does it work?', a: 'A giving circle is a model where individuals pool their donations to fund larger, more impactful programmes. Rather than making small individual donations, members of a giving circle combine contributions to create meaningful change together.' },
];

const NGOIndexPage = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="NGO Directory India | Verified NGOs by City & Cause | The Giving Circle"
        description="Browse India's most comprehensive directory of verified NGOs by city and cause. Find trusted charity organisations in Delhi, Noida, Gurugram & Faridabad and donate with confidence."
        keywords="ngo directory india, verified ngos india, best ngos in india, donate to ngo india, ngo list india 2026, top charities india"
        canonicalUrl="https://www.thegivingcircle.in/ngos"
        ogTitle="NGO Directory India | The Giving Circle"
        ogDescription="India's most comprehensive directory of verified NGOs by city and cause."
      />
      <ArticleSchema
        title="NGO Directory India — Verified NGOs by City & Cause"
        description="Browse verified NGOs by city and cause. Find trusted charity organisations in Delhi, Noida, Gurugram & Faridabad."
        image="https://www.thegivingcircle.in/Giving_Circle..-removebg-preview.png"
        datePublished={currentDate}
        dateModified={currentDate}
        category="NGO Directory"
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
            NGO Directory India
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            Find verified, transparent NGOs by city or cause. Every organisation on The Giving Circle is background-checked — FCRA, 80G, audited financials — so your donation creates real, trackable impact.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <Shield className="text-green-700" size={16} />
              FCRA & 80G Verified
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <CheckCircle className="text-green-700" size={16} />
              100% Transparency
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <TrendingUp className="text-green-700" size={16} />
              Real Impact Data
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

      {/* Content */}
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Browse by Cause */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Browse by Cause</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <p className="text-gray-600 mb-6">Discover NGOs based on the issues you care about most.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAUSE_PAGES.map((page) => (
              <Link
                key={page.href}
                to={page.href}
                className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-500 transition-all group"
              >
                <div className="text-3xl mb-3">{page.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-700 mb-2">{page.title}</h3>
                <p className="text-gray-600 text-sm">{page.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Browse by City */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Browse by City</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <p className="text-gray-600 mb-6">Find verified NGOs close to you in Delhi NCR and beyond.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Delhi', slugs: ['best-ngo-in-delhi', 'top-ngo-in-delhi', 'verified-ngo-in-delhi'] },
              { name: 'Noida', slugs: ['best-ngo-in-noida', 'top-ngo-in-noida', 'verified-ngo-in-noida'] },
              { name: 'Gurugram', slugs: ['best-ngo-in-gurugram', 'top-ngo-in-gurugram', 'verified-ngo-in-gurugram'] },
              { name: 'Faridabad', slugs: ['best-ngo-in-faridabad', 'top-ngo-in-faridabad', 'verified-ngo-in-faridabad'] },
            ].map((city) => (
              <div key={city.name} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{city.name}</h3>
                <ul className="space-y-2">
                  {city.slugs.map((slug) => {
                    const label = slug.replace(`-in-${city.name.toLowerCase()}`, '').replace(/-/g, ' ');
                    return (
                      <li key={slug}>
                        <Link to={`/ngos/${slug}`} className="text-green-700 hover:text-green-900 text-sm font-medium capitalize">
                          {label} NGOs →
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Guides & Articles */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Guides & Articles</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <p className="text-gray-600 mb-6">Everything you need to give wisely and make real impact.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ARTICLE_PAGES.map((article) => (
              <Link
                key={article.href}
                to={article.href}
                className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-500 transition-all group"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-700 mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{article.description}</p>
                <span className="text-green-700 text-sm font-medium">Read more →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Trust */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Why Trust The Giving Circle?</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Shield size={24} className="text-green-700" />, title: 'Rigorous Verification', body: 'Every NGO undergoes a multi-step background check including FCRA status, 80G certification and financial audits before listing.' },
              { icon: <CheckCircle size={24} className="text-green-700" />, title: '100% Transparency', body: 'Real-time fund utilisation reports so you always know where your donation went and what it achieved.' },
              { icon: <TrendingUp size={24} className="text-green-700" />, title: 'Tax Benefits (80G)', body: 'Donations to listed NGOs qualify for Section 80G tax deductions. Receipts are generated automatically.' },
            ].map(({ icon, title, body }) => (
              <div key={title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-3">{icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-700 text-sm">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">{faq.q}</span>
                  {openFaqIndex === index ? <ChevronUp className="text-green-700 shrink-0" size={20} /> : <ChevronDown className="text-gray-400 shrink-0" size={20} />}
                </button>
                {openFaqIndex === index && (
                  <div className="p-4 sm:p-5 pt-0 text-gray-600 text-sm sm:text-base leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Full-width CTA */}
      <section className="bg-green-700 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-green-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of Indians giving collectively through The Giving Circle. Even ₹500 can fund a child's education for a month.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/onboarding" className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              Become a Cause Champion
            </Link>
            <Link to="/live-causes" className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-lg transition-all hover:-translate-y-1">
              Explore Live Causes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NGOIndexPage;

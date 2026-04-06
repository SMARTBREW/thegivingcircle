import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../../components/SEO/SEOHead';
import ArticleSchema from '../../components/SEO/ArticleSchema';

const faqs = [
  { q: 'How do I verify if an NGO in Delhi is legitimate?', a: 'Check for FCRA registration on the Ministry of Home Affairs portal, 80G certification on the Income Tax website, and annual returns filed with the Registrar of Societies. The Giving Circle does all of this before listing any NGO.' },
  { q: 'Which is the most trusted NGO in Delhi for education donations?', a: "JWP (Joint Women's Program) and Khushi Foundation are among the most transparent education NGOs in Delhi NCR listed on The Giving Circle, with published quarterly impact reports." },
  { q: 'Can I get a tax receipt for donating to a Delhi NGO?', a: 'Yes. All NGOs listed on The Giving Circle have valid 80G certification. Donations generate an automatic 80G receipt emailed to you within 48 hours.' },
  { q: 'How is The Giving Circle different from other donation platforms?', a: 'We use a collective giving model where communities pool donations to fund larger interventions. We also do independent verification of every listed NGO rather than relying on self-reported data.' },
];

const VerifiedNGOsInDelhi = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Verified NGOs in Delhi | Trusted Charities to Donate To 2026 | The Giving Circle"
        description="Find verified, background-checked NGOs in Delhi you can safely donate to in 2026. All organisations have valid FCRA, 80G status and published audit reports. Tax benefits available."
        keywords="verified NGOs in Delhi, trusted NGOs Delhi, best NGOs Delhi 2026, donate to NGO Delhi, verified charities Delhi, background checked NGO Delhi, 80G NGO Delhi"
        canonicalUrl="https://www.thegivingcircle.in/verified-ngos-in-delhi"
        ogTitle="Verified NGOs in Delhi — Trusted Charities 2026 | The Giving Circle"
        ogDescription="Delhi's most trusted NGOs verified for FCRA, 80G and financial transparency. Donate with confidence."
      />
      <ArticleSchema
        title="Verified NGOs in Delhi — Trusted Charities You Can Donate To in 2026"
        description="Find verified NGOs in Delhi with FCRA, 80G and audit trail. 80G tax benefits and real impact tracking."
        image="https://www.thegivingcircle.in/Giving_Circle..-removebg-preview.png"
        datePublished={currentDate}
        dateModified={currentDate}
        category="NGO Directory"
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
              <li className="text-gray-600">Verified NGOs in Delhi</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Verified NGOs in Delhi
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            Delhi has thousands of registered NGOs — but fewer than 20% have independently verified financials. The Giving Circle lists only background-checked organisations with valid FCRA, 80G and published audit reports.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <Shield className="text-green-700" size={16} />
              FCRA Verified
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <CheckCircle className="text-green-700" size={16} />
              80G Certified
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <FileText className="text-green-700" size={16} />
              Audited Financials
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/live-causes" className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
              Donate to a Delhi NGO
            </Link>
            <Link to="/ngos" className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              View Full Directory
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* What Verification Means */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">What "Verified" Really Means</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'FCRA Registration', body: 'Foreign Contribution Regulation Act registration confirms the NGO can legally receive donations from Indian and foreign sources.', icon: '📋' },
              { title: '80G Certification', body: 'Income Tax certification that allows donors to claim deductions. Only NGOs with clean tax compliance receive 80G.', icon: '💰' },
              { title: 'Audited Financials', body: 'Annual audited accounts filed with the Registrar of Societies or Companies are reviewed for irregularities.', icon: '📊' },
              { title: 'Programme Verification', body: 'We verify that stated programmes are actually running through field visits, beneficiary interviews and third-party reports.', icon: '✅' },
              { title: 'Governance Check', body: 'Board composition, conflict-of-interest policies and whistleblower mechanisms are reviewed.', icon: '🏛️' },
              { title: 'Impact Reporting', body: 'Only NGOs that commit to quarterly impact reporting are listed. This keeps them accountable to donors.', icon: '📈' },
            ].map(({ title, body, icon }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-700 text-sm">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured NGOs */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Verified NGOs Operating in Delhi NCR</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "JWP (Joint Women's Program)", cause: 'Education', description: 'Provides after-school tutoring, digital literacy and livelihood skills to underprivileged children in Delhi.', href: '/jwp-cause-details' },
              // { name: 'Khushi Foundation', cause: 'Education & Welfare', description: 'Holistic education and community welfare programmes across Delhi NCR with a focus on girl child education.', href: '/jwp-cause-details' },
              { name: 'AnimalCare India', cause: 'Animal Welfare', description: 'Stray animal rescue, vaccination and care programmes operating across Delhi and surrounding districts.', href: '/animalcare-ngo-detail' },
              { name: 'Partner Your NGO', cause: 'All Causes', description: 'Are you a Delhi-based NGO with FCRA and 80G status? Apply to be listed and reach thousands of verified donors.', href: '/ngo-partner' },
            ].map(({ name, cause, description, href }) => (
              <div key={name} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">{cause}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
                <p className="text-gray-700 text-sm mb-4">{description}</p>
                <Link to={href} className="text-green-700 font-medium text-sm hover:text-green-900">Learn more →</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Causes */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Causes Supported by Delhi NGOs</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { cause: 'Education', desc: 'School enrolment, scholarships, digital literacy' },
              { cause: 'Women Empowerment', desc: 'Skills training, safety, livelihood' },
              { cause: 'Animal Welfare', desc: 'Rescue, vaccination, shelter' },
              { cause: 'Disaster Relief', desc: 'Flood & emergency response' },
              { cause: 'Healthcare', desc: 'Medical camps, nutrition, maternal health' },
              { cause: 'Child Welfare', desc: 'Protection, nutrition, development' },
              { cause: 'Elderly Care', desc: 'Housing, healthcare, dignity programmes' },
              { cause: 'Environment', desc: 'Clean-up drives, tree planting, sustainability' },
            ].map(({ cause, desc }) => (
              <div key={cause} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-1">{cause}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nearby Cities */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Also Explore NGOs in Nearby Cities</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { city: 'Noida', slug: 'best-ngo-in-noida' },
              { city: 'Gurugram', slug: 'best-ngo-in-gurugram' },
              { city: 'Faridabad', slug: 'best-ngo-in-faridabad' },
              { city: 'Delhi (All)', slug: 'best-ngo-in-delhi' },
            ].map(({ city, slug }) => (
              <Link key={city} to={`/ngos/${slug}`} className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-500 transition-all">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Best NGOs in {city}</h3>
                <p className="text-green-700 text-sm">View directory →</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
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

        {/* Related */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Best NGOs in Delhi', href: '/ngos/best-ngo-in-delhi' },
              { label: 'Top NGOs in Delhi 2026', href: '/top-ngos-in-delhi-2026' },
              { label: 'Donate for Child Education', href: '/donate-for-education-india' },
              { label: 'NGOs for Women Empowerment', href: '/ngo-for-women-empowerment' },
              { label: 'CSR Projects India', href: '/csr-projects-in-india' },
            ].map(({ label, href }) => (
              <Link key={href} to={href} className="inline-block bg-white border border-gray-200 hover:bg-green-50 hover:border-green-400 text-gray-700 hover:text-green-800 px-4 py-2 rounded-full text-sm font-medium transition-colors">
                {label}
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
            Every organisation on The Giving Circle is independently verified. Give with confidence — and track your impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/live-causes" className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              View Live Causes
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

export default VerifiedNGOsInDelhi;

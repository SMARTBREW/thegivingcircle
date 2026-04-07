import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../../components/SEO/SEOHead';
import ArticleSchema from '../../components/SEO/ArticleSchema';

const faqs = [
  { q: 'Can we donate to The Giving Circle directly as CSR?', a: 'Yes. The Giving Circle can act as an implementing agency if registered as a CSR-1 entity, or we can facilitate donations directly to our verified NGO partners who are registered implementing organisations.' },
  { q: 'What documentation do we get for CSR compliance?', a: 'We provide: NGO FCRA/80G certificates, MoU, fund utilisation certificates, impact reports, photographic evidence and Form CSR-2 support documentation.' },
  { q: 'Is animal welfare CSR-eligible in India?', a: 'Yes. Schedule VII Clause (iv) covers animal welfare, agroforestry, conservation of natural resources and biodiversity. Our animal welfare causes on The Giving Circle are eligible for CSR funding.' },
  { q: 'Can multiple companies co-fund a single CSR project?', a: 'Yes  -  this is the core of our Giving Circle model. Multiple corporates can co-fund a single programme with clearly defined contribution percentages and joint impact reporting.' },
  { q: 'What is the minimum CSR contribution you work with?', a: 'We typically work with CSR contributions of ₹5 lakh and above for structured partnerships. Smaller amounts can be directed to live causes directly.' },
];

const CSRProjectsInIndia = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="CSR Projects in India | Fund Verified NGOs | The Giving Circle"
        description="Fund high-impact CSR projects in India through verified NGOs. Education, women empowerment, disaster relief and animal welfare projects qualifying under Schedule VII. Full compliance documentation provided."
        keywords="CSR projects India, CSR funding NGOs India, corporate social responsibility India, Schedule VII CSR, CSR donation India, CSR NGO partnership India, CSR compliance India"
        canonicalUrl="https://www.thegivingcircle.in/csr-projects-in-india"
        ogTitle="CSR Projects in India | Fund Verified NGOs | The Giving Circle"
        ogDescription="Fund high-impact CSR projects in India through verified NGOs. Schedule VII compliant with full documentation."
      />
      <ArticleSchema
        title="CSR Projects in India  -  Fund Verified NGOs Through The Giving Circle"
        description="Fund high-impact CSR projects in India through verified NGOs. Education, women empowerment, disaster relief and more."
        image="https://www.thegivingcircle.in/Giving_Circle..-removebg-preview.png"
        datePublished={currentDate}
        dateModified={currentDate}
        category="CSR"
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
              <li className="text-gray-600">CSR Projects in India</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            CSR Projects in India
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            The Giving Circle connects corporates with verified, high-impact NGOs for Schedule VII-compliant CSR projects. Full documentation, impact reporting and compliance support included.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <Shield className="text-green-700" size={16} />
              Schedule VII Compliant
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <CheckCircle className="text-green-700" size={16} />
              Pre-Verified NGO Partners
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <FileText className="text-green-700" size={16} />
              Full MCA-2 Documentation
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/ngo-partner" className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
              Discuss CSR Partnership
            </Link>
            <Link to="/live-causes" className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              View Live Causes
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* CSR Law Overview */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">CSR Mandate in India  -  What You Need to Know</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <p className="text-gray-700 mb-6">Under Section 135 of the Companies Act 2013, companies meeting certain thresholds must spend 2% of average net profits on eligible CSR activities. Non-compliance attracts penalties.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { threshold: '₹500 Cr+', label: 'Net worth triggers CSR mandate' },
              { threshold: '₹1,000 Cr+', label: 'Turnover threshold' },
              { threshold: '₹5 Cr+', label: 'Net profit threshold' },
              { threshold: '2%', label: 'Of average 3-year net profit' },
            ].map(({ threshold, label }) => (
              <div key={label} className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-green-700 mb-2">{threshold}</div>
                <div className="text-gray-700 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Eligible Activities */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Schedule VII Eligible CSR Activities</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Education', desc: 'Promoting education including special education and livelihood skills for children, women and differently abled persons.', icon: '📚', active: true },
              { title: 'Women Empowerment', desc: 'Promoting gender equality, empowerment of women and measures for welfare of women.', icon: '👩', active: true },
              { title: 'Hunger & Poverty', desc: 'Eradicating extreme hunger and poverty, promoting preventive healthcare and sanitation.', icon: '🍽️', active: false },
              { title: 'Animal Welfare', desc: 'Animal welfare, agroforestry, conservation of natural resources and biodiversity.', icon: '🐾', active: true },
              { title: 'Disaster Relief', desc: 'Disaster management including relief, rehabilitation and reconstruction activities.', icon: '🆘', active: true },
              { title: 'Environment', desc: 'Ensuring environmental sustainability, ecological balance, clean water and sanitation.', icon: '🌱', active: false },
            ].map(({ title, desc, icon, active }) => (
              <div key={title} className={`border rounded-xl p-6 hover:shadow-lg transition-shadow ${active ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-white'}`}>
                <div className="text-3xl mb-3">{icon}</div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                  {active && <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-medium">Live Causes</span>}
                </div>
                <p className="text-gray-700 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Partner */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Why Partner With The Giving Circle for CSR?</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: '✓ Pre-Verified NGO Partners', body: 'All our NGO partners have FCRA, 80G, audited financials and programme verifications complete. No compliance risk for your company.' },
              { title: '✓ Schedule VII Compliance', body: 'We ensure your CSR activity clearly falls under the eligible categories with proper documentation for your board and auditors.' },
              { title: '✓ Impact Measurement', body: 'Quarterly impact reports with photos, beneficiary data and outcome metrics  -  exactly what your Annual Report and BRSR need.' },
              { title: '✓ Collective Giving Model', body: 'Pool your CSR with other corporates to fund larger programmes than any single company could run alone.' },
              { title: '✓ Cause Selection Support', body: 'Our team helps you identify the most relevant causes for your sector, geography and stakeholder priorities.' },
              { title: '✓ MCA-2 Compliance Documents', body: 'Complete documentation for Form CSR-1, Form CSR-2 and Board Committee reporting.' },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-700 text-sm">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">How Our CSR Partnership Works</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="space-y-5">
            {[
              { step: 1, title: 'Initial Consultation', body: 'Share your CSR budget, industry, geographic focus and stakeholder priorities. We match you with suitable verified NGO partners.' },
              { step: 2, title: 'Cause Selection & Proposal', body: 'We present 2–3 curated cause options with impact projections, NGO profiles and compliance documentation.' },
              { step: 3, title: 'Legal Framework', body: 'MoU, CSR-1 registration and board documentation prepared to meet all MCA requirements.' },
              { step: 4, title: 'Fund Deployment', body: 'Funds are transferred directly to the implementing NGO with joint oversight. An escrow structure is available for larger amounts.' },
              { step: 5, title: 'Impact Reporting', body: 'Quarterly reports + annual impact assessment for your Annual Report, BRSR disclosure and board committee presentation.' },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1 text-lg">{step}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-700">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">CSR FAQs</h2>
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
              { label: 'Top Verified NGOs India 2026', href: '/top-verified-ngos-india-2026' },
              { label: 'Donate for Child Education', href: '/donate-for-education-india' },
              { label: 'NGOs for Women Empowerment', href: '/ngo-for-women-empowerment' },
              { label: 'Verified NGOs in Delhi', href: '/verified-ngos-in-delhi' },
              { label: 'NGO Directory', href: '/ngos' },
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
            Let's Make Your CSR Count
          </h2>
          <p className="text-green-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            We help companies spend their CSR budget on causes that create real, measurable, documented impact. Talk to our team today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/ngo-partner" className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              Talk to Our Team
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

export default CSRProjectsInIndia;

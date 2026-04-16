import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../../components/SEO/SEOHead';
import ArticleSchema from '../../components/SEO/ArticleSchema';

const faqs = [
  { q: 'How do women empowerment donations qualify for tax benefits?', a: 'Donations to registered NGOs with 80G certification qualify for Section 80G tax deductions. The Giving Circle ensures all listed NGOs have valid 80G status, and receipts are generated automatically.' },
  { q: 'What is the difference between women empowerment and women\'s rights NGOs?', a: 'Women empowerment NGOs focus on building capabilities (education, skills, economic independence) while women\'s rights NGOs focus on legal and advocacy work. Many organisations do both. The Giving Circle lists NGOs across the full spectrum.' },
  { q: 'Can I designate my donation for a specific programme like menstrual health?', a: 'Yes. When donating through a specific cause page, your funds are directed to that programme. You can also contact us for custom giving arrangements.' },
  { q: 'How does corporate CSR for women empowerment work?', a: 'Women empowerment, gender equality and education for girls are all eligible under Schedule VII of the Companies Act. The Giving Circle can structure your CSR contribution with full documentation for compliance.' },
];

const NGOForWomenEmpowerment = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="NGOs for Women Empowerment in India | Donate & Support | The Giving Circle"
        description="Support women empowerment in India by donating to verified NGOs focused on women's rights, education, livelihood and safety. Get 80G tax benefits and track real impact."
        keywords="NGOs for women empowerment India, ngo for woman, role of ngo in women empowerment, ngos for women empowerment, donate for women empowerment, women empowerment NGO, female education NGO, educational empowerment of women, conclusion of women empowerment, empowering women, education is important for women, empowering youth"
        canonicalUrl="https://www.thegivingcircle.in/ngo-for-women-empowerment"
        ogTitle="NGOs for Women Empowerment in India | The Giving Circle"
        ogDescription="Donate to verified NGOs enabling women's rights, livelihood and safety in India."
      />
      <ArticleSchema
        title="NGOs for Women Empowerment in India  -  Donate to Verified Organisations"
        description="Support women empowerment in India by donating to verified NGOs. 80G tax benefits and real impact tracking."
        image="https://www.thegivingcircle.in/Giving_Circle..-removebg-preview.png"
        datePublished={currentDate}
        dateModified={currentDate}
        category="Women Empowerment"
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
              <li className="text-gray-600">NGOs for Women Empowerment</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            NGOs for Women Empowerment in India
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            Millions of women across India lack access to education, economic opportunities and basic safety. Donating to verified women empowerment NGOs creates lasting change  -  and qualifies for 80G tax deductions.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <Shield className="text-green-700" size={16} />
              Tax Benefits · 80G
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <CheckCircle className="text-green-700" size={16} />
              Verified NGOs Only
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <TrendingUp className="text-green-700" size={16} />
              Real Impact Tracking
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/live-causes" className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
              Donate Now
            </Link>
            <Link to="/ngos" className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Browse All NGOs
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Impact Stats */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">The Reality for Women in India</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: '60%', label: 'Women not in formal workforce' },
              { stat: '48M', label: 'Girls out of school (India)' },
              { stat: '1 in 3', label: 'Women face gender-based violence' },
              { stat: '80G', label: 'Tax deduction on your donation' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-green-700 mb-2">{stat}</div>
                <div className="text-gray-700 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Areas of Work */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">How NGOs Empower Women in India</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Education & Literacy', body: 'Scholarships, adult literacy programmes and digital skills training helping women become economically independent.', icon: '📚' },
              { title: 'Livelihood & Skill Training', body: 'Vocational training in tailoring, handicrafts, entrepreneurship and computer skills to create sustainable income.', icon: '💼' },
              { title: 'Menstrual Health', body: 'Distribution of sanitary products and hygiene education ending period poverty in rural and urban India.', icon: '🩺' },
              { title: 'Legal Aid & Safety', body: 'Free legal assistance, helplines and safe shelter for women facing domestic violence or discrimination.', icon: '⚖️' },
              { title: 'Health & Nutrition', body: 'Maternal health support, nutrition programmes and healthcare access for women and girls.', icon: '🏥' },
              { title: 'Leadership & Advocacy', body: 'Training women in local governance, self-help groups and community leadership roles.', icon: '🎤' },
            ].map(({ title, body, icon }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-700 text-sm">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Cause */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Featured Live Causes</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <p className="text-gray-600 mb-6">While The Giving Circle is actively onboarding dedicated women empowerment NGOs, here are live causes where women form a key beneficiary group.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Khushi (JWP)  -  Women & Girls Education</h3>
              <p className="text-gray-700 text-sm mb-3">JWP's programmes include education support for girls from low-income families, helping them stay in school and build futures.</p>
              <Link to="/jwp-cause-details" className="text-green-700 font-medium text-sm hover:text-green-900">View Cause →</Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Partner Your NGO With Us</h3>
              <p className="text-gray-700 text-sm mb-3">Are you a women empowerment NGO with FCRA/80G registration? Apply to be listed on The Giving Circle and reach thousands of donors.</p>
              <Link to="/ngo-partner" className="text-green-700 font-medium text-sm hover:text-green-900">Apply as NGO Partner →</Link>
            </div>
          </div>
        </section>

        {/* Why Donate */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Why Donate Through The Giving Circle?</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '✓ Verified NGOs', body: 'Every partner NGO is independently verified for FCRA, 80G and financial transparency.' },
              { title: '✓ 80G Tax Benefits', body: 'Claim tax deductions on donations. Auto-generated receipts sent by email.' },
              { title: '✓ Collective Giving', body: 'Your donation pools with others to fund larger women empowerment programmes.' },
              { title: '✓ Impact Tracking', body: 'Regular updates on programme outcomes  -  number of women trained, employed or educated.' },
              { title: '✓ Corporate CSR', body: 'Women empowerment qualifies under Schedule VII CSR. We help structure your corporate giving.' },
              { title: '✓ 100% Transparency', body: 'Full fund utilisation reports published publicly for every active cause.' },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-700 text-sm">{body}</p>
              </div>
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
              { label: 'Donate for Child Education', href: '/donate-for-education-india' },
              { label: 'Verified NGOs in Delhi', href: '/verified-ngos-in-delhi' },
              { label: 'CSR Projects in India', href: '/csr-projects-in-india' },
              { label: 'Top Verified NGOs India 2026', href: '/top-verified-ngos-india-2026' },
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
            Empower a Woman. Transform a Community.
          </h2>
          <p className="text-green-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Studies show every rupee invested in women generates 7x return in community wellbeing. Join The Giving Circle and be part of that change.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/live-causes" className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              Donate Now
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

export default NGOForWomenEmpowerment;

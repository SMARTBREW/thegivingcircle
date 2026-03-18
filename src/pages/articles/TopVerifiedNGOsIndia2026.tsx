import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../../components/SEO/SEOHead';
import ArticleSchema from '../../components/SEO/ArticleSchema';

const NGO_LIST = [
  { rank: 1, name: 'JWP – Jeevan Wahi Phool', cause: 'Child Education', location: 'Delhi NCR', description: 'Provides holistic education support including tutoring, digital literacy and life skills for underprivileged children.', href: '/jwp-cause-details', score: 98 },
  { rank: 2, name: 'Khushi Foundation', cause: 'Child Welfare & Education', location: 'Delhi NCR', description: 'Education and community welfare with a strong focus on girl child education and safe childhood.', href: '/jwp-cause-details', score: 96 },
  { rank: 3, name: 'AnimalCare India', cause: 'Animal Welfare', location: 'Delhi, Pan-India', description: 'Stray animal rescue, vaccination and care programmes. Runs the Flood Animal Rescue programme during monsoons.', href: '/animalcare-ngo-detail', score: 95 },
  { rank: 4, name: 'Bowls of Hope', cause: 'Animal Welfare', location: 'Delhi NCR', description: 'Feeds thousands of stray animals weekly. Simple, measurable and verifiably impactful.', href: '/bowls-of-hope-cause-details', score: 94 },
  { rank: 5, name: 'Pawsitive Protectors', cause: 'Animal Welfare', location: 'Delhi NCR', description: 'Comprehensive stray animal care including spay/neuter, vaccination and rescue operations.', href: '/pawsitive-protectors-cause-details', score: 93 },
];

const faqs = [
  { q: 'How do you verify NGOs before listing them?', a: 'Every NGO undergoes a 6-step check: FCRA registration, 80G certification, audited financials review, field programme verification, governance assessment, and impact reporting commitment.' },
  { q: 'Are donations to these NGOs tax deductible?', a: 'Yes. All NGOs listed on The Giving Circle have valid 80G certification. You receive an automatic tax receipt within 48 hours of donation.' },
  { q: 'Can I see how my donation was used?', a: 'Yes. All NGOs on our platform publish quarterly fund utilisation reports. You can see exactly which programmes were funded, how many beneficiaries were reached and what outcomes were achieved.' },
];

const TopVerifiedNGOsIndia2026 = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Top Verified NGOs in India 2026 | With Tax Benefits & Impact Scores | The Giving Circle"
        description="Discover India's top verified NGOs in 2026 ranked by transparency, impact and trust. With 80G tax benefits, published audit reports and real outcome data. Donate safely."
        keywords="top verified NGOs India 2026, best charities India 2026, trusted NGOs India, donate to NGO India, most transparent NGOs India, highest rated charities India"
        canonicalUrl="https://www.thegivingcircle.in/top-verified-ngos-india-2026"
        ogTitle="Top Verified NGOs in India 2026 | The Giving Circle"
        ogDescription="India's top-ranked verified NGOs by transparency, impact and trust. 80G tax benefits available."
      />
      <ArticleSchema
        title="Top Verified NGOs in India 2026 — With Tax Benefits & Impact Scores"
        description="Discover India's top verified NGOs in 2026 ranked by transparency, impact and trust."
        image="https://www.thegivingcircle.in/Giving_Circle..-removebg-preview.png"
        datePublished={currentDate}
        dateModified={currentDate}
        category="NGO Rankings"
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
              <li className="text-gray-600">Top Verified NGOs India 2026</li>
            </ol>
          </nav>

          <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">Updated {currentDate}</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Top Verified NGOs in India You Can Donate to in 2026
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            With Tax Benefits, Transparency Scores & Real Impact Data
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <Shield className="text-green-700" size={16} />
              FCRA & 80G Verified
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <CheckCircle className="text-green-700" size={16} />
              Audited Financials
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>By The Giving Circle Research Team</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Intro */}
        <section className="mb-12">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            India has over 3.3 million registered NGOs — but fewer than 1% have independently verified financials, active FCRA registration and published impact data. Finding the right charity to donate to can feel overwhelming and risky.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            This guide cuts through the noise. We've ranked the most transparent, impactful and donor-trusted NGOs operating in India in 2026 — all listed on The Giving Circle's verified platform.
          </p>
          <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
            <p className="text-green-900 font-medium">Our Verification Criteria: FCRA status · 80G certification · Audited financials · Programme verification · Quarterly impact reporting · Donor satisfaction score</p>
          </div>
        </section>

        {/* Rankings */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Top Verified NGOs on The Giving Circle (2026)</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="space-y-6">
            {NGO_LIST.map(({ rank, name, cause, location, description, href, score }) => (
              <div key={rank} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    #{rank}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">{cause}</span>
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">{location}</span>
                    </div>
                    <p className="text-gray-700 mb-3">{description}</p>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium text-gray-700">Transparency Score:</div>
                        <div className="flex items-center">
                          <div className="w-24 h-2 bg-gray-200 rounded-full mr-2">
                            <div className="h-2 bg-green-600 rounded-full" style={{ width: `${score}%` }}></div>
                          </div>
                          <span className="text-sm font-bold text-green-700">{score}/100</span>
                        </div>
                      </div>
                      <Link to={href} className="text-green-700 font-medium text-sm hover:text-green-900">View Cause →</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We Rank */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">How We Rank & Verify NGOs</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="space-y-4">
            {[
              { criterion: 'FCRA Registration', weight: '20%', desc: 'Valid Foreign Contribution Regulation Act registration from MHA.' },
              { criterion: '80G Certification', weight: '15%', desc: 'Current Income Tax certification for donor tax deductions.' },
              { criterion: 'Audited Financials', weight: '25%', desc: 'Annual audited accounts with unqualified opinion by CA.' },
              { criterion: 'Programme Verification', weight: '20%', desc: 'Field visits, beneficiary interviews and third-party programme checks.' },
              { criterion: 'Impact Reporting', weight: '10%', desc: 'Quarterly reports published with quantitative outcome data.' },
              { criterion: 'Governance', weight: '10%', desc: 'Board composition, conflict-of-interest policy, whistleblower mechanism.' },
            ].map(({ criterion, weight, desc }) => (
              <div key={criterion} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                <span className="flex-shrink-0 bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded mt-0.5">{weight}</span>
                <div>
                  <span className="font-semibold text-gray-900">{criterion}: </span>
                  <span className="text-gray-700 text-sm">{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Tips for Safe Donating in India</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="space-y-3">
            {[
              'Always verify FCRA status on the Ministry of Home Affairs portal (fcraonline.nic.in) before donating.',
              'Check 80G status on the Income Tax Department website to confirm tax deductibility.',
              'Ask for annual reports — any legitimate NGO will share them willingly.',
              'Prefer NGOs that show outcome data (lives changed) not just output data (money spent).',
              'Be cautious of NGOs that spend more than 30% on administration and fundraising costs.',
              'Donate through platforms like The Giving Circle that pre-verify all partners.',
            ].map((tip, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                <span className="flex-shrink-0 w-6 h-6 bg-green-700 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">{index + 1}</span>
                <p className="text-gray-700">{tip}</p>
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

        {/* Continue Reading */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Verified NGOs in Delhi', href: '/verified-ngos-in-delhi', desc: 'Background-checked NGOs in Delhi NCR.' },
              { title: 'What is a Giving Circle?', href: '/what-is-a-giving-circle', desc: 'How collective giving amplifies your impact.' },
              { title: 'CSR Projects in India', href: '/csr-projects-in-india', desc: 'Schedule VII compliant corporate giving.' },
              { title: 'Donate for Child Education', href: '/donate-for-education-india', desc: 'Fund a child\'s education from ₹500.' },
            ].map(({ title, href, desc }) => (
              <Link key={href} to={href} className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-green-400 transition-all">
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </Link>
            ))}
          </div>
        </section>

      </div>

      {/* Full-width CTA */}
      <section className="bg-green-700 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Donate to a Verified NGO?
          </h2>
          <p className="text-green-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Every NGO on The Giving Circle is pre-verified. Give safely with 80G tax benefits and full impact tracking.
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

export default TopVerifiedNGOsIndia2026;

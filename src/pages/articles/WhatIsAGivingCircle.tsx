import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../../components/SEO/SEOHead';
import ArticleSchema from '../../components/SEO/ArticleSchema';

const faqs = [
  { q: 'Is The Giving Circle the same as a giving circle?', a: 'Yes — The Giving Circle is a platform built on the giving circle model. It enables groups of people to pool charitable donations and give collectively to verified causes.' },
  { q: 'How much do I need to donate to join?', a: 'There is no minimum. Most Cause Champions start with ₹500–₹1,000 per month. The power comes from pooling, not individual amount sizes.' },
  { q: 'Are giving circle donations tax deductible?', a: 'Yes. All individual donations through The Giving Circle to 80G-certified NGOs qualify for Section 80G tax deduction. Receipts are generated automatically.' },
  { q: 'Can I choose which causes my money goes to?', a: 'You can express preferences and choose from active causes. The collective decision-making process means final allocation considers all members\' preferences.' },
  { q: 'What if I want to stop contributing?', a: 'You can pause or cancel your contribution any time from your dashboard. There is no lock-in or penalty.' },
];

const WhatIsAGivingCircle = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="What is a Giving Circle? A Complete Guide to Collective Giving in India"
        description="Learn what a giving circle is, how it works in India, why collective giving is more powerful than individual donations, and how to join one. Complete guide with examples and tips."
        keywords="what is a giving circle, giving circle India, collective giving India, community giving India, giving circle meaning, how does a giving circle work, join a giving circle India"
        canonicalUrl="https://www.thegivingcircle.in/what-is-a-giving-circle"
        ogTitle="What is a Giving Circle? Complete Guide | The Giving Circle"
        ogDescription="Learn how giving circles work, why collective giving creates bigger impact, and how to join one in India."
      />
      <ArticleSchema
        title="What is a Giving Circle? A Complete Guide to Collective Giving in India"
        description="Learn what a giving circle is, how it works in India and why collective giving creates bigger impact than individual donations."
        image="https://www.thegivingcircle.in/Giving_Circle..-removebg-preview.png"
        datePublished={currentDate}
        dateModified={currentDate}
        category="Giving Guide"
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
              <li className="text-gray-600">What is a Giving Circle?</li>
            </ol>
          </nav>

          <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">Giving Guide</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            What is a Giving Circle?
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            A Complete Guide to Collective Giving in India
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>By The Giving Circle Team</span>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TOC */}
        <div className="bg-white rounded-xl p-6 mb-12 border border-gray-100 shadow-sm">
          <h2 className="font-bold text-gray-900 mb-3">In This Article</h2>
          <ol className="space-y-1 text-sm">
            {[
              'What is a giving circle?',
              'How does a giving circle work?',
              'Why collective giving is more powerful',
              'The Giving Circle model in India',
              'How to join a giving circle',
              'Frequently asked questions',
            ].map((item, i) => (
              <li key={item}>
                <a href={`#section-${i + 1}`} className="text-green-700 hover:text-green-900">{i + 1}. {item}</a>
              </li>
            ))}
          </ol>
        </div>

        {/* Section 1 */}
        <section id="section-1" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">What is a Giving Circle?</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            A <strong>giving circle</strong> is a group of individuals who pool their financial resources and decide together how to donate to charitable causes. Rather than each person donating small amounts independently, members of a giving circle combine their contributions to make larger, more impactful grants to verified NGOs.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Think of it like this: if 50 people each donate ₹1,000, they create a ₹50,000 grant that can fund a child's entire year of education — something no single small donation could achieve.
          </p>
          <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
            <p className="text-green-900"><strong>In short:</strong> A giving circle turns small donations into collective impact.</p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="section-2" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">How Does a Giving Circle Work?</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">The process is simple, democratic and transparent:</p>
          <div className="space-y-4">
            {[
              { step: 1, title: 'Members Join', body: 'Individuals or families join the giving circle, committing a recurring monthly or annual contribution (as low as ₹500/month).' },
              { step: 2, title: 'Funds Pool', body: 'All contributions are pooled into a collective fund managed by the platform with full transparency.' },
              { step: 3, title: 'Causes are Vetted', body: 'The platform presents verified, vetted NGO causes to the group — covering education, animal welfare, disaster relief and more.' },
              { step: 4, title: 'Collective Decision', body: 'Members can vote on or influence which causes receive funding that cycle, creating genuine community ownership.' },
              { step: 5, title: 'Impact is Tracked', body: 'After funds are deployed, members receive quarterly impact reports showing outcomes — children educated, animals rescued, families fed.' },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex items-start gap-4 bg-white rounded-lg p-4 border border-gray-100">
                <div className="flex-shrink-0 w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center font-bold">{step}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-700">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section id="section-3" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Why Collective Giving is More Powerful</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: 'Scale', body: '50 × ₹500 = ₹25,000. Enough to sponsor an entire semester for 5 children.' },
              { title: 'Lower Overhead', body: 'Pooled giving reduces per-donation processing costs, meaning more of your money reaches beneficiaries.' },
              { title: 'Better Due Diligence', body: 'The platform performs thorough NGO verification that individuals rarely do before donating.' },
              { title: 'Sustained Impact', body: 'Recurring collective contributions fund multi-year programmes rather than one-off donations.' },
              { title: 'Community & Learning', body: 'Members learn about causes, discuss impact and build a shared purpose — making giving meaningful beyond the money.' },
              { title: '80G Benefits', body: 'Each individual member still gets their personal 80G receipt for tax deduction on their contribution.' },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-700 text-sm">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section id="section-4" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">The Giving Circle Model in India</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The Giving Circle was built specifically for the Indian philanthropic context. India's charitable ecosystem faces unique challenges: donor trust deficit, opaque NGO operations and fragmented giving. Our platform solves all three.
          </p>
          <div className="space-y-3">
            {[
              { challenge: 'Donor Trust', solution: 'Every NGO is independently verified before listing. Financial audits, FCRA, 80G all checked.' },
              { challenge: 'Transparency', solution: 'Full quarterly fund utilisation reports published publicly. You see exactly where every rupee went.' },
              { challenge: 'Scale', solution: 'Collective giving model pools donations to fund programmes individual donations couldn\'t sustain.' },
              { challenge: 'Tax Benefits', solution: 'All donors receive 80G certificates. Our platform handles the compliance automatically.' },
            ].map(({ challenge, solution }) => (
              <div key={challenge} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                <span className="flex-shrink-0 bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded mt-0.5">Challenge</span>
                <div>
                  <span className="font-semibold text-gray-900">{challenge}: </span>
                  <span className="text-gray-700">{solution}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section id="section-5" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">How to Join a Giving Circle in India</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">Joining The Giving Circle takes less than 5 minutes:</p>
          <div className="space-y-4">
            {[
              { step: 1, action: 'Sign up as a Cause Champion', desc: 'Create your profile on The Giving Circle and choose your giving amount.' },
              { step: 2, action: 'Choose your cause areas', desc: 'Select which causes matter most to you — education, animals, disaster relief or women empowerment.' },
              { step: 3, action: 'Set up a recurring contribution', desc: 'Any amount from ₹500/month. Pause or cancel any time.' },
              { step: 4, action: 'Track your collective impact', desc: 'Receive quarterly reports showing the collective outcomes your giving circle achieved.' },
            ].map(({ step, action, desc }) => (
              <div key={step} className="flex items-start gap-4 bg-white rounded-lg p-4 border border-gray-100">
                <div className="flex-shrink-0 w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-sm">{step}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{action}</h3>
                  <p className="text-gray-700 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/onboarding" className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
              Join The Giving Circle
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section id="section-6" className="mb-12">
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
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Related Reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Top Verified NGOs India 2026', href: '/top-verified-ngos-india-2026' },
              { title: 'Donate for Child Education', href: '/donate-for-education-india' },
              { title: 'NGO Directory India', href: '/ngos' },
              { title: 'Become a Cause Champion', href: '/onboarding' },
            ].map(({ title, href }) => (
              <Link key={href} to={href} className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-green-400 transition-all">
                <h3 className="font-semibold text-gray-900">{title} →</h3>
              </Link>
            ))}
          </div>
        </section>

      </div>

      {/* Full-width CTA */}
      <section className="bg-green-700 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Be Part of a Giving Circle Today
          </h2>
          <p className="text-green-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of Indians giving collectively. Your ₹500 + everyone else's = real change.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/onboarding" className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              Join The Giving Circle
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

export default WhatIsAGivingCircle;

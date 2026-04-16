import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../../components/SEO/SEOHead';
import ArticleSchema from '../../components/SEO/ArticleSchema';

const faqs = [
  { q: 'Do I need to know Hindi to volunteer in India?', a: 'Not necessarily. Many urban NGOs work in English or Hindi. For rural or community work, basic Hindi helps but isn\'t mandatory for most roles.' },
  { q: 'Can students volunteer with NGOs in India?', a: 'Absolutely. Many NGOs actively welcome college students for tutoring, awareness campaigns and event support. It also counts toward internship credits at many universities.' },
  { q: 'How many hours per week should I commit?', a: 'Most NGOs ask for a minimum of 2–4 hours per week for a minimum of 3 months. This gives you enough time to build rapport and create meaningful impact.' },
  { q: 'Will I get a certificate for volunteering?', a: 'Yes  -  most NGOs provide experience certificates after completing a defined volunteering period. The Giving Circle also issues Cause Champion recognition badges.' },
];

const HowToVolunteerIndia = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="How to Volunteer in India 2026 | Top NGOs & Opportunities | The Giving Circle"
        description="A practical guide to volunteering with NGOs in India in 2026. How to find opportunities, what to expect, corporate volunteering programmes and how to start today. Includes verified NGO list."
        keywords="how to volunteer, how to volunteer for ngo, volunteer NGO, volunteering opportunities 2026, NGO volunteer, corporate volunteering, volunteer near me, how to start volunteering, how to do volunteer work, act of kindness, helping the poor, empowering youth"
        canonicalUrl="https://www.thegivingcircle.in/how-to-volunteer-india"
        ogTitle="How to Volunteer in India 2026 | The Giving Circle"
        ogDescription="Practical guide to volunteering with NGOs in India. Find opportunities, understand what to expect and start today."
      />
      <ArticleSchema
        title="How to Volunteer in India 2026  -  Top NGOs & Opportunities"
        description="A practical guide to volunteering with NGOs in India in 2026. How to find opportunities, what to expect and how to start today."
        image="https://www.thegivingcircle.in/Giving_Circle..-removebg-preview.png"
        datePublished={currentDate}
        dateModified={currentDate}
        category="Volunteering"
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
              <li className="text-gray-600">How to Volunteer in India</li>
            </ol>
          </nav>

          <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">Volunteering Guide · India 2026</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            How to Volunteer in India
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            Top NGOs & Opportunities You Can Join in 2026
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>By The Giving Circle Team</span><span>•</span><span>7 min read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* TOC */}
        <div className="bg-white rounded-xl p-6 mb-12 border border-gray-100 shadow-sm">
          <h2 className="font-bold text-gray-900 mb-3">In This Guide</h2>
          <ol className="space-y-1 text-sm">
            {[
              'Why volunteer in India?',
              'Types of volunteering opportunities',
              'How to find the right NGO',
              'What to expect as a volunteer',
              'Corporate volunteering programmes',
              'Remote volunteering options',
              'How to get started today',
            ].map((item, i) => (
              <li key={item} className="text-green-700">{i + 1}. {item}</li>
            ))}
          </ol>
        </div>

        {/* Why Volunteer */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Why Volunteer in India?</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            India faces enormous social challenges child illiteracy, animal welfare crises, gender inequality and recurring disaster emergencies. NGOs doing frontline work are often short-staffed and deeply underfunded. Skilled volunteers can multiply their impact many times over.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 my-6">
            {[
              { stat: '1 hour', label: 'of tutoring can cover a week\'s lesson for 5 children' },
              { stat: '1 day', label: 'of rescue work can save 20+ animals during a flood' },
              { stat: '1 skill', label: 'shared with an NGO team can improve 1,000 donors\' experience' },
            ].map(({ stat, label }) => (
              <div key={stat} className="bg-white border border-green-100 rounded-xl p-5 text-center shadow-sm">
                <div className="text-2xl font-bold text-green-700 mb-2">{stat}</div>
                <div className="text-gray-700 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Types */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Types of Volunteering Opportunities in India</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="space-y-4">
            {[
              { type: 'Education & Teaching', examples: 'Tutoring children, digital literacy training, adult literacy classes, career counselling.' },
              { type: 'Animal Welfare', examples: 'Stray animal rescue, vaccination drives, feeding programmes, shelter management.' },
              { type: 'Disaster Relief', examples: 'Flood rescue assistance, relief kit distribution, rehabilitation support.' },
              { type: 'Women Empowerment', examples: 'Skills training facilitation, legal aid awareness, self-help group support.' },
              { type: 'Healthcare', examples: 'Medical camp assistance, health awareness drives, nutrition counselling.' },
              { type: 'Skills-Based (Remote)', examples: 'Accounting, IT support, graphic design, content writing, fundraising strategy.' },
            ].map(({ type, examples }) => (
              <div key={type} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                <span className="flex-shrink-0 text-green-700 font-bold mt-1">▸</span>
                <div>
                  <span className="font-semibold text-gray-900">{type}: </span>
                  <span className="text-gray-700 text-sm">{examples}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Find */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">How to Find the Right NGO to Volunteer With</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="space-y-4">
            {[
              { step: 1, title: 'Define your cause', body: 'Pick a cause area you genuinely care about. Volunteering driven by passion produces far better outcomes than obligation.' },
              { step: 2, title: 'Check NGO credibility', body: 'Verify FCRA registration, 80G status and look for published annual reports. Legitimate NGOs are transparent about their work and finances.' },
              { step: 3, title: 'Assess volunteer structure', body: 'Does the NGO have a formal volunteer onboarding process? Structured programmes are more rewarding and impactful.' },
              { step: 4, title: 'Match availability', body: 'Be honest about your time commitment. Weekly regularity matters more than an intense one-off session.' },
              { step: 5, title: 'Ask about impact measurement', body: 'How does the NGO track and communicate volunteer impact? This will sustain your motivation over time.' },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex items-start gap-4 bg-white rounded-lg p-4 border border-gray-100">
                <div className="flex-shrink-0 w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-sm">{step}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-700 text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Corporate Volunteering */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Corporate Volunteering Programmes in India</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <p className="text-gray-700 mb-6">
            Many Indian companies are building structured corporate volunteering programmes both for employee engagement and CSR compliance. The Giving Circle works with corporate teams to design and execute volunteering days.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { title: 'Teaching Days', body: 'Send a team of 10–50 employees to spend a day teaching at a partner NGO school.' },
              { title: 'Animal Welfare Drives', body: 'Organise a team feeding drive, rescue day or vaccination camp with AnimalCare India.' },
              { title: 'Skills Clinics', body: 'Run a one-day skills workshop for NGO staff  -  HR, finance, marketing or IT.' },
              { title: 'Fundraising Events', body: 'Organise an internal fundraiser with your company, amplified by The Giving Circle platform.' },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-700 text-sm">{body}</p>
              </div>
            ))}
          </div>
          <Link to="/ngo-partner" className="inline-block bg-green-700 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-green-800 transition-colors text-sm">
            Discuss Corporate Volunteering →
          </Link>
        </section>

        {/* Get Started */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">How to Get Started Today</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="space-y-3">
            {[
              { action: 'Register on The Giving Circle', desc: 'Create your Cause Champion profile in under 5 minutes.', href: '/onboarding' },
              { action: 'Explore verified NGO partners', desc: 'Browse our partner NGOs and find the cause that resonates.', href: '/ngos' },
              { action: 'Browse volunteering opportunities in Delhi', desc: 'Specific volunteer roles available at our Delhi NGO partners.', href: '/volunteer-opportunities-delhi' },
              { action: 'Explore live causes to donate while you wait', desc: 'Start giving while you prepare your volunteering journey.', href: '/live-causes' },
            ].map(({ action, desc, href }) => (
              <Link key={href} to={href} className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-green-400 transition-all">
                <span className="flex-shrink-0 text-green-700 font-bold mt-1">→</span>
                <div>
                  <div className="font-semibold text-gray-900">{action}</div>
                  <div className="text-gray-600 text-sm">{desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Volunteering FAQs</h2>
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
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Volunteering Opportunities in Delhi', href: '/volunteer-opportunities-delhi' },
              { label: 'Top NGOs in Delhi 2026', href: '/top-ngos-in-delhi-2026' },
              { label: 'What is a Giving Circle?', href: '/what-is-a-giving-circle' },
              { label: 'NGO Directory India', href: '/ngos' },
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
            Start Your Volunteering Journey Today
          </h2>
          <p className="text-green-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Register as a Cause Champion and we'll match you with the right NGO for your skills and availability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/onboarding" className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              Become a Cause Champion
            </Link>
            <Link to="/volunteer-opportunities-delhi" className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-lg transition-all hover:-translate-y-1">
              Delhi Opportunities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToVolunteerIndia;

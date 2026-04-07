import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../../components/SEO/SEOHead';
import ArticleSchema from '../../components/SEO/ArticleSchema';

const faqs = [
  { q: 'Do I need prior experience to volunteer with an NGO in Delhi?', a: 'No. Most NGOs welcome first-time volunteers and provide training. Enthusiasm and consistency matter more than prior experience.' },
  { q: 'Can corporate employees volunteer as a team?', a: 'Yes most NGO partners welcome corporate volunteering groups and can structure team volunteering days. This also counts toward employee engagement and CSR programmes.' },
  { q: 'Is weekend volunteering available?', a: 'Yes. Most teaching and feeding drive opportunities are available on Saturdays and Sundays for working professionals.' },
  { q: 'Can I volunteer remotely?', a: 'Yes. Skills-based volunteering (design, accounting, IT, social media) can be done entirely remotely. Several NGOs also have remote education support roles.' },
];

const VolunteerOpportunitiesDelhi = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Volunteering Opportunities in Delhi 2026 | NGOs You Can Join | The Giving Circle"
        description="Find real volunteering opportunities in Delhi with verified NGOs. Teach children, rescue animals, support disaster relief or help with community programmes. Join an NGO in Delhi today."
        keywords="volunteering opportunities Delhi, volunteer Delhi NGO, how to volunteer in Delhi, NGO volunteer Delhi, volunteer near me Delhi, teach underprivileged children Delhi, animal welfare volunteer Delhi"
        canonicalUrl="https://www.thegivingcircle.in/volunteer-opportunities-delhi"
        ogTitle="Volunteering Opportunities in Delhi 2026 | The Giving Circle"
        ogDescription="Find verified NGOs in Delhi looking for volunteers. Teach, rescue, support and make real impact."
      />
      <ArticleSchema
        title="Volunteering Opportunities in Delhi 2026  -  NGOs You Can Join to Make Real Impact"
        description="Find real volunteering opportunities in Delhi with verified NGOs. Teach children, rescue animals, or support community programmes."
        image="https://www.thegivingcircle.in/Giving_Circle..-removebg-preview.png"
        datePublished={currentDate}
        dateModified={currentDate}
        category="Volunteering"
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
              <li className="text-gray-600">Volunteering Opportunities in Delhi</li>
            </ol>
          </nav>

          <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">Volunteering · Delhi NCR</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Volunteering Opportunities in Delhi
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            NGOs You Can Join to Make Real Impact in 2026
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>By The Giving Circle Team</span><span>•</span><span>5 min read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Intro */}
        <section className="mb-12">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Delhi has thousands of NGOs but finding genuine, well-organised volunteering opportunities can be difficult. Many organisations lack structured volunteer programmes. This guide lists verified NGOs in Delhi that actively welcome and train volunteers.
          </p>
          <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
            <p className="text-green-900 font-medium">All listed organisations are verified partners of The Giving Circle with structured volunteer onboarding.</p>
          </div>
        </section>

        {/* Volunteer Types */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Types of Volunteering Available in Delhi</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { type: 'Teaching & Tutoring', desc: 'Teach underprivileged children English, Maths or digital skills. Flexible weekend slots available.', commitment: '2–4 hrs/week', icon: '✏️' },
              { type: 'Animal Rescue & Care', desc: 'Assist with stray animal rescues, feeding drives and vaccination camps across Delhi.', commitment: '4 hrs/week', icon: '🐾' },
              { type: 'Fundraising & Awareness', desc: 'Help NGOs run donation campaigns, social media drives and donor engagement events.', commitment: 'Flexible', icon: '📢' },
              { type: 'Skills-Based Volunteering', desc: 'Offer professional skills accounting, legal, IT, design or marketing to help NGOs operate better.', commitment: 'Project-based', icon: '💼' },
              { type: 'Community Outreach', desc: 'Door-to-door awareness drives about education, health and sanitation in low-income neighbourhoods.', commitment: '1 day/month', icon: '🏘️' },
              { type: 'Event Support', desc: 'Help organise fundraising events, education camps, vaccination drives and cultural programmes.', commitment: 'Event-based', icon: '🎪' },
            ].map(({ type, desc, commitment, icon }) => (
              <div key={type} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{type}</h3>
                <p className="text-gray-700 text-sm mb-3">{desc}</p>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-medium">Time: {commitment}</span>
              </div>
            ))}
          </div>
        </section>

        {/* NGO Partners */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">NGOs in Delhi Looking for Volunteers</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="space-y-5">
            {[
              { name: "JWP - Joint Women's Program", roles: ['Weekend tutors for children (Classes 1–8)', 'Digital literacy trainers', 'Event coordinators'], location: 'Okhla, South Delhi', href: '/jwp-cause-details' },
              // { name: 'Khushi Foundation', roles: ['After-school teachers', 'Community health volunteers', 'Fundraising support'], location: 'Multiple locations, Delhi NCR', href: '/jwp-cause-details' },
              { name: 'AnimalCare India', roles: ['Animal rescue assistants', 'Vaccination camp helpers', 'Feeding drive coordinators'], location: 'Pan Delhi NCR', href: '/animalcare-ngo-detail' },
              { name: 'Bowls of Hope', roles: ['Morning feeding drive volunteers', 'Social media volunteers', 'Donation drive organisers'], location: 'Delhi NCR', href: '/bowls-of-hope-cause-details' },
            ].map(({ name, roles, location, href }) => (
              <div key={name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">📍 {location}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 mb-3">
                  {roles.map((role) => (
                    <li key={role} className="text-gray-700 text-sm">{role}</li>
                  ))}
                </ul>
                <Link to={href} className="text-green-700 font-medium text-sm hover:text-green-900">Learn more →</Link>
              </div>
            ))}
          </div>
        </section>

        {/* How to Apply */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">How to Apply as a Volunteer</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="space-y-4">
            {[
              { step: 1, action: 'Explore the NGO profiles above', body: 'Read about each organisation\'s cause, culture and volunteer requirements.' },
              { step: 2, action: 'Register on The Giving Circle', body: 'Create a profile as a Cause Champion this connects you to our NGO partner network.' },
              { step: 3, action: 'Select your preferred NGO', body: 'Reach out through the cause page or contact form. Our team can facilitate introductions.' },
              { step: 4, action: 'Complete orientation', body: 'Most NGOs have a 1–2 hour online or in-person orientation before your first session.' },
              { step: 5, action: 'Show up and create impact', body: 'Begin your volunteering journey. Track your hours and impact through your profile dashboard.' },
            ].map(({ step, action, body }) => (
              <div key={step} className="flex items-start gap-4 bg-white rounded-lg p-4 border border-gray-100">
                <div className="flex-shrink-0 w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-sm">{step}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{action}</h3>
                  <p className="text-gray-700 text-sm">{body}</p>
                </div>
              </div>
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
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Related Reading</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'How to Volunteer in India', href: '/how-to-volunteer-india' },
              { label: 'Top NGOs in Delhi 2026', href: '/top-ngos-in-delhi-2026' },
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
            Ready to Volunteer?
          </h2>
          <p className="text-green-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Register as a Cause Champion and we'll connect you with the right volunteering opportunity in Delhi.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/onboarding" className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              Become a Cause Champion
            </Link>
            <Link to="/how-to-volunteer-india" className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-lg transition-all hover:-translate-y-1">
              Read the Full Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerOpportunitiesDelhi;

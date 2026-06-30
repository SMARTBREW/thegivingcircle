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
  { q: 'What happens to unspent CSR funds?', a: 'Under Companies Act rules, unspent CSR amounts must be transferred to specified government funds (e.g. PM CARES for certain cases) or spent within prescribed timelines with board disclosure. We help corporates plan deployments early in the financial year to avoid last-minute rush and compliance gaps.' },
  { q: 'How does CSR map to BRSR reporting?', a: 'Listed and large unlisted companies disclose CSR spend, beneficiary themes, and impact in the Business Responsibility and Sustainability Report. Our quarterly impact packs include beneficiary numbers, geotagged photos, and fund utilisation summaries formatted for audit and BRSR annexures.' },
];

const CSRProjectsInIndia = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="CSR Projects in India | Fund Verified NGOs | The Giving Circle"
        description="Fund high-impact CSR projects in India through verified NGOs. Education, women empowerment, disaster relief and animal welfare projects qualifying under Schedule VII. Full compliance documentation provided."
        keywords="CSR projects, csr by companies, csr initiatives, csr funding means, csr funds meaning, why csr is important, csr for education, corporate social responsibility, Schedule VII CSR, CSR donation, CSR NGO partnership, CSR compliance, women empowerment CSR"
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

        {/* CSR calendar */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">CSR Planning Calendar (India Financial Year)</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="space-y-3">
            {[
              { month: 'Apr–Jun', task: 'Board CSR committee approves annual plan; shortlist NGOs; sign MOUs before monsoon disrupts field work.' },
              { month: 'Jul–Sep', task: 'Deploy first tranche; launch education/animal welfare programmes; document baseline beneficiary counts.' },
              { month: 'Oct–Dec', task: 'Mid-year review; course-correct underperforming projects; plan employee volunteering days.' },
              { month: 'Jan–Mar', task: 'Final tranche; impact assessment; Form CSR-2 data prep; Annual Report / BRSR narrative.' },
            ].map(({ month, task }) => (
              <div key={month} className="flex gap-4 bg-white rounded-lg p-4 border border-gray-100">
                <span className="font-bold text-green-800 shrink-0 w-20">{month}</span>
                <p className="text-gray-700 text-sm">{task}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Live CSR projects */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Live CSR-Eligible Projects on The Giving Circle</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <p className="text-gray-600 mb-6">Each project below maps to Schedule VII categories with implementing NGO documentation available for your CSR committee.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: '#PehliClass — Child education bridge',
                schedule: 'Schedule VII (ii) — Education',
                desc: 'Sponsor formal school admissions, uniforms, and learning support for children exiting informal education. Ideal for corporates prioritising girl child education and NCR impact.',
                budget: 'From ₹5L programme blocks',
                href: '/pehli-class-cause-details',
              },
              {
                title: 'Brick by Brick — Animal shelter Gurgaon',
                schedule: 'Schedule VII (iv) — Animal welfare',
                desc: 'Fund boundary wall and rehabilitation infrastructure for injured strays. Strong employee engagement angle — site visits and brick-laying team days.',
                budget: '₹10/brick · ₹50K milestone',
                href: '/bricks-by-bricks-cause-details',
              },
              {
                title: 'JWP — Wings of Hope (menstrual health + education)',
                schedule: 'Schedule VII (ii) & (iii) — Education / Women',
                desc: 'Combined girls\' education and menstrual hygiene programme in Delhi NCR. Dual-theme CSR reporting in one audited partner.',
                budget: 'Flexible grants',
                href: '/jwp-cause-details',
              },
              {
                title: 'Flood relief & disaster rehabilitation',
                schedule: 'Schedule VII (xii) — Disaster management',
                desc: 'Emergency shelter, medical camps, and post-flood livelihood restoration in Uttarakhand. Suitable for disaster-response CSR reserves.',
                budget: 'Project-based',
                href: '/flood-relief-cause-details',
              },
              {
                title: 'Pawsitive Protectors — Rabies vaccination',
                schedule: 'Schedule VII (iv) — Animal welfare / public health',
                desc: 'Mass anti-rabies drives across Delhi NCR and Mumbai. Measurable KPIs: doses administered, coverage % per ward.',
                budget: 'Per-camp sponsorship',
                href: '/pawsitive-protectors-cause-details',
              },
              {
                title: 'Bowls of Hope — Street animal nutrition',
                schedule: 'Schedule VII (iv) — Animal welfare',
                desc: 'Daily feeding stations in Mumbai and Chennai. Ongoing OPEX model — ideal for annual CSR retainers.',
                budget: 'Monthly station sponsorship',
                href: '/bowls-of-hope-cause-details',
              },
            ].map(({ title, schedule, desc, budget, href }) => (
              <div key={href} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">{schedule}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">{title}</h3>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">{desc}</p>
                <p className="text-gray-500 text-xs mb-3"><strong>Typical budget:</strong> {budget}</p>
                <Link to={href} className="text-green-700 font-medium text-sm hover:underline">View project →</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Sector ideas */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">CSR Ideas by Corporate Sector</h2>
          <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden bg-white">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-semibold">Sector</th>
                  <th className="text-left p-4 font-semibold">Natural CSR fit</th>
                  <th className="text-left p-4 font-semibold">Example on TGC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { sector: 'IT / Tech (NCR)', fit: 'Digital literacy, STEM tutoring, remote skills volunteering', example: 'JWP tutoring + Pehli Class' },
                  { sector: 'Manufacturing', fit: 'Worker community health, girl child education near plants', example: 'Women empowerment + education' },
                  { sector: 'FMCG / Retail', fit: 'Menstrual health product distribution, nutrition', example: 'Wings of Hope' },
                  { sector: 'Real estate / Infra', fit: 'School infrastructure, disaster rehab in project states', example: 'Flood relief, Pehli Class' },
                  { sector: 'Financial services', fit: 'Financial literacy for SHGs, livelihood programmes', example: 'Women empowerment NGOs' },
                  { sector: 'Pharma / Healthcare', fit: 'Vaccination camps, rabies prevention, medical relief', example: 'Pawsitive Protectors' },
                ].map((row) => (
                  <tr key={row.sector}>
                    <td className="p-4 font-medium text-gray-900">{row.sector}</td>
                    <td className="p-4 text-gray-700">{row.fit}</td>
                    <td className="p-4 text-gray-600">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              { label: '#PehliClass · child education', href: '/pehli-class-cause-details' },
              { label: 'Brick by Brick · animal shelter Gurgaon', href: '/bricks-by-bricks-cause-details' },
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

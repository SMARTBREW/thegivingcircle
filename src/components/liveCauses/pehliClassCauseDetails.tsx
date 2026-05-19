import { useState } from 'react';
import {
  Share2,
  Shield,
  Facebook,
  Twitter,
  AlertTriangle,
  FileText,
  CheckCircle,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Award,
} from 'lucide-react';
import SEOHead from '../SEO/SEOHead';
import ArticleSchema from '../SEO/ArticleSchema';
import CloudinaryImage from '../ui/CloudinaryImage';
import { trackEvent } from '../../utils/analytics';
import { PEHLI_CLASS_IMAGES, PEHLI_CLASS_OG_IMAGE } from '../../constants/pehliClassCampaignImages';

function scrollDonateIntoView() {
  document.getElementById('donate-section')?.scrollIntoView({ behavior: 'smooth' });
}

const IMG_PEHLI_HERO = PEHLI_CLASS_IMAGES.hero;
const OG_ABSOLUTE = PEHLI_CLASS_OG_IMAGE;

const IMG_PEHLI_PROGRAMME = PEHLI_CLASS_IMAGES.programmeWebp;
const IMG_PEHLI_CLASSROOM = PEHLI_CLASS_IMAGES.classroomWhatsApp;
const IMG_PEHLI_CAMPAIGN_BANNER = PEHLI_CLASS_IMAGES.campaignBanner;
const IMG_PEHLI_CAMPAIGN_ALT = PEHLI_CLASS_IMAGES.campaignBannerAlt;

const PEHLI_IMPACT_GALLERY = [
  {
    image: IMG_PEHLI_PROGRAMME,
    caption: 'JWP #PehliClass — bridge learning toward first formal school',
    type: 'Programme',
  },
  {
    image: IMG_PEHLI_CLASSROOM,
    caption: 'Learners at the centre — closing gaps before mainstream enrolment',
    type: 'Programme',
  },
  {
    image: IMG_PEHLI_CAMPAIGN_BANNER,
    caption: 'Campaign artwork — share #PehliClass with your circle',
    type: 'Campaign',
  },
  {
    image: IMG_PEHLI_CAMPAIGN_ALT,
    caption: 'Spread the word — every share helps a child reach Pehli Class',
    type: 'Campaign',
  },
] as const;

const PehliClassCauseDetailPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is #PehliClass?',
      answer:
        '#PehliClass is Joint Women’s Programme’s measured campaign to move out-of-school children—especially first-generation learners—into formal school on time. Children spend up to one year at the Mera Sahara Bridge Learning Centre in Nithari while gaps are closed, documents secured, and enrolment into government or private school is completed.',
    },
    {
      question: 'How much does it cost to sponsor one child for the bridge year?',
      answer:
        'The programme asks for about ₹1,600 per month or ₹19,000 for the full year to cover the bridge for one child—a finite, trackable commitment from out-of-school to first formal class.',
    },
    {
      question: 'What if a girl cannot attend a regular school?',
      answer:
        'For adolescent girls who cannot attend a regular school, JWP opens pathways through NIOS for Classes 9–12 and IGNOU for higher education so education does not stop when family circumstances block daily attendance.',
    },
    {
      question: 'Is my donation eligible for 80G?',
      answer:
        'Yes. JWP – Joint Women’s Programme is registered under Section 80G of the Income Tax Act where applicable. You should receive an 80G receipt after donation; if anything is delayed, contact info@jwp.org.',
    },
    {
      question: 'Where can I verify registration and credentials?',
      answer:
        'Official certificates and registration documents are published by JWP India at https://jwpindia.org/certificates/',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const cause = {
    title: '#PehliClass',
    subtitle:
      'Supporting children’s first formal class—from bridge learning at Mera Sahara to mainstream school',
    goalAmount: '₹5,00,000',
    raisedAmount: '₹2,85,000',
    progressPercentage: 57,
    supporters: 142,
    daysLeft: 40,
    impactGallery: [...PEHLI_IMPACT_GALLERY],
    testimonials: [
      {
        name: 'Community educator',
        role: 'Delhi NCR',
        quote:
          'When paperwork and learning gaps block the school gate, families lose hope. A single year of structured bridge support—with dignity—changes whether a child ever sits in a formal classroom.',
      },
      {
        name: 'Parent voice',
        role: 'Nithari area',
        quote:
          'We wanted our child in school like every other family. The bridge centre helped with documents and catching up so the first real day of school finally happened.',
      },
    ],
  };

  const ngoDetails = {
    name: 'Joint Women’s Programme',
    tagline: '48+ years with India’s most vulnerable women and children',
    stats: {
      transparency: 95,
      programSpend: 92,
      yearsActive: '48+',
      states: 12,
    },
  };

  const amountToGo = '₹2,15,000';

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="#PehliClass | Donate for Child Education India · Bridge to Formal School | JWP"
        description="Donate for child education in India through verified partner Joint Women’s Programme: #PehliClass bridge at Mera Sahara, Nithari—fund school readiness for underprivileged children, close learning gaps, secure documents, enrol into formal school. Girl-child & first-generation learner focus. ₹1,600/month or ₹19,000/year. 80G where applicable · Delhi NCR."
        keywords="PehliClass, donate child education India, donate for child education India, NGO education donation 80G, fund school fees India, girl child education donate, JWP education NGO Delhi NCR, donate for underprivileged children, verified education NGO, 80G donation education, Joint Womens Programme education, bridge learning centre Nithari, Mera Sahara, out of school children India, sponsor child formal school, first generation learners India, NIOS IGNOU adolescent girls, donate education Delhi NCR"
        canonicalUrl="https://www.thegivingcircle.in/pehli-class-cause-details"
        ogImage={OG_ABSOLUTE}
      />
      <ArticleSchema
        title="#PehliClass — Donate for Child Education in India (Verified JWP Campaign)"
        description="Support child education in India: finite bridge programme for underprivileged and out-of-school children—documentation, learning gaps, enrolment into mainstream school—via Joint Women’s Programme with 80G where applicable."
        image={OG_ABSOLUTE}
        category="Education"
        location="Nithari, Noida · Delhi NCR"
        datePublished="2026-05-08"
        author="Joint Women’s Programme"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-100 pt-32 pb-12 sm:pb-16">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10">
            Supporting Children’s #PehliClass — Into Formal School, On Time
          </h1>
          <div className="w-20 h-1.5 bg-green-700 mb-8"></div>

          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            Every parent remembers the uniform, the lunchbox, the slightly-too-big bag—the first day of school. For thousands of children in the communities we serve, that day never comes: missing paperwork, lost years, learning gaps, or a gate that stayed shut. #PehliClass is JWP’s finite, measurable path from out-of-school to a real classroom—starting at the Mera Sahara Bridge Learning Centre in Nithari.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <Shield className="text-green-700" size={16} />
              Tax Benefits · 80G (where applicable)
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <CheckCircle className="text-green-700" size={16} />
              Verified partner listing
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <TrendingUp className="text-green-700" size={16} />
              {ngoDetails.stats.yearsActive} Years Active
            </div>
          </div>

          {/* Geographic Line */}
          <p className="text-sm text-gray-600 mb-8">
            <strong>Active operations</strong> · Mera Sahara Bridge Learning Centre, Nithari · Delhi NCR
          </p>

          {/* Hero Image - Full width and centered */}
          <div className="w-full rounded-xl overflow-hidden shadow-lg mx-auto">
            <CloudinaryImage
              src={IMG_PEHLI_HERO}
              alt="JWP Mera Sahara learners in programme uniform — #PehliClass bridge to first formal school"
              className="w-full aspect-video object-cover"
              width={1200}
              height={675}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Two-Column Page Body */}
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          {/* Main Content Column */}
          <main className="min-w-0">
            <section aria-label="When the school gate stays shut" className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 flex items-center gap-2 break-words">
                <AlertTriangle className="text-black shrink-0" size={18} />
                When the School Gate Stays Shut
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <div className="prose prose-lg text-gray-600 mb-4 sm:mb-6 md:mb-8">
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  The children served are first-generation learners, dropouts, and children who have never entered a formal classroom. Many could not access government school because families lacked documents—a birth certificate, Aadhaar, transfer certificate, PEN—or because learning gaps made enrolment impossible.
                </p>
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  Some are six, facing requirements their parents cannot meet. Some are twelve and told they are “too late.” Adolescent girls are pushed out when families prioritise a brother’s schooling. Without intervention, hope fades and the cycle continues.
                </p>
              </div>

              {/* Image directly below the paragraphs */}
              <figure className="mb-6 w-full">
                <CloudinaryImage
                  src={IMG_PEHLI_PROGRAMME}
                  alt="JWP #PehliClass programme — learners supported toward first formal school"
                  className="w-full rounded-lg shadow-lg"
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  From out-of-school to Pehli Class — documentation, bridge learning, and enrolment support.
                </figcaption>
              </figure>
            </section>

            <section aria-label="The promise" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                The Promise: One Year, Then a Real Classroom
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                At Mera Sahara, each child stays for a maximum of one year. In that year the programme closes academic gaps, secures documentation, and accompanies families through enrolment into government or private school—into their{' '}
                <strong>first formal class</strong>, on time.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                Where girls cannot attend regular school, JWP opens NIOS for Classes 9–12 and IGNOU for higher education—so education continues even when daily attendance is blocked by family circumstances.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 mb-2">From out of school to first formal class</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  About <strong>₹1,600 per month</strong> or <strong>₹19,000 for the year</strong> is positioned to cover what it takes to bridge one child into a mainstream classroom—including structured support at the centre and enrolment-related accompaniment as described by JWP.
                </p>
              </div>
            </section>

            <section aria-label="Why PehliClass why now" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why #PehliClass — Why Now
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                The right to education is anchored in our Constitution and the RTE framework—but for thousands of children, realising that right takes a hand across learning gaps, missing paperwork, lost years, and closed gates. Joint Women’s Programme has spent forty-eight years alongside India’s most vulnerable women and children; #PehliClass concentrates that experience into a campaign that is finite, focused, and measurable.
              </p>
            </section>

            <section aria-label="Recognition and credentials" className="mb-8 sm:mb-12">
              <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <Award className="text-green-700 shrink-0 mt-0.5" size={22} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Recognition & credentials</h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                    JWP highlights recognition including a letter of appreciation from the Honourable President of India alongside statutory registrations. Full registration certificates and documents are available on the organisation’s official portal.
                  </p>
                  <a
                    href="https://jwpindia.org/certificates/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 font-semibold text-sm hover:underline"
                  >
                    View registration certificates & credentials →
                  </a>
                </div>
              </div>
            </section>

            <section aria-label="In their own words" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                In Their Own Words
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
              <div className="space-y-6">
                {cause.testimonials.map((t, i) => (
                  <div key={i} className="bg-green-50 border-l-4 border-green-700 p-4 sm:p-6 rounded-r-lg">
                    <p className="text-gray-700 italic mb-4 text-sm sm:text-base leading-relaxed">"{t.quote}"</p>
                    <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
                      <span className="font-bold text-gray-900 text-sm sm:text-base">{t.name}</span>
                      <span className="text-gray-400 hidden sm:inline"> - </span>
                      <span className="text-gray-500 text-xs sm:text-sm">{t.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section: Gallery */}
            <section aria-label="#PehliClass in Action" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                #PehliClass in Action
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {cause.impactGallery.map((item, index) => (
                  <div
                    key={index}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                  >
                    <CloudinaryImage
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      width={400}
                      height={300}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm font-medium leading-tight">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: About NGO */}
            <section aria-label="About Joint Women's Programme" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                About Joint Women’s Programme
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <div className="bg-green-700 rounded-lg p-3 text-white shrink-0">
                    <span className="text-2xl font-bold">J</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{ngoDetails.name}</h3>
                    <p className="text-sm text-gray-500">{ngoDetails.tagline}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                  With decades of grassroots impact and policy advocacy—including contributions to discourse around gender-just legislation and social protection—JWP invites donors, ambassadors, and allies to share #PehliClass with anyone who should see it.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-700 mb-1">{ngoDetails.stats.transparency}%</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">Transparency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-700 mb-1">{ngoDetails.stats.programSpend}%</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">Program Spend</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-700 mb-1">{ngoDetails.stats.yearsActive}</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">Years Active</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-700 mb-1">{ngoDetails.stats.states}</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">States Covered</div>
                  </div>
                </div>
                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <div className="flex items-start gap-3">
                    <FileText className="text-green-700 mt-0.5 shrink-0" size={18} />
                    <a
                      href="https://jwpindia.org/certificates/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-gray-700 hover:text-green-700 hover:underline"
                    >
                      Registration certificates & credentials (jwpindia.org)
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="text-green-700 mt-0.5 shrink-0" size={18} />
                    <span className="text-sm sm:text-base text-gray-700">80G-eligible donations where applicable · receipts via partner process</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-700 mt-0.5 shrink-0 inline-flex">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                    </span>
                    <span className="text-sm sm:text-base text-gray-700">Phone: +91 11-41550912</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-700 mt-0.5 shrink-0 inline-flex">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    </span>
                    <a href="mailto:info@jwp.org" className="text-sm sm:text-base text-gray-700 hover:text-green-700 hover:underline">
                      info@jwp.org
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-700 mt-0.5 shrink-0 inline-flex">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /></svg>
                    </span>
                    <a href="https://www.jwp.org" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-gray-700 hover:text-green-700 hover:underline">
                      www.jwp.org
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section aria-label="Frequently Asked Questions" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 bg-white hover:bg-gray-50 transition-colors text-left"
                    >
                      <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">{faq.question}</span>
                      {openFaqIndex === index ? (
                        <ChevronUp className="text-green-700 shrink-0" size={20} />
                      ) : (
                        <ChevronDown className="text-gray-400 shrink-0" size={20} />
                      )}
                    </button>
                    {openFaqIndex === index && (
                      <div className="p-4 sm:p-5 pt-0 bg-white text-gray-600 text-sm sm:text-base leading-relaxed">{faq.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </main>

          <aside className="lg:col-span-1" id="donate-section">
            <div className="lg:sticky lg:top-28 space-y-6 h-fit">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-7">
                <div className="flex items-baseline gap-2 mb-1.5">
                  <span className="text-3xl font-extrabold text-green-700 tracking-tight">{cause.raisedAmount}</span>
                  <span className="text-sm text-gray-500 font-medium">raised of {cause.goalAmount}</span>
                </div>
                <div className="mb-4">
                  <div className="w-full bg-green-50 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-700 to-green-600 rounded-full relative overflow-hidden"
                      style={{ width: `${Math.min(cause.progressPercentage, 100)}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-1.5 text-xs text-gray-500">
                    <span>{cause.progressPercentage}% funded</span>
                    <span>{amountToGo} to go</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-5 text-center">
                  <div className="bg-green-50 rounded-lg p-2.5">
                    <div className="text-lg font-extrabold text-gray-900">{cause.supporters}</div>
                    <div className="text-[10px] text-gray-600 uppercase tracking-wide font-semibold">Supporters</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2.5">
                    <div className="text-lg font-extrabold text-gray-900">{cause.daysLeft}</div>
                    <div className="text-[10px] text-gray-600 uppercase tracking-wide font-semibold">Days left</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2.5">
                    <div className="text-lg font-extrabold text-gray-900">1 yr</div>
                    <div className="text-[10px] text-gray-600 uppercase tracking-wide font-semibold">Bridge max</div>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">Match JWP ask</div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all"
                    >
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹1,600</div>
                      <div className="text-[11px] text-gray-500 leading-tight">1 month · 1 child</div>
                    </button>
                    <button
                      type="button"
                      className="border-2 border-green-700 bg-green-50 rounded-lg p-3.5 text-center shadow-sm relative"
                    >
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹19,000</div>
                      <div className="text-[11px] text-gray-500 leading-tight">Full bridge year</div>
                    </button>
                    <button type="button" className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹3,200</div>
                      <div className="text-[11px] text-gray-500 leading-tight">2 months support</div>
                    </button>
                    <button type="button" className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹9,600</div>
                      <div className="text-[11px] text-gray-500 leading-tight">6 months support</div>
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    trackEvent('donate_cta_click', { cause_page: 'pehli-class-cause-details', placement: 'sidebar_primary' })
                  }
                  className="w-full bg-green-700 hover:bg-green-800 text-white rounded-lg px-6 py-4 font-bold text-base transition-all hover:-translate-y-0.5 hover:shadow-lg mb-2 flex flex-col items-center gap-0.5"
                >
                  <span>Donate Now</span>
                  <span className="text-xs font-normal opacity-90">Secure checkout · Tax receipt where eligible</span>
                </button>
                <div className="text-center text-xs text-green-700 font-semibold mb-5 flex items-center justify-center gap-1">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" className="flex-shrink-0">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Limited campaign window · help a child reach Pehli Class</span>
                </div>
                <div className="border-t border-gray-100 pt-4.5 mb-4.5">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">Spread the word</div>
                  <div className="grid grid-cols-4 gap-2">
                    <button type="button" className="flex flex-col items-center justify-center gap-1.5 py-2.5 px-2 border border-gray-200 hover:border-green-500 hover:text-green-600 rounded-lg text-xs font-semibold text-gray-600 transition-all">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                      <span className="text-[10px]">WhatsApp</span>
                    </button>
                    <button type="button" className="flex flex-col items-center justify-center gap-1.5 py-2.5 px-2 border border-gray-200 hover:border-blue-600 hover:text-blue-600 rounded-lg text-xs font-semibold text-gray-600 transition-all">
                      <Facebook size={14} />
                      <span className="text-[10px]">Facebook</span>
                    </button>
                    <button type="button" className="flex flex-col items-center justify-center gap-1.5 py-2.5 px-2 border border-gray-200 hover:border-black rounded-lg text-xs font-semibold text-gray-600 transition-all">
                      <Twitter size={14} />
                      <span className="text-[10px]">Twitter</span>
                    </button>
                    <button type="button" className="flex flex-col items-center justify-center gap-1.5 py-2.5 px-2 border border-gray-200 hover:border-green-700 hover:text-green-700 rounded-lg text-xs font-semibold text-gray-600 transition-all">
                      <Share2 size={14} />
                      <span className="text-[10px]">Copy link</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <section className="bg-green-700 py-16 sm:py-20 mb-20 md:mb-0">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Donate · Become a #PehliClass Ambassador · Share
          </h2>
          <p className="text-green-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            {cause.supporters.toLocaleString()} supporters have stepped up for this lane of work. Your gift or share helps a child cross from out-of-school documentation limbo into their first formal class.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-lg shadow-lg transition-all hover:-translate-y-1 text-base sm:text-lg"
            >
              Become an ambassador
            </button>
            <div className="text-green-200 font-medium text-sm sm:hidden my-2">or</div>
            <button
              type="button"
              onClick={() => {
                trackEvent('donate_cta_click', {
                  cause_page: 'pehli-class-cause-details',
                  placement: 'footer_cta_secondary',
                });
                scrollDonateIntoView();
              }}
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-lg transition-all hover:-translate-y-1 text-base sm:text-lg"
            >
              Make a direct donation
            </button>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] z-50 md:hidden block">
        <div className="flex items-center gap-4 max-w-2xl mx-auto">
          <div className="flex-1 min-w-0">
            <div className="text-sm font-extrabold text-gray-900 truncate">{cause.raisedAmount} raised</div>
            <div className="text-xs text-gray-500 truncate">
              {cause.progressPercentage}% of {cause.goalAmount} · {cause.daysLeft} days left
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              trackEvent('donate_cta_click', { cause_page: 'pehli-class-cause-details', placement: 'mobile_fixed_bar' });
              scrollDonateIntoView();
            }}
            className="bg-green-700 text-white px-6 py-3 rounded-lg font-bold text-sm shadow-md hover:bg-green-800 transition-colors shrink-0 whitespace-nowrap"
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default PehliClassCauseDetailPage;

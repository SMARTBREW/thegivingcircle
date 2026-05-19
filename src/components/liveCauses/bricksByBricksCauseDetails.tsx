import { useMemo, useState } from 'react';
import {
  Share2,
  Shield,
  Facebook,
  Twitter,
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Award,
  Home,
  Heart,
} from 'lucide-react';
import SEOHead from '../SEO/SEOHead';
import ArticleSchema from '../SEO/ArticleSchema';
import CloudinaryImage from '../ui/CloudinaryImage';
import { trackEvent } from '../../utils/analytics';
import {
  BRICKS_CAMPAIGN_IMAGES,
  BRICKS_CAMPAIGN_OG_IMAGE,
} from '../../constants/bricksCampaignImages';

function scrollDonateIntoView() {
  document.getElementById('donate-section')?.scrollIntoView({ behavior: 'smooth' });
}

const IMG_BRICKS_HERO = BRICKS_CAMPAIGN_IMAGES.hero;
const IMG_BRICKS_SITE_A = BRICKS_CAMPAIGN_IMAGES.siteA;
const IMG_BRICKS_SITE_B = BRICKS_CAMPAIGN_IMAGES.siteB;
const IMG_BRICKS_SCENE_A = BRICKS_CAMPAIGN_IMAGES.sceneA;
const IMG_BRICKS_SCENE_B = BRICKS_CAMPAIGN_IMAGES.sceneB;
const IMG_BRICKS_SCENE_C = BRICKS_CAMPAIGN_IMAGES.sceneC;

const OG_ABSOLUTE = BRICKS_CAMPAIGN_OG_IMAGE;

const BRICKS_IMPACT_GALLERY = [
  {
    image: IMG_BRICKS_SITE_A,
    caption: 'SHUKRANA Animal Care Centre · Gurugram — boundary wall and active site work under way',
    type: 'Site',
  },
  {
    image: IMG_BRICKS_SITE_B,
    caption: 'Brick stacks and perimeter progress — every ₹10 brick secures the plot for injured strays',
    type: 'Site',
  },
  {
    image: IMG_BRICKS_SCENE_A,
    caption: 'Materials on site — turning donor support into walls strays can rely on',
    type: 'Programme',
  },
  {
    image: IMG_BRICKS_SCENE_B,
    caption: 'Community-backed build — transparency you can see on the ground',
    type: 'Programme',
  },
  {
    image: IMG_BRICKS_SCENE_C,
    caption: 'Building Them A Home — Brick by Brick for Animal Care in Gurgaon',
    type: 'Campaign',
  },
] as const;

/** Campaign numbers from Animal Care — Brick by Brick (boundary wall phase) */
const BRICK_RUPEES = 10;
const BRICKS_GOAL = 5000;
const BRICKS_LAID = 1000;
const GOAL_RUPEES = 50_000;
const RAISED_RUPEES = 10_000;

const CAUSE_PAGE_SLUG = 'bricks-by-bricks-cause-details' as const;

const BricksByBricksCauseDetailPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const progressPercentage = Math.round((RAISED_RUPEES / GOAL_RUPEES) * 100);
  const amountToGo = `₹${(GOAL_RUPEES - RAISED_RUPEES).toLocaleString('en-IN')}`;

  const visualBricks = useMemo(() => {
    const cols = 10;
    const rows = 10;
    const total = cols * rows;
    const filledCount = Math.min(total, Math.round((BRICKS_LAID / BRICKS_GOAL) * total));
    return Array.from({ length: total }, (_, i) => ({
      filled: i < filledCount,
      /** Hover / focus tooltip — progress shout-out (not individual donor names) */
      label:
        i < filledCount
          ? 'Early supporters — thank you for laying bricks for injured strays in Gurgaon'
          : `Lay this brick · ₹${BRICK_RUPEES} each`,
    }));
  }, []);

  const faqs = [
    {
      question: 'What is Brick by Brick?',
      answer:
        'Brick by Brick is an Animal Care campaign on The Giving Circle to build a dedicated rescue and rehabilitation centre for strays in Gurgaon — starting with a boundary wall on a secured plot, then treatment rooms, recovery kennels, and the infrastructure injured animals desperately need.',
    },
    {
      question: 'Why is the boundary wall the first step?',
      answer:
        'Animal Care has secured a 17,500 sq ft plot on the outskirts of Gurgaon for strays who are injured, diseased, or in critical need. The site is open ground today — without a boundary wall there is no safe perimeter to begin construction. Your bricks fund that first protective ring so the rest of the centre can rise.',
    },
    {
      question: 'How does ₹10 per brick work?',
      answer:
        `Each brick in this phase is represented as ₹${BRICK_RUPEES.toLocaleString('en-IN')}. Together, supporters are working toward ${BRICKS_GOAL.toLocaleString('en-IN')} bricks (₹${GOAL_RUPEES.toLocaleString('en-IN')} for this milestone). Larger gifts — like ₹10,000 — accelerate the wall and honour everyone who refuses to look away.`,
    },
    {
      question: 'Is my donation eligible for 80G?',
      answer:
        'AnimalCare India is registered under Section 80G of the Income Tax Act where applicable. You should receive an 80G receipt after donation (typically within about 48 hours). If anything is delayed, contact info@animalcareindia.org.in.',
    },
    {
      question: 'Who is Animal Care / AnimalCare India?',
      answer:
        'AnimalCare India runs verified animal welfare programmes across Delhi NCR, Mumbai, Gurugram and beyond — including rabies vaccination drives (Zero Rabies Deaths by 2030 mission), rescue, feeding and shelter support. This campaign extends that work into a permanent rehabilitation footprint in Gurgaon.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const cause = {
    title: 'Brick by Brick',
    subtitle:
      'Animal Care — rescue & rehabilitation centre for injured strays in Gurgaon · boundary wall first · ₹10 per brick',
    goalAmount: `₹${GOAL_RUPEES.toLocaleString('en-IN')}`,
    raisedAmount: `₹${RAISED_RUPEES.toLocaleString('en-IN')}`,
    progressPercentage,
    supporters: 1,
    daysLeft: 1,
    impactGallery: [...BRICKS_IMPACT_GALLERY],
    testimonials: [
      {
        name: 'Campaign voice',
        role: 'Brick by Brick · Gurgaon',
        quote:
          'Every night, injured strays in Gurgaon have nowhere to go — no shelter, no treatment, no chance. The land is ready. The plan is real. Every brick you lay gets us closer to breaking ground.',
      },
      {
        name: 'Animal Care supporter',
        role: 'Early backer',
        quote:
          'This isn’t just a wall. It’s everyone who refused to look away — a warm bed and a place to call home, brick by brick.',
      },
    ],
  };

  const supporterStatLabel = cause.supporters === 1 ? 'Supporter' : 'Supporters';
  const daysLeftStatLabel = cause.daysLeft === 1 ? 'Day left' : 'Days left';

  const ngoDetails = {
    name: 'AnimalCare India',
    tagline: 'Verified animal welfare · rescue, vaccination, feeding & shelter across Delhi NCR & Mumbai',
    stats: {
      transparency: 95,
      programSpend: 95,
      /** Single-line headline like other stats; full phrase in label below */
      rabiesMissionYear: '2030',
      cities: 3,
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Brick by Brick Gurgaon | Animal Care — Build a Stray Rescue Centre | Donate ₹10 per Brick | The Giving Circle"
        description="Donate to Animal Care’s Brick by Brick campaign: fund the boundary wall for a 17,500 sq ft stray rescue & rehabilitation centre in Gurgaon. ₹10 = 1 brick · 1,000 of 5,000 bricks laid · verified animal welfare NGO · 80G where applicable · rabies prevention & street animal rescue India."
        keywords="Animal Care India donation, brick by brick animal shelter Gurgaon, donate stray dog shelter India, animal welfare NGO India 80G, rescue rehabilitation centre strays Gurgaon, donate animal rescue India, street animal rescue Gurugram, rabies prevention NGO India, boundary wall campaign animals, verified NGO animal welfare, donate ₹10 brick shelter"
        canonicalUrl={`https://www.thegivingcircle.in/${CAUSE_PAGE_SLUG}`}
        ogImage={OG_ABSOLUTE}
      />
      <ArticleSchema
        title="Brick by Brick — Building Them A Home (Animal Care · Gurgaon)"
        description="Fund Animal Care’s Gurgaon rescue centre: boundary wall phase on a 17,500 sq ft plot for injured strays — ₹10 per brick, transparent milestones, 80G-eligible giving."
        image={OG_ABSOLUTE}
        category="Animal Welfare"
        location="Gurgaon, Haryana · India"
        datePublished="2026-05-19"
        author="AnimalCare India"
      />

      <section className="bg-gradient-to-br from-green-50 via-white to-green-100 pt-32 pb-12 sm:pb-16">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10">
            Building Them A Home 🏠 — Brick by Brick
          </h1>
          <div className="w-20 h-1.5 bg-green-700 mb-8"></div>

          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            <strong>Animal Care · Gurugram.</strong> 🐕🐾 <strong>Brick by brick</strong> — their future home. When a stray is hit by a car, suffering from disease, or too injured to move, there is often nowhere to take them. Animal Care is raising funds to build a{' '}
            <strong>dedicated rescue and rehabilitation centre</strong> for strays in Gurgaon — starting with the boundary wall that secures a <strong>17,500 sq ft</strong> plot on the outskirts of the city, meant entirely for animals in critical need.
          </p>

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
              <Home className="text-green-700" size={16} />
              17,500 sq ft plot secured · Gurgaon
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <Heart className="text-green-700" size={16} />
              Rabies prevention · rescue · shelter programmes
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-8">
            <strong>Active operations</strong> · SHUKRANA Animal Care Centre plot — boundary wall phase · Sector-78, Gurugram · then treatment rooms & recovery kennels
          </p>

          <div className="w-full rounded-xl overflow-hidden shadow-lg mx-auto">
            <CloudinaryImage
              src={IMG_BRICKS_HERO}
              alt="SHUKRANA Animal Care Centre site — boundary wall construction at Sector-78, Gurugram; Animal Care sign Every Life Every Heartbeat"
              className="w-full aspect-video object-cover"
              width={1200}
              height={675}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
              priority
            />
          </div>
        </div>
      </section>

      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          <main className="min-w-0">
            <section aria-label="Their future home brick wall" className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Their Future Home — {BRICKS_LAID.toLocaleString('en-IN')} of {BRICKS_GOAL.toLocaleString('en-IN')} bricks laid with love
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-4"></div>
              <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
                This grid is a live snapshot of the campaign — each coloured brick is support already helping secure the boundary wall; lighter squares are still open for the next gift.{' '}
                <strong>
                  1 brick = ₹{BRICK_RUPEES.toLocaleString('en-IN')}
                </strong>
                . Every brick brings injured strays closer to a roof, a warm bed, and a place to call home — this isn&apos;t just a wall, it&apos;s everyone who refused to look away.
              </p>

              <div
                className="grid grid-cols-10 gap-1.5 sm:gap-2 p-4 sm:p-6 bg-stone-100 rounded-xl border border-stone-200 shadow-inner max-w-xl mx-auto lg:mx-0"
                role="img"
                aria-label={`Brick progress visual: approximately ${BRICKS_LAID} of ${BRICKS_GOAL} bricks contributed`}
              >
                {visualBricks.map((b, i) => (
                  <button
                    key={i}
                    type="button"
                    title={b.label}
                    aria-label={b.label}
                    className={`aspect-square rounded-sm border transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-600 ${
                      b.filled
                        ? 'bg-gradient-to-br from-amber-700 to-amber-900 border-amber-950 shadow-sm cursor-help'
                        : 'bg-stone-200/80 border-stone-300 hover:bg-stone-300/90'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center lg:text-left">
                Layout matches overall progress ({BRICKS_LAID.toLocaleString('en-IN')} / {BRICKS_GOAL.toLocaleString('en-IN')} bricks). Each new donation fills more of the grid.
              </p>
            </section>

            <section aria-label="Why Gurgaon strays need this" className="mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 flex items-center gap-2 break-words">
                <AlertTriangle className="text-black shrink-0" size={18} />
                Every Night, Injured Strays in Gurgaon Have Nowhere to Go
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>

              <div className="prose prose-lg text-gray-600 mb-4 sm:mb-6 md:mb-8">
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  Dear friends and community — when sickness, accidents or cruelty leaves a street animal unable to fend for themselves, responders need a place that can hold them safely through treatment and recovery. Today that permanent footprint is still missing —{' '}
                  <strong>open ground, no boundary, no protection</strong>.
                </p>
                <p className="leading-relaxed text-sm sm:text-base md:text-lg break-words mb-4">
                  Animal Care has secured the land and the vision: a centre for strays who are injured, diseased, or in critical medical need. The very first step is{' '}
                  <strong>the boundary wall</strong>. Once the wall goes up, construction can begin on treatment rooms, recovery kennels, and the infrastructure that turns &quot;nowhere to go&quot; into a real chance.
                </p>
              </div>

              <figure className="mb-6 w-full">
                <CloudinaryImage
                  src={IMG_BRICKS_SITE_A}
                  alt="Animal Care Brick by Brick — on-site construction at the Gurugram rescue centre plot"
                  className="w-full rounded-lg shadow-lg"
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  The land is ready and work has begun — your bricks fund the wall that protects everything that comes next.
                </figcaption>
              </figure>
            </section>

            <section aria-label="Share" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Share this on</h2>
              <p className="text-gray-700 text-sm sm:text-base mb-4">
                WhatsApp, Instagram, family groups — every share finds someone who will lay the next brick for a stray who deserves a home.
              </p>
            </section>

            <section aria-label="Recognition" className="mb-8 sm:mb-12">
              <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <Award className="text-green-700 shrink-0 mt-0.5" size={22} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Verified animal welfare partner</h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
                    AnimalCare India operates transparent vaccination drives, rescue support and feeding programmes — aligning with public-health goals including the Zero Rabies Deaths by 2030 mission. Receipts and programme updates follow partner norms.
                  </p>
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

            <section aria-label="Gallery" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                On the ground · Brick by Brick
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

            <section aria-label="About Animal Care" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">About AnimalCare India</h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8"></div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <div className="bg-green-700 rounded-lg p-3 text-white shrink-0">
                    <Heart className="w-8 h-8" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{ngoDetails.name}</h3>
                    <p className="text-sm text-gray-500">{ngoDetails.tagline}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                  From free rabies vaccinations and street-animal rescue to feeding programmes and shelter support, AnimalCare India focuses on measurable welfare outcomes and donor transparency. Brick by Brick extends that commitment into permanent infrastructure for Gurgaon&apos;s most vulnerable strays.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-700 mb-1">{ngoDetails.stats.transparency}%</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">Transparency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-700 mb-1">{ngoDetails.stats.programSpend}%</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">Program spend</div>
                  </div>
                  <div className="text-center flex flex-col items-center justify-start">
                    <div className="text-2xl sm:text-3xl font-bold text-green-700 mb-1">{ngoDetails.stats.rabiesMissionYear}</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-600 leading-snug max-w-[10rem] mx-auto uppercase tracking-wide">
                      Zero rabies mission
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-700 mb-1">{ngoDetails.stats.cities}+</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wide">City regions</div>
                  </div>
                </div>
                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <div className="flex items-start gap-3">
                    <Shield className="text-green-700 mt-0.5 shrink-0" size={18} />
                    <span className="text-sm sm:text-base text-gray-700">
                      80G-eligible donations where applicable · receipts issued per AnimalCare process
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-700 mt-0.5 shrink-0 inline-flex">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </span>
                    <a href="tel:+919315982650" className="text-sm sm:text-base text-gray-700 hover:text-green-700 hover:underline">
                      +91-9315982650
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-700 mt-0.5 shrink-0 inline-flex">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </span>
                    <a href="mailto:info@animalcareindia.org.in" className="text-sm sm:text-base text-gray-700 hover:text-green-700 hover:underline">
                      info@animalcareindia.org.in
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section aria-label="FAQ" className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
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
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-1.5">
                  <span className="text-3xl font-extrabold text-green-700 tracking-tight">{cause.raisedAmount}</span>
                  <span className="text-sm text-gray-500 font-medium leading-snug">
                    raised of {cause.goalAmount}
                  </span>
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
                  <div className="bg-green-50 rounded-lg p-2.5 min-w-0">
                    <div className="text-lg font-extrabold text-gray-900">{cause.supporters}</div>
                    <div className="text-[10px] text-gray-600 uppercase tracking-wide font-semibold leading-tight mt-0.5">
                      {supporterStatLabel}
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2.5 min-w-0">
                    <div className="text-lg font-extrabold text-gray-900">{cause.daysLeft}</div>
                    <div className="text-[10px] text-gray-600 uppercase tracking-wide font-semibold leading-tight mt-0.5">
                      {daysLeftStatLabel}
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2.5 min-w-0 flex flex-col items-center justify-center gap-0.5">
                    <div className="text-sm font-extrabold text-gray-900 tabular-nums leading-none">
                      {BRICKS_LAID.toLocaleString('en-IN')}
                    </div>
                    <div className="text-[10px] font-medium text-gray-500 tabular-nums leading-none">
                      of {BRICKS_GOAL.toLocaleString('en-IN')}
                    </div>
                    <div className="text-[10px] text-gray-600 uppercase tracking-wide font-semibold leading-tight pt-0.5">
                      Bricks
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">
                    Lay bricks · ₹{BRICK_RUPEES} each
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button type="button" className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹100</div>
                      <div className="text-[11px] text-gray-500 leading-tight">10 bricks</div>
                    </button>
                    <button type="button" className="border-2 border-green-700 bg-green-50 rounded-lg p-3.5 text-center shadow-sm relative">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹10,000</div>
                      <div className="text-[11px] text-gray-500 leading-snug space-y-0.5">
                        <p className="leading-tight">1,000 bricks</p>
                        <p className="text-[10px] text-gray-600 leading-tight">Hero gift</p>
                      </div>
                    </button>
                    <button type="button" className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹500</div>
                      <div className="text-[11px] text-gray-500 leading-tight">50 bricks</div>
                    </button>
                    <button type="button" className="border-2 border-gray-200 hover:border-green-700 hover:bg-green-50 rounded-lg p-3.5 text-center transition-all">
                      <div className="text-lg font-extrabold text-gray-900 mb-0.5">₹10</div>
                      <div className="text-[11px] text-gray-500 leading-tight">1 brick</div>
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    trackEvent('donate_cta_click', { cause_page: CAUSE_PAGE_SLUG, placement: 'sidebar_primary' })
                  }
                  className="w-full bg-green-700 hover:bg-green-800 text-white rounded-lg px-6 py-4 font-bold text-base transition-all hover:-translate-y-0.5 hover:shadow-lg mb-2 flex flex-col items-center gap-0.5"
                >
                  <span>Donate Now</span>
                  <span className="text-xs font-normal opacity-90">Secure checkout · 80G receipt where eligible</span>
                </button>
                <div className="text-center text-xs text-green-700 font-semibold mb-5 flex items-center justify-center gap-1">
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" className="flex-shrink-0">
                    <path
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Limited window · help secure the boundary wall</span>
                </div>
                <div className="border-t border-gray-100 pt-4.5 mb-4.5">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">Spread the word</div>
                  <div className="grid grid-cols-4 gap-2">
                    <button
                      type="button"
                      className="flex flex-col items-center justify-center gap-1.5 py-2.5 px-2 border border-gray-200 hover:border-green-500 hover:text-green-600 rounded-lg text-xs font-semibold text-gray-600 transition-all"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span className="text-[10px]">WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      className="flex flex-col items-center justify-center gap-1.5 py-2.5 px-2 border border-gray-200 hover:border-blue-600 hover:text-blue-600 rounded-lg text-xs font-semibold text-gray-600 transition-all"
                    >
                      <Facebook size={14} />
                      <span className="text-[10px]">Facebook</span>
                    </button>
                    <button
                      type="button"
                      className="flex flex-col items-center justify-center gap-1.5 py-2.5 px-2 border border-gray-200 hover:border-black rounded-lg text-xs font-semibold text-gray-600 transition-all"
                    >
                      <Twitter size={14} />
                      <span className="text-[10px]">Twitter</span>
                    </button>
                    <button
                      type="button"
                      className="flex flex-col items-center justify-center gap-1.5 py-2.5 px-2 border border-gray-200 hover:border-green-700 hover:text-green-700 rounded-lg text-xs font-semibold text-gray-600 transition-all"
                    >
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
            Donate · Share Brick by Brick · Build Them A Home
          </h2>
          <p className="text-green-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            {cause.supporters.toLocaleString()} supporter{cause.supporters !== 1 ? 's' : ''} so far — room for everyone who wants injured strays in Gurgaon to have a roof and a second chance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-lg shadow-lg transition-all hover:-translate-y-1 text-base sm:text-lg"
            >
              Share with your circle
            </button>
            <div className="text-green-200 font-medium text-sm sm:hidden my-2">or</div>
            <button
              type="button"
              onClick={() => {
                trackEvent('donate_cta_click', {
                  cause_page: CAUSE_PAGE_SLUG,
                  placement: 'footer_cta_secondary',
                });
                scrollDonateIntoView();
              }}
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-lg transition-all hover:-translate-y-1 text-base sm:text-lg"
            >
              Lay your brick — donate
            </button>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] z-50 md:hidden block">
        <div className="flex items-center gap-4 max-w-2xl mx-auto">
          <div className="flex-1 min-w-0">
            <div className="text-sm font-extrabold text-gray-900 truncate">{cause.raisedAmount} raised</div>
            <div className="text-xs text-gray-500 truncate">
              {cause.progressPercentage}% of {cause.goalAmount} · {cause.daysLeft} day{cause.daysLeft !== 1 ? 's' : ''} left
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              trackEvent('donate_cta_click', { cause_page: CAUSE_PAGE_SLUG, placement: 'mobile_fixed_bar' });
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

export default BricksByBricksCauseDetailPage;

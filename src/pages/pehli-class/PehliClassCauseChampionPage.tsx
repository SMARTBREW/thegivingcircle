import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  CheckCircle,
  Facebook,
  Share2,
  Shield,
  TrendingUp,
  Twitter,
} from 'lucide-react';
import SEOHead from '../../components/SEO/SEOHead';
import CloudinaryImage from '../../components/ui/CloudinaryImage';
import { PEHLI_CLASS_IMAGES, PEHLI_CLASS_OG_IMAGE } from '../../constants/pehliClassCampaignImages';
import { validatePhoneNumber } from '../../utils/api';
import { submitPehliClassChampionForm } from '../../api/pehliClassChampionApi';
import { trackEvent } from '../../utils/analytics';

const PAGE_URL = 'https://www.thegivingcircle.in/pehli-class/cause-champion';
const SHARE_TEXT =
  "This summer, help a child reach their first day of school. Champion #PehliClass with Joint Women's Programme — bridge out-of-school children into formal classrooms.";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX = /^[a-zA-Z][a-zA-Z\s.'-]*$/;

type FieldKey = 'name' | 'email' | 'mobile' | 'city';
type FieldErrors = Partial<Record<FieldKey, string>>;

interface FormState {
  name: string;
  email: string;
  mobile: string;
  city: string;
  schoolName: string;
  socialHandle: string;
  whyItMatters: string;
}

const EMPTY_FORM: FormState = {
  name: '',
  email: '',
  mobile: '',
  city: '',
  schoolName: '',
  socialHandle: '',
  whyItMatters: '',
};

function validateForm(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  const name = form.name.trim();
  const email = form.email.trim();
  const mobile = form.mobile.trim().replace(/\s/g, '');
  const city = form.city.trim();

  if (!name) errors.name = 'Name is required';
  else if (name.length < 2 || !NAME_REGEX.test(name)) {
    errors.name = 'Enter a valid name (letters only, at least 2 characters)';
  }

  if (!email) errors.email = 'Email is required';
  else if (!EMAIL_REGEX.test(email)) errors.email = 'Enter a valid email address';

  if (!mobile) errors.mobile = 'Mobile number is required';
  else if (!validatePhoneNumber(mobile)) {
    errors.mobile = 'Enter a valid 10-digit mobile number starting with 6–9';
  }

  if (!city) errors.city = 'City is required';
  else if (city.length < 2) errors.city = 'City must be at least 2 characters';

  return errors;
}

const PehliClassCauseChampionPage = () => {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const inputClass = (field?: FieldKey) =>
    `w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-600 outline-none transition-colors ${
      field && fieldErrors[field] ? 'border-red-400 focus:ring-red-500' : 'border-gray-200'
    }`;

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (field === 'name' || field === 'email' || field === 'mobile' || field === 'city') {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    setSubmitError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      await submitPehliClassChampionForm({
        name: form.name.trim(),
        email: form.email.trim(),
        mobile: form.mobile.trim().replace(/\s/g, ''),
        city: form.city.trim(),
        schoolName: form.schoolName.trim() || undefined,
        socialHandle: form.socialHandle.trim() || undefined,
        whyItMatters: form.whyItMatters.trim() || undefined,
      });

      trackEvent('pehli_class_champion_signup', { page: 'pehli-class/cause-champion' });
      setIsSubmitted(true);
      setForm(EMPTY_FORM);
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(PAGE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${PAGE_URL}`)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(PAGE_URL)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PAGE_URL)}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Champion #PehliClass | Help a Child Reach Their First Day of School | JWP"
        description="Become a Cause Champion for Joint Women's Programme #PehliClass. Share the story, rally your circle, and help out-of-school children bridge into formal classrooms at Mera Sahara, Noida."
        keywords="PehliClass champion, cause champion education India, JWP volunteer, share child education campaign, Mera Sahara Nithari, bridge learning centre, first day of school India, Joint Womens Programme champion"
        canonicalUrl={PAGE_URL}
        ogImage={PEHLI_CLASS_OG_IMAGE}
        ogTitle="Champion #PehliClass — Help a Child Reach Their First Day of School"
        ogDescription="You don't need to fundraise. Share #PehliClass with your circle and help Joint Women's Programme reach the next child waiting at the school gate."
      />

      {/* Hero — matches pehli-class-cause-details */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-100 pt-32 pb-12 sm:pb-16">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-3">
            Joint Women&apos;s Programme · #PehliClass
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8">
            This summer, help a child reach their first day of school{' '}
            <span aria-hidden="true">🎒</span>
          </h1>
          <div className="w-20 h-1.5 bg-green-700 mb-6 sm:mb-8" />

          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-6 leading-relaxed">
            Champion #PehliClass — share the story with your circle. One honest voice can reach the person who funds a child&apos;s entire year. No donation or fundraising required.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <Shield className="text-green-700" size={16} />
              Verified JWP partner
            </div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
              <TrendingUp className="text-green-700" size={16} />
              48+ Years Active
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-8">
            <strong>Active operations</strong> · Mera Sahara Bridge Learning Centre, Nithari · Delhi NCR
          </p>

          <div className="w-full rounded-xl overflow-hidden shadow-lg">
            <CloudinaryImage
              src={PEHLI_CLASS_IMAGES.hero}
              alt="JWP Mera Sahara learners — #PehliClass bridge to first formal school"
              className="w-full aspect-video object-cover"
              width={1200}
              height={675}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Two-column body — letter left, sticky form right */}
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          <main className="min-w-0 order-2 lg:order-1">
            <p className="text-lg text-gray-800 font-medium mb-6">Dear Changemaker,</p>

            <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base mb-8 sm:mb-12">
              <p>
                Every Indian parent cherishes the memory. The new uniform. The lunchbox. The slightly too-big bag. The first day of school.
              </p>
              <p>
                For most children, it happens. For thousands in the communities we work in, it doesn&apos;t — not because their families don&apos;t want it, but because the system asks for things they don&apos;t have. A first-generation learner falls behind early. A birth certificate goes missing. A year is lost. A school gate stays shut.
              </p>
              <p>
                The Joint Women&apos;s Programme has spent forty-eight years working alongside India&apos;s most vulnerable women and children.{' '}
                <strong>#PehliClass</strong> is our campaign to put children from underprivileged backgrounds into formal school, where they belong, on time. It is focused, finite, and every child we reach can be counted.
              </p>
            </div>

            <section className="mb-8 sm:mb-12" aria-labelledby="who-we-serve">
              <h2 id="who-we-serve" className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Who we&apos;re doing this for
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8" />
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  The children we serve are first-generation learners, dropouts, and children who have never set foot in a classroom. Many were turned away because their families are poor and marginalised, or because a document was missing — a Birth Certificate, an Aadhaar card, a Transfer Certificate, a Permanent Education Number — and because no one had ever helped them close the learning gap.
                </p>
                <p>
                  Some are six, knocking on the gate of a school that wants paperwork their parents don&apos;t have. Some are twelve, never schooled, and told they are already too late. Others are adolescent girls pulled out because a younger brother&apos;s education came first. Without a hand to walk them across, they fall further behind, and the cycle continues.
                </p>
              </div>
            </section>

            <section className="mb-8 sm:mb-12" aria-labelledby="the-promise">
              <h2 id="the-promise" className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                The promise: one year, then a real classroom
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8" />
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  At our <strong>Mera Sahara Bridge Learning Centre</strong> in Nithari, Noida, every child stays for a maximum of one year. In that year we close the academic gap, secure the missing documentation, and walk them through the gates of a government or private school — into their <em>pehli formal class</em>, on time. For adolescent girls who cannot attend a regular school, we open pathways through open schooling (NIOS, Classes 9–12) and higher education (IGNOU), so even the girls forced out by family responsibilities have a way through.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
                  <p className="text-gray-800 text-sm sm:text-base">
                    It takes <strong>₹19,000</strong> to bridge one child into a mainstream classroom for a full year. We are not asking you for that today. We are asking for something that goes further: <strong>your voice</strong>.
                  </p>
                </div>
              </div>

              <figure className="mt-6 w-full">
                <CloudinaryImage
                  src={PEHLI_CLASS_IMAGES.promiseOneYearInfographic}
                  alt="#PehliClass at a glance — 12 months from out-of-school to first formal class: welcome, bridge curriculum, admission secured, first class and onward"
                  className="w-full h-auto max-w-full rounded-lg shadow-lg"
                  width={800}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  #PehliClass at a glance — one year from out-of-school to first class.
                </figcaption>
              </figure>
            </section>

            <section className="mb-8 sm:mb-12" aria-labelledby="what-champion-means">
              <h2 id="what-champion-means" className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                What it means to champion the cause
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8" />
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
                A Champion does not need to fundraise or donate. You simply help the right people find <strong>#PehliClass</strong> — by sharing it with your circle, telling the story in your own words, and rallying the people who would want to help. One voice, shared honestly, can reach the person who funds a child&apos;s entire year.
              </p>

              <figure className="w-full">
                <CloudinaryImage
                  src={PEHLI_CLASS_IMAGES.championSponsorshipCard}
                  alt="What your sponsorship covers — ₹1,600 per month per child: teacher salaries, meals, books, uniform, centre operations, documentation and admission support"
                  className="w-full h-auto max-w-full rounded-lg shadow-lg"
                  width={800}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  What a full year of sponsorship covers — the doorway to a child&apos;s first formal class.
                </figcaption>
              </figure>
            </section>

            <section className="mb-8 sm:mb-12" aria-labelledby="why-now">
              <h2 id="why-now" className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why #PehliClass, why now
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8" />
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
                A child&apos;s right to education is enshrined in our Constitution under the Right to Education Act. But for thousands of children, that right still needs a hand to walk them across — past the learning gaps, the missing paperwork, the dropped years, and the closed gates. That hand has been the Joint Women&apos;s Programme for forty-eight years.
              </p>

              <figure className="w-full">
                <CloudinaryImage
                  src={PEHLI_CLASS_IMAGES.classroomWhatsApp}
                  alt="Students at the Mera Sahara Centre, Noida, being prepared for their #PehliClass"
                  className="w-full rounded-lg shadow-lg"
                  width={800}
                  height={500}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                />
                <figcaption className="text-xs sm:text-sm text-gray-600 mt-2 text-center italic">
                  Students at the Mera Sahara Centre, Noida, being prepared for their #PehliClass.
                </figcaption>
              </figure>
            </section>

            <p className="text-gray-800 font-medium text-base sm:text-lg leading-relaxed mb-8">
              Champion the cause. Share it with someone who should see it. Help us reach the next child.
            </p>

            <figure className="mb-8 sm:mb-12 w-full bg-white rounded-lg p-2 sm:p-3 border border-gray-200 shadow-sm">
              <CloudinaryImage
                src={PEHLI_CLASS_IMAGES.presidentLetter}
                alt="Letter of recognition from the Honourable President of India — Joint Women's Programme commended for empowering women and children"
                className="w-full h-auto max-w-full rounded-md"
                width={800}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
              />
              <figcaption className="text-xs sm:text-sm text-gray-600 mt-3 text-center italic">
                Letter of recognition from the Honourable President of India.
              </figcaption>
            </figure>

            <section className="mb-8 sm:mb-12" aria-labelledby="about-jwp">
              <h2 id="about-jwp" className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                About Us
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6 sm:mb-8" />
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
                With over 48 years of grassroots impact and policy advocacy, we are proud to have contributed to landmark legislation — the Women&apos;s Reservation Bill, laws to combat gender-based violence, and menstrual hygiene policy. We are proud to stand alongside changemakers like you to build a more just and inclusive world for girls.
              </p>
              <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <Award className="text-green-700 shrink-0 mt-0.5" size={22} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Registration Certificate and other credentials</h3>
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

            <section className="mb-8 sm:mb-12" aria-labelledby="share-section">
              <h2 id="share-section" className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Share2 size={20} className="text-green-700" />
                Share this on
              </h2>
              <div className="grid grid-cols-4 gap-2 max-w-md">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 py-2.5 px-2 border border-gray-200 hover:border-green-500 hover:text-green-600 rounded-lg text-xs font-semibold text-gray-600 transition-all bg-white"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="text-[10px]">WhatsApp</span>
                </a>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 py-2.5 px-2 border border-gray-200 hover:border-blue-600 hover:text-blue-600 rounded-lg text-xs font-semibold text-gray-600 transition-all bg-white"
                >
                  <Facebook size={14} />
                  <span className="text-[10px]">Facebook</span>
                </a>
                <a
                  href={twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 py-2.5 px-2 border border-gray-200 hover:border-black rounded-lg text-xs font-semibold text-gray-600 transition-all bg-white"
                >
                  <Twitter size={14} />
                  <span className="text-[10px]">Twitter</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="flex flex-col items-center justify-center gap-1.5 py-2.5 px-2 border border-gray-200 hover:border-green-700 hover:text-green-700 rounded-lg text-xs font-semibold text-gray-600 transition-all bg-white"
                >
                  <Share2 size={14} />
                  <span className="text-[10px]">{copied ? 'Copied!' : 'Copy link'}</span>
                </button>
              </div>
            </section>

            <div className="lg:hidden">
              <Link
                to="/pehli-class-cause-details"
                className="inline-flex items-center text-green-700 font-semibold text-sm hover:underline"
              >
                Learn more about #PehliClass →
              </Link>
            </div>
          </main>

          {/* Sticky champion form — stays in viewport until footer CTA */}
          <aside className="lg:col-span-1 min-h-0 order-1 lg:order-2" id="champion-form">
            <div ref={formRef} className="lg:sticky lg:top-28">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col lg:max-h-[calc(100dvh-8rem)]">
                <div className="shrink-0 px-6 pt-6 pb-3">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">
                    Champion the Cause 🎒
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Sign up to share #PehliClass. No donation required.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center px-6 py-4">
                    <CheckCircle className="mx-auto text-green-600 mb-3" size={40} />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">You&apos;re in!</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Thank you for championing #PehliClass. Share the page with someone who should see it.
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg px-4 py-3 text-sm transition-colors mb-3"
                    >
                      Share on WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-green-700 text-sm font-medium hover:underline"
                    >
                      Submit another response
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0 px-6" noValidate>
                    <div className="flex-1 overflow-y-auto space-y-3 pr-0.5 min-h-0 pb-2">
                      <div>
                        <label htmlFor="champion-name" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="champion-name"
                          type="text"
                          autoComplete="name"
                          value={form.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className={inputClass('name')}
                          placeholder="Your full name"
                        />
                        {fieldErrors.name && (
                          <p className="text-red-600 text-xs mt-1" role="alert">{fieldErrors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="champion-email" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="champion-email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className={inputClass('email')}
                          placeholder="you@example.com"
                        />
                        {fieldErrors.email && (
                          <p className="text-red-600 text-xs mt-1" role="alert">{fieldErrors.email}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="champion-mobile" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                          Mobile No <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="champion-mobile"
                          type="tel"
                          autoComplete="tel"
                          inputMode="numeric"
                          value={form.mobile}
                          onChange={(e) => handleChange('mobile', e.target.value)}
                          className={inputClass('mobile')}
                          placeholder="10-digit mobile number"
                        />
                        {fieldErrors.mobile && (
                          <p className="text-red-600 text-xs mt-1" role="alert">{fieldErrors.mobile}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="champion-city" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                          City <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="champion-city"
                          type="text"
                          autoComplete="address-level2"
                          value={form.city}
                          onChange={(e) => handleChange('city', e.target.value)}
                          className={inputClass('city')}
                          placeholder="Your city"
                        />
                        {fieldErrors.city && (
                          <p className="text-red-600 text-xs mt-1" role="alert">{fieldErrors.city}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="champion-school" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                          School name <span className="text-gray-400 font-normal normal-case">(optional)</span>
                        </label>
                        <input
                          id="champion-school"
                          type="text"
                          value={form.schoolName}
                          onChange={(e) => handleChange('schoolName', e.target.value)}
                          className={inputClass()}
                          placeholder="School or institution"
                        />
                      </div>

                      <div>
                        <label htmlFor="champion-social" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                          Instagram / social <span className="text-gray-400 font-normal normal-case">(optional)</span>
                        </label>
                        <input
                          id="champion-social"
                          type="text"
                          value={form.socialHandle}
                          onChange={(e) => handleChange('socialHandle', e.target.value)}
                          className={inputClass()}
                          placeholder="@yourhandle"
                        />
                      </div>

                      <div>
                        <label htmlFor="champion-why" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                          Why does this cause matter? <span className="text-gray-400 font-normal normal-case">(optional)</span>
                        </label>
                        <textarea
                          id="champion-why"
                          rows={2}
                          value={form.whyItMatters}
                          onChange={(e) => handleChange('whyItMatters', e.target.value)}
                          className={`${inputClass()} resize-none`}
                          placeholder="Share in your own words..."
                        />
                      </div>
                    </div>

                    <div className="shrink-0 pt-3 pb-6 border-t border-gray-100 bg-white">
                      {submitError && (
                        <p className="text-red-600 text-xs bg-red-50 border border-red-100 rounded-lg px-3 py-2 mb-3" role="alert">
                          {submitError}
                        </p>
                      )}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-green-700 hover:bg-green-800 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-lg px-6 py-3.5 font-bold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        {isSubmitting ? 'Submitting…' : 'Champion the Cause 🎒'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer CTA — sticky form releases here */}
      <section id="champion-footer-cta" className="bg-green-700 py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            One voice can reach the next child
          </h2>
          <p className="text-green-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Share #PehliClass with your school, college, or circle. Help Joint Women&apos;s Programme put another child through the school gate — on time.
          </p>
          <a
            href="#champion-form"
            className="inline-flex items-center bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-lg shadow-lg transition-all hover:-translate-y-1 text-base sm:text-lg"
          >
            Champion the Cause 🎒
          </a>
        </div>
      </section>
    </div>
  );
};

export default PehliClassCauseChampionPage;

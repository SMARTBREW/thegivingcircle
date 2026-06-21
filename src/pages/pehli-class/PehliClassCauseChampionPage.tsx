import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';
import SEOHead from '../../components/SEO/SEOHead';
import CloudinaryImage from '../../components/ui/CloudinaryImage';
import PrimaryButton from '../../components/ui/PrimaryButton';
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

const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${PAGE_URL}`)}`;
const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(PAGE_URL)}`;
const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PAGE_URL)}`;
const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(PAGE_URL)}`;
const emailUrl = `mailto:?subject=${encodeURIComponent('#PehliClass — help a child reach their first day of school')}&body=${encodeURIComponent(`${SHARE_TEXT}\n\n${PAGE_URL}`)}`;

/* ─── Shared form body ─────────────────────────────────── */
interface FormBodyProps {
  isSubmitted: boolean;
  setIsSubmitted: (v: boolean) => void;
  form: FormState;
  fieldErrors: FieldErrors;
  submitError: string;
  isSubmitting: boolean;
  handleChange: (field: keyof FormState, value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  inputClass: (field?: FieldKey) => string;
  whatsappUrl: string;
}

const FormBody: React.FC<FormBodyProps> = ({
  isSubmitted, setIsSubmitted, form, fieldErrors, submitError,
  isSubmitting, handleChange, handleSubmit, inputClass, whatsappUrl,
}) => {
  if (isSubmitted) {
    return (
      <div className="text-center px-6 py-8">
        <CheckCircle className="mx-auto text-green-600 mb-4" size={44} />
        <h3 className="text-lg font-bold text-gray-900 mb-2">You&apos;re in!</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          Thank you for championing #PehliClass. Share the page with someone who should see it.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-[#25d366] hover:opacity-90 text-white font-bold rounded-full px-4 py-3 text-sm transition-opacity mb-3"
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
    );
  }
  return (
    <form onSubmit={handleSubmit} className="px-6" noValidate>
      <div className="space-y-2 pt-3 pb-1">
        <div>
          <label htmlFor="fb-name" className="block text-xs font-medium text-gray-700 mb-0.5">
            Name <span className="text-red-500">*</span>
          </label>
          <input id="fb-name" type="text" autoComplete="name" value={form.name}
            onChange={(e) => handleChange('name', e.target.value)} className={inputClass('name')} placeholder="" />
          {fieldErrors.name && <p className="text-red-600 text-xs mt-1" role="alert">{fieldErrors.name}</p>}
        </div>
        <div>
          <label htmlFor="fb-email" className="block text-xs font-medium text-gray-700 mb-0.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input id="fb-email" type="email" autoComplete="email" value={form.email}
            onChange={(e) => handleChange('email', e.target.value)} className={inputClass('email')} placeholder="" />
          {fieldErrors.email && <p className="text-red-600 text-xs mt-1" role="alert">{fieldErrors.email}</p>}
        </div>
        <div>
          <label htmlFor="fb-mobile" className="block text-xs font-medium text-gray-700 mb-0.5">
            Mobile No <span className="text-red-500">*</span>
          </label>
          <input id="fb-mobile" type="tel" autoComplete="tel" inputMode="numeric" value={form.mobile}
            onChange={(e) => handleChange('mobile', e.target.value)} className={inputClass('mobile')} placeholder="" />
          {fieldErrors.mobile && <p className="text-red-600 text-xs mt-1" role="alert">{fieldErrors.mobile}</p>}
        </div>
        <div>
          <label htmlFor="fb-city" className="block text-xs font-medium text-gray-700 mb-0.5">
            City <span className="text-red-500">*</span>
          </label>
          <input id="fb-city" type="text" autoComplete="address-level2" value={form.city}
            onChange={(e) => handleChange('city', e.target.value)} className={inputClass('city')} placeholder="" />
          {fieldErrors.city && <p className="text-red-600 text-xs mt-1" role="alert">{fieldErrors.city}</p>}
        </div>
        <div>
          <label htmlFor="fb-school" className="block text-xs font-medium text-gray-700 mb-0.5">
            School name <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input id="fb-school" type="text" value={form.schoolName}
            onChange={(e) => handleChange('schoolName', e.target.value)} className={inputClass()} placeholder="" />
        </div>
        <div>
          <label htmlFor="fb-social" className="block text-xs font-medium text-gray-700 mb-0.5">
            Instagram / social handle <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input id="fb-social" type="text" value={form.socialHandle}
            onChange={(e) => handleChange('socialHandle', e.target.value)} className={inputClass()} placeholder="@yourhandle" />
        </div>
        <div>
          <label htmlFor="fb-why" className="block text-xs font-medium text-gray-700 mb-0.5">
            Why does this cause matter to you? <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <textarea id="fb-why" rows={2} value={form.whyItMatters}
            onChange={(e) => handleChange('whyItMatters', e.target.value)}
            className={`${inputClass()} resize-none`} placeholder="A line about what moved you to join in." />
        </div>
      </div>
      <div className="pt-2 pb-4 bg-white border-t border-gray-100">
        {submitError && (
          <p className="text-red-600 text-xs bg-red-50 border border-red-100 rounded-lg px-3 py-2 mb-3" role="alert">
            {submitError}
          </p>
        )}
        <PrimaryButton type="submit" disabled={isSubmitting} size="md" className="w-full justify-center">
          {isSubmitting ? 'Submitting…' : 'Sign Me Up as a Cause Champion'}
        </PrimaryButton>
        <div className="mt-3 space-y-2 text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
          <p>By signing up, you agree to share the information entered on this page with Joint Women&apos;s Programme so our team can reach out about championing #PehliClass.</p>
          <p>There is no donation required to become a Cause Champion. You are lending your voice, not your wallet, to help more children walk into their first classroom.</p>
          <p>All donations to Joint Women&apos;s Programme are eligible for 50% tax relief under Section 80G of the Income Tax Act, 1961.</p>
          <p>To issue an 80G certificate, we need your name, email ID, phone number, contact address, and PAN card number.</p>
        </div>
      </div>
    </form>
  );
};

const PehliClassCauseChampionPage = () => {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mobileFormOpen, setMobileFormOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll when mobile modal is open
  useEffect(() => {
    if (mobileFormOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileFormOpen]);

  const inputClass = (field?: FieldKey) =>
    `w-full border rounded-md px-3 py-1.5 text-sm text-gray-800 bg-white focus:ring-2 focus:ring-green-600 outline-none transition-colors ${
      field && fieldErrors[field] ? 'border-red-400 focus:ring-red-500' : 'border-gray-300'
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

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Champion #PehliClass | Help a Child Reach Their First Day of School | JWP"
        description="Become a Cause Champion for Joint Women's Programme #PehliClass. Share the story, rally your circle, and help out-of-school children bridge into formal classrooms at Mera Sahara, Noida."
        keywords="PehliClass champion, cause champion education India, JWP volunteer, share child education campaign, Mera Sahara Nithari, bridge learning centre, first day of school India, Joint Womens Programme champion"
        canonicalUrl={PAGE_URL}
        ogImage={PEHLI_CLASS_OG_IMAGE}
        ogTitle="Champion #PehliClass — Help a Child Reach Their First Day of School"
        ogDescription="You don't need to fundraise. Share #PehliClass with your circle and help Joint Women's Programme reach the next child waiting at the school gate."
      />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-32 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14">

          {/* ── Left: Letter content ── */}
          <main className="min-w-0 order-2 lg:order-1">

            {/* JWP header */}
            <div className="flex flex-col items-center mb-8">
              <img
                src={PEHLI_CLASS_IMAGES.jwpIcon}
                alt="Joint Women's Programme logo"
                className="w-16 h-16 object-contain mb-3"
              />
              <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
                Joint Women&apos;s Programme
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              This summer, help a child reach their first day of school 🎒
            </h1>

            <figure className="mb-8 w-full">
              <img
                src="https://res.cloudinary.com/dcdhhylin/image/upload/v1779181640/images/pehli-class/JWP-PehliClass.webp"
                alt="JWP children at Mera Sahara — #PehliClass bridge to first formal school"
                className="w-full h-auto rounded-lg"
              />
            </figure>

            <p className="text-base font-semibold text-gray-800 mb-5">Dear Changemaker,</p>

            <div className="space-y-4 text-gray-700 leading-relaxed text-[15px] mb-10">
              <p>
                Every Indian parent cherishes the memory. The new uniform. The lunchbox. The slightly too-big bag.{' '}
                <strong>The first day of school.</strong>
              </p>
              <p>
                For most children, it happens. For thousands in the communities we work in, it doesn&apos;t — not because their families don&apos;t want it, but because the system asks for things they don&apos;t have. A first-generation learner falls behind early. A birth certificate goes missing. A year is lost. A school gate stays shut.
              </p>
              <p>
                The <strong>Joint Women&apos;s Programme</strong> has spent forty-eight years working alongside India&apos;s most vulnerable women and children.{' '}
                <strong>#PehliClass</strong> is our campaign to put children from underprivileged backgrounds into formal school, where they belong, on time. It is focused, finite, and every child we reach can be counted.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-base font-bold text-gray-900 mb-3">Who we&apos;re doing this for</h2>
              <div className="space-y-3 text-[15px] text-gray-700 leading-relaxed">
                <p>
                  The children we serve are first-generation learners, dropouts, and children who have never set foot in a classroom. Many were turned away because their families are poor and marginalised, or because a document was missing — a Birth Certificate, an Aadhaar card, a Transfer Certificate, a Permanent Education Number — and because no one had ever helped them close the learning gap.
                </p>
                <p>
                  Some are six, knocking on the gate of a school that wants paperwork their parents don&apos;t have. Some are twelve, never schooled, and told they are already too late. Others are adolescent girls pulled out because a younger brother&apos;s education came first. Without a hand to walk them across, they fall further behind, and the cycle continues.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-base font-bold text-gray-900 mb-3">The promise: one year, then a real classroom</h2>
              <div className="space-y-3 text-[15px] text-gray-700 leading-relaxed">
                <p>
                  At our <strong>Mera Sahara Bridge Learning Centre</strong> in Nithari, Noida, every child stays for a maximum of one year. In that year we close the academic gap, secure the missing documentation, and walk them through the gates of a government or private school — into their <em>pehli</em> formal class, on time. For adolescent girls who cannot attend a regular school, we open pathways through open schooling (NIOS, Classes 9–12) and higher education (IGNOU), so even the girls forced out by family responsibilities have a way through.
                </p>
              </div>

              <figure className="mt-5 w-full">
                <CloudinaryImage
                  src={PEHLI_CLASS_IMAGES.promiseOneYearInfographic}
                  alt="#PehliClass at a glance — 12 months from out-of-school to first formal class"
                  className="w-full h-auto rounded-lg"
                  width={720}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 65vw, 720px"
                />
              </figure>

              <p className="mt-5 text-[15px] text-gray-700 leading-relaxed">
                <strong>It takes ₹19,000 to bridge one child into a mainstream classroom for a full year.</strong> We are not asking you for that today. We are asking for something that goes further: <strong>your voice.</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-base font-bold text-gray-900 mb-3">What it means to champion the cause</h2>
              <p className="text-[15px] text-gray-700 leading-relaxed mb-5">
                A Champion does not need to fundraise or donate. You simply help the right people find <strong>#PehliClass</strong> — by sharing it with your circle, telling the story in your own words, and rallying the people who would want to help. One voice, shared honestly, can reach the person who funds a child&apos;s entire year.
              </p>

              <figure className="w-full">
                <CloudinaryImage
                  src={PEHLI_CLASS_IMAGES.championSponsorshipCard}
                  alt="What your sponsorship covers — ₹1,600 per month per child"
                  className="w-full h-auto rounded-lg"
                  width={720}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 65vw, 720px"
                />
              </figure>
            </section>

            <section className="mb-8">
              <h2 className="text-base font-bold text-gray-900 mb-3">Why #PehliClass, why now</h2>
              <p className="text-[15px] text-gray-700 leading-relaxed mb-5">
                A child&apos;s right to education is enshrined in our Constitution under the Right to Education Act. But for thousands of children, that right still needs a hand to walk them across — past the learning gaps, the missing paperwork, the dropped years, and the closed gates. That hand has been the Joint Women&apos;s Programme for forty-eight years.
              </p>

              <figure className="w-full">
                <img
                  src="https://res.cloudinary.com/dcdhhylin/image/upload/v1782041135/images/pehli-class/App-BannerW.png"
                  alt="Students at the Mera Sahara Centre, Noida, being prepared for their #PehliClass"
                  className="w-full h-auto rounded-lg"
                />
                <figcaption className="text-xs text-gray-500 mt-2 text-center italic">
                  Students at the Mera Sahara Centre, Noida, being prepared for their #PehliClass.
                </figcaption>
              </figure>
            </section>

            <p className="text-[15px] font-semibold text-gray-900 mb-8">
              Champion the cause. Share it with someone who should see it. Help us reach the next child.
            </p>

            {/* President letter */}
            <figure className="mb-8 w-full bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
              <CloudinaryImage
                src={PEHLI_CLASS_IMAGES.presidentLetter}
                alt="Letter of recognition from the Honourable President of India — Joint Women's Programme"
                className="w-full h-auto rounded-md"
                width={720}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 65vw, 720px"
              />
              <figcaption className="text-xs text-gray-500 mt-2 text-center italic">
                Letter of recognition from the Honourable President of India.
              </figcaption>
            </figure>

            <section className="mb-8">
              <h2 className="text-base font-bold text-gray-900 mb-3">About Us</h2>
              <p className="text-[15px] text-gray-700 leading-relaxed mb-4">
                With over 48 years of grassroots impact and policy advocacy, we are proud to have contributed to landmark legislation — the Women&apos;s Reservation Bill, laws to combat gender-based violence, and menstrual hygiene policy. We are proud to stand alongside changemakers like you to build a more just and inclusive world for girls.
              </p>
              <p className="text-[15px] text-gray-700 mb-1 font-semibold">Registration Certificate and other credentials:</p>
              <a
                href="https://jwpindia.org/certificates/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-blue-600 hover:underline"
              >
                https://jwpindia.org/certificates/
              </a>
            </section>

            {/* Share row */}
            <section className="mb-4">
              <p className="text-[15px] font-semibold text-gray-800 mb-3">Share this on:</p>
              <div className="flex items-center gap-3 flex-wrap">
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#3b5998] hover:opacity-90 flex items-center justify-center transition-opacity"
                  aria-label="Share on Facebook">
                  <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <a href={twitterUrl} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1da1f2] hover:opacity-90 flex items-center justify-center transition-opacity"
                  aria-label="Share on Twitter">
                  <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/></svg>
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#25d366] hover:opacity-90 flex items-center justify-center transition-opacity"
                  aria-label="Share on WhatsApp">
                  <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0077b5] hover:opacity-90 flex items-center justify-center transition-opacity"
                  aria-label="Share on LinkedIn">
                  <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href={emailUrl}
                  className="w-10 h-10 rounded-full bg-[#ea4335] hover:opacity-90 flex items-center justify-center transition-opacity"
                  aria-label="Share via Email">
                  <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </a>
              </div>
            </section>

            <div className="mt-6">
              <Link to="/pehli-class-cause-details" className="text-sm text-green-700 font-semibold hover:underline">
                Learn more about #PehliClass →
              </Link>
            </div>
          </main>

          {/* ── Right: Sticky form (desktop only) ── */}
          <aside className="hidden lg:block lg:col-span-1 order-1 lg:order-2" id="champion-form">
            <div ref={formRef} className="lg:sticky lg:top-28">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col">
                <div className="shrink-0 px-6 pt-4 pb-3 border-b border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900">Champion the Cause 🎒</h2>
                </div>
                <FormBody
                  isSubmitted={isSubmitted}
                  setIsSubmitted={setIsSubmitted}
                  form={form}
                  fieldErrors={fieldErrors}
                  submitError={submitError}
                  isSubmitting={isSubmitting}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  inputClass={inputClass}
                  whatsappUrl={whatsappUrl}
                />
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ── Mobile: sticky bottom bar ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
        <PrimaryButton
          type="button"
          size="md"
          className="w-full justify-center"
          onClick={() => setMobileFormOpen(true)}
        >
          Champion the Cause 🎒
        </PrimaryButton>
      </div>

      {/* ── Mobile: form bottom-sheet modal ── */}
      <AnimatePresence>
        {mobileFormOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setMobileFormOpen(false)}
            />
            {/* Sheet */}
            <motion.div
              className="relative bg-white rounded-t-2xl shadow-2xl flex flex-col max-h-[92dvh]"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-gray-100 shrink-0">
                <h2 className="text-base font-bold text-gray-900">Champion the Cause 🎒</h2>
                <button
                  type="button"
                  onClick={() => setMobileFormOpen(false)}
                  className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="overflow-y-auto flex-1 min-h-0">
                <FormBody
                  isSubmitted={isSubmitted}
                  setIsSubmitted={(v) => { setIsSubmitted(v); if (!v) setMobileFormOpen(false); }}
                  form={form}
                  fieldErrors={fieldErrors}
                  submitError={submitError}
                  isSubmitting={isSubmitting}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  inputClass={inputClass}
                  whatsappUrl={whatsappUrl}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PehliClassCauseChampionPage;

import { School, Building2, Presentation, CalendarRange, FileCheck, Compass } from 'lucide-react';

const schoolProjectIdeas = [
  {
    title: 'Integrated / multidisciplinary project',
    grades: 'Often Classes 9–12',
    detail:
      'Pick one verified live cause (education, welfare, or relief). Students produce a brief NGO fact-file, a consent-safe awareness poster series, and a class presentation that cites only official partner pages.',
    outputs: 'Printed/digital display · oral presentation · bibliography of verified sources',
  },
  {
    title: 'Inter-house or inter-class challenge',
    grades: 'Whole school',
    detail:
      'Each house adopts a campaign page target for two weeks: measurable goal, daily tally transparency, and a closing assembly shout-out—donations flow through The Giving Circle rails only.',
    outputs: 'Leaderboard · assembly script · screenshot-based reconciliation summary for faculty',
  },
  {
    title: 'Social awareness exhibition',
    grades: 'Middle & senior school',
    detail:
      'Science-fair style booths: “problem–partner–pathway to help” for one NGO programme; include QR to the canonical campaign URL, not personal payment IDs.',
    outputs: 'Booth rubric · FAQ for parents · student explainer one-pagers',
  },
  {
    title: 'Literacy & bridge-learning ally project',
    grades: 'Senior school',
    detail:
      'Pair awareness with programmes like bridge centres or out-of-school enrolment (#PehliClass-style narratives where listed). Focus on dignity-led storytelling and verified statistics.',
    outputs: 'Newsletter edition · peer quiz · optional read-a-thon pledge tied to a listed cause',
  },
];

const collegeProjectIdeas = [
  {
    title: 'Society / fest CSR lane',
    detail:
      'Tech-cultural or departmental societies host one “verified cause lane”: pledge wall, merch where permitted, and a single flagship evening plug—all linking back to live campaigns.',
    outputs: 'Run-of-show · sponsor pitch deck · post-event impact recap email',
  },
  {
    title: 'Winter / summer project report',
    detail:
      'Individual or pair project: map a real NGO programme’s theory of change using only materials from the partner listing + interviews coordinated through faculty.',
    outputs: '15–20 page report · annex of official links · ethics & consent appendix',
  },
  {
    title: 'Communications & design sprint',
    detail:
      'Short sprint rebuilding donor-facing copy for one campaign: headlines, Instagram carousel storyboards, and accessibility checks—reviewed against partner messaging.',
    outputs: 'Brand guidelines adherence checklist · A/B caption set · analytics plan mock',
  },
];

const eightWeekArc = [
  { week: 'Weeks 1–2', task: 'Choose a listed cause; faculty confirms alignment with school policy; read partner FAQ end-to-end.' },
  { week: 'Weeks 3–4', task: 'Consent training for photos/quotes; draft assembly script; open official donation goal on platform.' },
  { week: 'Weeks 5–6', task: 'Peer outreach window: class visits, notice boards, structured WhatsApp groups with approved links only.' },
  { week: 'Weeks 7–8', task: 'Close loop: thank-you template to donors, reflection essays, archive screenshots for project file.' },
];

const deliverables = [
  'Reflective journal (individual) with ethics prompts supplied in onboarding.',
  'Funds trail: only official campaign URLs; informal cash collections discouraged.',
  'Media consent log where faces or campus branding appear.',
  'Faculty sign-off sheet where your institution requires it.',
];

export default function SchoolAndCollegeProjects() {
  return (
    <section className="py-14 sm:py-16 bg-white border-y border-gray-100" aria-labelledby="young-champions-school-projects">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="inline-flex rounded-lg bg-green-700 text-white p-2.5">
            <School size={22} aria-hidden />
          </span>
          <h2 id="young-champions-school-projects" className="text-2xl sm:text-3xl font-bold text-gray-900">
            School projects, exhibitions &amp; college initiatives
          </h2>
        </div>
        <div className="w-16 h-1 bg-green-700 mb-6" aria-hidden />
        <p className="text-gray-600 max-w-3xl mb-6 leading-relaxed">
          Most Young Champions pages fold into something graded, exhibited, or audited by a club faculty mentor. Below are reusable project shells—adapt wording to your board, principal&apos;s office, or dean&apos;s checklist.
        </p>

        <div
          className="rounded-xl border border-amber-200 bg-amber-50/80 p-4 sm:p-5 mb-12 flex gap-3"
          role="note"
        >
          <Compass className="text-amber-700 shrink-0 mt-0.5" size={20} aria-hidden />
          <p className="text-sm sm:text-base text-amber-950 leading-relaxed">
            <strong className="font-semibold">Alignment note:</strong> CBSE, ICSE, IB, and state boards vary on service-learning labels and CAS-style portfolios. We provide{' '}
            <strong className="font-semibold">verified NGO briefs and ethical fundraising rails</strong>—your school or college confirms whether a given outline meets internal rubrics.
          </p>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Presentation className="text-green-700 shrink-0" size={22} aria-hidden />
          School-level project ideas
        </h3>
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {schoolProjectIdeas.map((p) => (
            <article
              key={p.title}
              className="rounded-xl border border-gray-100 bg-gray-50/90 p-6 shadow-sm hover:border-green-200 transition-colors"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-green-800 mb-1">{p.grades}</p>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h4>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">{p.detail}</p>
              <p className="text-xs sm:text-sm text-gray-500 border-t border-gray-200 pt-3">
                <span className="font-semibold text-gray-700">Typical outputs:</span> {p.outputs}
              </p>
            </article>
          ))}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Building2 className="text-green-700 shrink-0" size={22} aria-hidden />
          College &amp; campus projects
        </h3>
        <ul className="space-y-5 mb-14">
          {collegeProjectIdeas.map((p) => (
            <li key={p.title} className="rounded-xl bg-gray-50 border border-gray-100 p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h4>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">{p.detail}</p>
              <p className="text-xs sm:text-sm text-gray-500">
                <span className="font-semibold text-gray-700">Sample outputs:</span> {p.outputs}
              </p>
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <CalendarRange className="text-green-700 shrink-0" size={22} aria-hidden />
          Sample 8-week school project arc
        </h3>
        <ol className="space-y-4 mb-14 max-w-3xl">
          {eightWeekArc.map((row) => (
            <li key={row.week} className="flex gap-4">
              <span className="shrink-0 font-bold text-green-700 min-w-[6.5rem] sm:min-w-[7.5rem]">{row.week}</span>
              <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{row.task}</span>
            </li>
          ))}
        </ol>

        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <FileCheck className="text-green-700 shrink-0" size={22} aria-hidden />
          Deliverables faculties commonly ask for
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base max-w-3xl mb-8">
          {deliverables.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        <p className="text-sm text-gray-500 max-w-3xl leading-relaxed">
          Need a formal project synopsis or MOU-style letter for your principal? Complete Cause Champion onboarding and mention &ldquo;school or college project mode&rdquo;—we route templates where available.
        </p>
      </div>
    </section>
  );
}

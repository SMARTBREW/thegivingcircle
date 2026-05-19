import { GraduationCap, ClipboardCheck, Lightbulb } from 'lucide-react';

const rows = [
  {
    icon: GraduationCap,
    heading: 'Schools & colleges',
    text: 'Student councils, NSS-style service wings, international-school CAS portfolios, and clubs can adopt a verified cause for the term—pair with the exhibition and inter-house templates above.',
  },
  {
    icon: ClipboardCheck,
    heading: 'Projects & internships',
    text: 'Use real fundraising and communications briefs: donor messaging, transparency checks, and impact reporting—the same muscles NGOs need daily.',
  },
  {
    icon: Lightbulb,
    heading: 'Safety & integrity',
    text: 'We emphasize consent-forward storytelling, accurate claims, and routing donations through official campaign pages—no informal collections without partner alignment.',
  },
];

export default function AcademicIntegration() {
  return (
    <section className="py-14 sm:py-16 bg-gray-50" aria-labelledby="young-champions-academic">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="young-champions-academic" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Built for academic &amp; volunteer hour contexts
        </h2>
        <div className="w-16 h-1 bg-green-700 mb-8" aria-hidden />
        <p className="text-gray-600 max-w-3xl mb-10 leading-relaxed">
          Coordinators and faculty can point students to a single trusted hub: live causes, verified NGO context, and a champion onboarding flow
          that keeps expectations clear.
        </p>
        <div className="space-y-6">
          {rows.map(({ icon: Icon, heading, text }) => (
            <div
              key={heading}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 rounded-xl bg-white border border-gray-100 p-6 shadow-sm"
            >
              <div className="shrink-0">
                <span className="inline-flex rounded-lg bg-green-50 text-green-800 p-3 border border-green-100">
                  <Icon size={24} aria-hidden />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{heading}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

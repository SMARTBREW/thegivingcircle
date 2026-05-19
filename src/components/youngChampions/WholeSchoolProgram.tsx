import { UsersRound, CalendarDays, Mail } from 'lucide-react';

const tracks = [
  {
    icon: CalendarDays,
    title: 'Annual service week',
    body: 'Lock one week per term: assembly kick-off, daily 10-minute “cause facts”, and a Friday tally shared with parents via official channels.',
  },
  {
    icon: UsersRound,
    title: 'Teacher–student champion pair',
    body: 'Nominate one faculty liaison + two student leads per wing; they share access to updated NGO FAQs and fundraising milestones.',
  },
  {
    icon: Mail,
    title: 'Parent & PTA note pack',
    body: 'Approved copy blocks explaining 80G eligibility where stated, official links only, and how to verify receipts—reduces informal collections.',
  },
];

export default function WholeSchoolProgram() {
  return (
    <section className="py-14 sm:py-16 bg-gray-50" aria-labelledby="young-champions-whole-school">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="young-champions-whole-school" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Whole-school &amp; PTA-friendly programmes
        </h2>
        <div className="w-16 h-1 bg-green-700 mb-8" aria-hidden />
        <p className="text-gray-600 max-w-3xl mb-10 leading-relaxed">
          Heads of service learning often want repeatable calendars—not one hero student. These tracks mirror what Indian schools run alongside NSS-style wings or international CAS portfolios (confirm naming with your administration).
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {tracks.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-xl bg-white border border-gray-100 p-6 shadow-sm">
              <Icon className="text-green-700 mb-4" size={28} aria-hidden />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

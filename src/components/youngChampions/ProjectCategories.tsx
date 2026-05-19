import { Megaphone, HeartHandshake, BookOpen, Users } from 'lucide-react';

const items = [
  {
    icon: Megaphone,
    title: 'Awareness & storytelling',
    body: 'Host talks, reels, or newsletter spots that explain verified NGOs and why structured giving matters.',
  },
  {
    icon: HeartHandshake,
    title: 'Peer fundraising',
    body: 'Run time-bound drives for live campaigns—with clear goals, receipts where eligible, and impact updates.',
  },
  {
    icon: BookOpen,
    title: 'Education & literacy allies',
    body: 'Pair with programmes like bridge learning and school readiness; share verified facts, not noise.',
  },
  {
    icon: Users,
    title: 'Campus circles',
    body: 'Form a giving circle with classmates: small recurring gifts + one flagship event per term.',
  },
];

export default function ProjectCategories() {
  return (
    <section className="py-14 sm:py-16 bg-white border-y border-gray-100" aria-labelledby="young-champions-ways">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="young-champions-ways" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Ways Young Champions contribute
        </h2>
        <div className="w-16 h-1 bg-green-700 mb-8" aria-hidden />
        <p className="text-gray-600 max-w-3xl mb-10 leading-relaxed">
          Pick what fits your schedule. Every path connects back to verified partners on The Giving Circle—so your effort converts into
          accountable support on the ground.
        </p>
        <ul className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {items.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="rounded-xl border border-gray-100 bg-gray-50/80 p-6 shadow-sm hover:border-green-200 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="rounded-lg bg-green-700 text-white p-3 shrink-0">
                  <Icon size={22} aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{body}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

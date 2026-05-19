import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const steps = [
  {
    n: '1',
    title: 'Browse & align',
    body: 'Pick a live cause your network cares about—education, welfare, or relief—and read the partner facts.',
  },
  {
    n: '2',
    title: 'Register',
    body: 'Complete Cause Champion onboarding so we can support you with messaging guardrails and updates.',
  },
  {
    n: '3',
    title: 'Mobilise',
    body: 'Launch your campus push: small donations, one flagship moment, and clear links to the official campaign.',
  },
];

export default function YoungChampionsGetStarted() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-green-700 to-green-900 text-white" aria-labelledby="young-champions-start">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="young-champions-start" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Ready to start?
        </h2>
        <p className="text-green-100 text-lg max-w-2xl mb-10 leading-relaxed">
          Three simple moves—from curiosity to a coordinated Young Champions effort—with The Giving Circle backing verified routes only.
        </p>
        <ol className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((s) => (
            <li key={s.n} className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-green-800 font-bold mb-4">
                {s.n}
              </span>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-green-100 text-sm leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          <Link
            to="/onboarding"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-green-800 font-bold px-8 py-4 hover:bg-green-50 transition-colors shadow-lg"
          >
            Start champion onboarding
            <ChevronRight size={20} aria-hidden />
          </Link>
          <Link
            to="/about-champion"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/80 text-white font-semibold px-8 py-4 hover:bg-white/10 transition-colors"
          >
            Read about Cause Champions
          </Link>
        </div>
      </div>
    </section>
  );
}

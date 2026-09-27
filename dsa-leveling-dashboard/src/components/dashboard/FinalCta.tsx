import { ArrowRight, BarChart3, Sparkles, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { icon: Users, value: '10K+', label: 'Learners Worldwide' },
  { icon: Sparkles, value: '500+', label: 'DSA Problems' },
  { icon: Trophy, value: '6', label: 'Hunter Ranks' },
  { icon: BarChart3, value: '∞', label: 'Growth Opportunities' },
];

export function FinalCta() {
  return (
    <section className="landing-section relative overflow-hidden border-t border-white/[0.05] bg-[#080810] px-5 pb-24 pt-16 sm:px-8 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(124,58,237,.18),transparent_48%)]" />
      <div className="glass-cta relative mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-9 rounded-3xl border border-violet-300/15 px-7 py-10 sm:px-10 sm:py-12 lg:flex-row">
        <div className="text-center lg:text-left">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[.18em] text-violet-300">Your next chapter</p>
          <h2 className="font-display text-4xl leading-none text-white sm:text-[42px]">Ready to Begin Your Journey?</h2>
          <p className="mt-2 text-sm text-zinc-400">Join thousands of learners and start leveling up your DSA skills today.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(124,58,237,.3)] transition hover:-translate-y-0.5"
            >
              Start Your Journey <ArrowRight size={17} />
            </Link>
            <Link
              to="/login"
              className="rounded-xl border border-violet-200/40 px-6 py-3 text-sm font-medium text-white transition hover:border-violet-200/70 hover:bg-white/[0.04]"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="grid w-full max-w-[520px] grid-cols-2 gap-5 sm:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon size={21} className="mx-auto text-violet-400" strokeWidth={1.7} />
              <p className="mt-2 text-lg font-semibold text-white">{value}</p>
              <p className="mt-0.5 text-[9px] leading-3 text-zinc-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

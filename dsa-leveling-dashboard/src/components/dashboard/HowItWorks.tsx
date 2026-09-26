import { ArrowRight, BookOpen, Code2, Crown, Shield, Swords, Trophy } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const steps = [
  { icon: BookOpen, title: 'Follow Roadmap', description: 'Structured DSA journey from basics to advanced' },
  { icon: Swords, title: 'Enter Dungeons', description: 'Each topic is a dungeon with challenges' },
  { icon: Code2, title: 'Solve Problems', description: 'Solve handpicked DSA problems' },
  { icon: Shield, title: 'Earn XP & Level Up', description: 'Gain XP, level up and rank up' },
  { icon: Trophy, title: 'Unlock Rewards', description: 'Get avatars, titles, badges and more' },
  { icon: Crown, title: 'Defeat Bosses', description: 'Clear final challenges to unlock next dungeon' },
];

export function HowItWorks() {
  return (
    <section id="about" className="landing-section border-b border-white/[0.04] bg-[#07070e] px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading title="How It Works" subtitle="A simple and engaging journey to master DSA" />
      <div className="mx-auto mt-12 flex max-w-[1180px] items-stretch gap-3 overflow-x-auto pb-3 scrollbar-thin lg:gap-4 lg:overflow-visible">
        {steps.map(({ icon: Icon, title, description }, index) => (
          <div key={title} className="flex min-w-[158px] flex-1 items-center gap-2 lg:min-w-0">
            <article className="glass-card group w-full rounded-2xl border border-violet-300/15 bg-gradient-to-b from-white/[0.07] to-white/[0.015] px-4 py-6 text-center transition duration-300 hover:-translate-y-1 hover:border-violet-300/45 hover:bg-violet-500/[0.08]">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl border border-violet-300/15 bg-violet-400/[0.07] text-violet-300 drop-shadow-[0_0_14px_rgba(139,92,246,.3)] transition group-hover:text-violet-100">
                <Icon size={31} strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 text-[12px] font-bold text-white">{title}</h3>
              <p className="mt-2 text-[10px] leading-4 text-zinc-400">{description}</p>
            </article>
            {index < steps.length - 1 && <ArrowRight className="hidden shrink-0 text-violet-300 lg:block" size={16} />}
          </div>
        ))}
      </div>
    </section>
  );
}

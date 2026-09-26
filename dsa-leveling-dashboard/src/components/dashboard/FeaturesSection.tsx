import { Award, BarChart3, BookOpen, FileBadge, Gamepad2, Image, Map, Sparkles, Trophy, Code2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const features = [
  { icon: Gamepad2, title: 'Gamified Learning', description: 'Turn your DSA preparation into an exciting leveling experience.' },
  { icon: Map, title: 'Structured Roadmap', description: 'A clear, step-by-step journey from beginner to advanced.' },
  { icon: Code2, title: 'Handpicked Problems', description: 'High quality problems sorted by topic and difficulty.' },
  { icon: BarChart3, title: 'Progress Tracking', description: 'Track your XP, level, rank and overall progress.' },
  { icon: Image, title: 'Avatars & Rewards', description: 'Unlock unique avatars, titles and badges.' },
  { icon: Trophy, title: 'Leaderboards', description: 'Compete with a global community of learners.' },
  { icon: FileBadge, title: 'Certificates', description: 'Get a verified certificate after completing the journey.' },
  { icon: Sparkles, title: 'Minimal & Focused', description: 'A clean, distraction free interface designed for deep learning.' },
];

export function FeaturesSection() {
  return (
    <section id="features" className="landing-section bg-[#090916] px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading title="Key Features" subtitle="Everything you need to make DSA learning effective and fun" />
      <div className="mx-auto mt-12 grid max-w-[1180px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, description }) => (
          <article key={title} className="glass-card group flex min-h-[142px] items-start gap-4 rounded-2xl border border-violet-300/15 bg-white/[0.035] p-5 transition duration-300 hover:border-violet-300/40 hover:bg-violet-500/[0.07]">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-violet-400/20 bg-violet-500/[0.1] text-violet-300 transition group-hover:border-violet-300/50 group-hover:text-white">
              <Icon size={22} strokeWidth={1.6} />
            </div>
            <div>
              <h3 className="text-[13px] font-bold text-white">{title}</h3>
              <p className="mt-2 text-[11px] leading-5 text-zinc-400">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

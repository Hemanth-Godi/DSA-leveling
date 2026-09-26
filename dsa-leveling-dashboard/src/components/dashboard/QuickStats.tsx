import { Flame, Swords, Target, Zap } from 'lucide-react';
import { user } from '../../data/mockDashboard';
import { GlassCard } from './GlassCard';

const stats = [
  { label: 'Problems Solved', value: user.problemsSolved, icon: Target },
  { label: 'Current Streak', value: `${user.streak} days`, icon: Flame },
  { label: 'Dungeons Cleared', value: user.dungeonsCleared, icon: Swords },
  { label: 'Total XP', value: user.currentXp.toLocaleString(), icon: Zap },
];

export function QuickStats() {
  return (
    <section aria-labelledby="quick-stats-title">
      <h2 id="quick-stats-title" className="sr-only">Quick stats</h2>
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <GlassCard key={label} className="group p-4 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/20 hover:bg-white/[0.05]">
            <div className="mb-4 grid h-8 w-8 place-items-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-zinc-400 transition group-hover:border-violet-400/20 group-hover:text-violet-300"><Icon size={16} /></div>
            <p className="text-lg font-semibold text-white sm:text-xl">{value}</p>
            <p className="mt-1 text-xs text-zinc-500">{label}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

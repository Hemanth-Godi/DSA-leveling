import type { LeaderboardMetric } from '../../types/leaderboard';

const tabs: Array<{ value: LeaderboardMetric; label: string }> = [
  { value: 'xp', label: 'Global XP' },
  { value: 'problemsSolved', label: 'Problems Solved' },
  { value: 'dungeonsCleared', label: 'Dungeons Cleared' },
  { value: 'streak', label: 'Streak' },
];

export function LeaderboardTabs({ metric, onChange }: { metric: LeaderboardMetric; onChange: (metric: LeaderboardMetric) => void }) {
  return <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin" role="tablist" aria-label="Leaderboard ranking system">
    {tabs.map((tab) => <button key={tab.value} role="tab" aria-selected={metric === tab.value} onClick={() => onChange(tab.value)} className={`shrink-0 rounded-xl border px-4 py-2.5 text-[11px] font-bold uppercase tracking-[.1em] transition ${metric === tab.value ? 'border-violet-300/50 bg-violet-400/15 text-violet-100 shadow-[0_0_22px_rgba(167,139,250,.12)]' : 'border-white/[.08] bg-white/[.025] text-zinc-400 hover:border-violet-300/25 hover:bg-violet-400/[.06] hover:text-white'}`}>{tab.label}</button>)}
  </div>;
}

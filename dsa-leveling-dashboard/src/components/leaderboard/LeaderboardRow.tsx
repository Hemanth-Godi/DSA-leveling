import { Crown, Medal } from 'lucide-react';
import { RankEmblem } from '../dashboard/RankEmblem';
import type { LeaderboardHunter, LeaderboardMetric } from '../../types/leaderboard';

const scoreLabels: Record<LeaderboardMetric, string> = { xp: 'XP', problemsSolved: 'Solved', dungeonsCleared: 'Cleared', streak: 'Days' };

function scoreFor(hunter: LeaderboardHunter, metric: LeaderboardMetric) {
  const value = hunter[metric];
  return metric === 'xp' ? value.toLocaleString() : `${value}`;
}

export function LeaderboardRow({ hunter, position, metric }: { hunter: LeaderboardHunter; position: number; metric: LeaderboardMetric }) {
  const topThree = position <= 3;
  return <div className={`grid grid-cols-[36px_minmax(0,1fr)_50px_72px] items-center gap-2 px-3 py-3.5 sm:grid-cols-[54px_minmax(0,1fr)_76px_104px] sm:gap-4 sm:px-5 ${hunter.isCurrentUser ? 'border-y border-violet-300/35 bg-violet-400/[.09]' : 'border-b border-white/[.06]'} ${topThree ? 'bg-white/[.018]' : ''}`}>
    <div className={`flex items-center gap-1 text-sm font-bold ${position === 1 ? 'text-amber-300' : position === 2 ? 'text-zinc-300' : position === 3 ? 'text-orange-300' : 'text-zinc-500'}`}>{position === 1 ? <Crown size={16} /> : topThree ? <Medal size={15} /> : null}<span>{String(position).padStart(2, '0')}</span></div>
    <div className="flex min-w-0 items-center gap-3"><img src={hunter.avatar} alt="" className="h-9 w-9 shrink-0 rounded-full border border-white/15 object-cover sm:h-10 sm:w-10" /><div className="min-w-0"><p className="truncate text-sm font-bold text-white">{hunter.username}</p>{hunter.isCurrentUser && <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[.13em] text-violet-300">You</p>}</div></div>
    <div className="flex justify-center"><RankEmblem rank={hunter.rank} size="sm" /></div>
    <div className="text-right"><p className="text-sm font-bold text-white">{scoreFor(hunter, metric)}</p><p className="mt-0.5 text-[9px] font-bold uppercase tracking-[.12em] text-zinc-500">{scoreLabels[metric]}</p></div>
  </div>;
}

import { Shield } from 'lucide-react';
import type { CSSProperties } from 'react';
import { GlassCard } from './GlassCard';
import { RankEmblem } from './RankEmblem';
import { user } from '../../data/mockDashboard';

export function HunterStatus() {
  const progress = Math.round((user.currentXp / user.nextLevelXp) * 100);
  const remaining = user.nextLevelXp - user.currentXp;

  return (
    <GlassCard className="relative overflow-hidden p-5 sm:p-6">
      <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="relative flex items-start justify-between gap-5">
        <div className="min-w-0">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500"><Shield size={13} className="text-violet-400" />Current hunter</div>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{user.username}</h2>
          <p className="mt-1 text-sm text-zinc-400"><span className="font-medium text-violet-300">{user.rank}-Rank</span> <span className="mx-1 text-zinc-700">·</span> Level {user.level}</p>
          <div className="mt-6 max-w-xl">
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="text-zinc-400">XP Progress</span>
              <span className="font-medium text-zinc-200">{user.currentXp.toLocaleString()} / {user.nextLevelXp.toLocaleString()} XP</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
              <div className="xp-fill h-full rounded-full bg-gradient-to-r from-violet-600 via-violet-400 to-indigo-400" style={{ '--xp': `${progress}%` } as CSSProperties} />
            </div>
            <p className="mt-2 text-[11px] text-zinc-600">{remaining} XP to Level {user.level + 1}</p>
          </div>
        </div>
        <RankEmblem rank={user.rank} size="lg" />
      </div>
    </GlassCard>
  );
}

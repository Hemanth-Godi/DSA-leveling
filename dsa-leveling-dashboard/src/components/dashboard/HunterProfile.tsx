import { Shield, Flame, Target, Swords, Zap } from 'lucide-react';
import type { CSSProperties } from 'react';
import { GlassCard } from './GlassCard';
import { RankEmblem } from './RankEmblem';
import { Avatar } from './Avatar';
import type { UserStats, Rank } from '../../types/dashboard';

interface HunterProfileProps {
  user: UserStats;
  avatar?: string;
}

const rankLabels: Record<Rank, string> = {
  E: 'Novice',
  D: 'Apprentice',
  C: 'Adept',
  B: 'Expert',
  A: 'Master',
  S: 'Legendary',
};

export function HunterProfile({ user, avatar }: HunterProfileProps) {
  const progress = Math.round((user.currentXp / user.nextLevelXp) * 100);
  const remaining = user.nextLevelXp - user.currentXp;

  return (
    <GlassCard className="relative overflow-hidden p-5 sm:p-6">
      <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="relative flex flex-col items-center text-center sm:flex-row sm:items-start sm:justify-between sm:text-left gap-6">
        <div className="flex flex-col items-center sm:items-start min-w-0">
          <div className="mb-3 flex items-center justify-center gap-2 sm:justify-start text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            <Shield size={13} className="text-violet-400" />
            Current Hunter
          </div>
          <Avatar size="lg" />
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{user.username}</h2>
          <p className="mt-1 text-sm text-zinc-400">
            <span className="font-medium text-violet-300">{user.rank}-Rank {rankLabels[user.rank]}</span>
            <span className="mx-1 text-zinc-700">·</span>
            Level {user.level}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 w-full sm:w-auto">
          <RankEmblem rank={user.rank} size="lg" />
          
          <div className="w-full max-w-xl">
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="text-zinc-400">XP Progress</span>
              <span className="font-medium text-zinc-200">{user.currentXp.toLocaleString()} / {user.nextLevelXp.toLocaleString()} XP</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
              <div className="xp-fill h-full rounded-full bg-gradient-to-r from-violet-600 via-violet-400 to-indigo-400 transition-all duration-1000" style={{ width: `${progress}%` } as CSSProperties} />
            </div>
            <p className="mt-2 text-[11px] text-zinc-600">{remaining} XP to Level {user.level + 1}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: 'Problems Solved', value: user.problemsSolved, icon: Target, color: 'text-violet-300' },
          { label: 'Current Streak', value: `${user.streak} days`, icon: Flame, color: 'text-fuchsia-300' },
          { label: 'Dungeons Cleared', value: user.dungeonsCleared, icon: Swords, color: 'text-cyan-300' },
          { label: 'Total XP', value: user.currentXp.toLocaleString(), icon: Zap, color: 'text-amber-300' },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] transition hover:border-violet-400/20 hover:bg-white/[0.04]">
            <div className="grid h-9 w-9 place-items-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-zinc-500">
              <Icon size={17} strokeWidth={1.7} className={color} />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">{value}</p>
              <p className="text-[10px] text-zinc-500">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
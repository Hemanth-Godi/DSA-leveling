import { ArrowRight, Check, Lock, ChevronRight } from 'lucide-react';
import { GlassCard } from '../dashboard/GlassCard';
import { RankEmblem } from '../dashboard/RankEmblem';
import type { RankReward } from '../../types/rewards';

const rankLabels: Record<string, string> = {
  E: 'Novice',
  D: 'Apprentice',
  C: 'Adept',
  B: 'Expert',
  A: 'Master',
  S: 'Legendary',
};

interface HunterRanksProps {
  ranks: RankReward[];
}

export function HunterRanks({ ranks }: HunterRanksProps) {
  return (
    <GlassCard className="p-5 sm:p-6">
      <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Hunter Ranks</p>
      <div className="flex items-center overflow-x-auto pb-2 gap-2">
        {ranks.map((rank, index) => {
          const past = ranks.slice(0, index).some(r => r.status === 'unlocked');
          const current = rank.status === 'current';
          const future = rank.status === 'locked';
          return (
            <div key={rank.rank} className="flex min-w-[70px] flex-1 items-center justify-center last:flex-none">
              <div className={`flex flex-col items-center gap-2 ${current ? 'scale-105' : ''} transition-all duration-300`}>
                <div className={`relative ${current ? 'rounded-full bg-violet-500/15 shadow-[0_0_24px_rgba(139,92,246,.25)]' : ''}`}>
                  <RankEmblem rank={rank.rank as 'E' | 'D' | 'C' | 'B' | 'A' | 'S'} size="md" />
                  {current && (
                    <div className="absolute inset-0 rounded-full border-2 border-violet-400/50 animate-pulse-subtle" />
                  )}
                </div>
                <span className={`text-[9px] font-semibold tracking-widest ${
                  current ? 'text-violet-300' : past ? 'text-zinc-400' : 'text-zinc-700'
                }`}>{rank.rank}</span>
                <span className={`text-[8px] font-medium uppercase tracking-wider ${
                  current ? 'text-violet-400' : past ? 'text-emerald-400' : 'text-zinc-600'
                }`}>
                  {current ? 'Current' : past ? 'Cleared' : 'Locked'}
                </span>
                {rankLabels[rank.rank] && (
                  <span className={`text-[8px] text-zinc-500 ${past ? 'opacity-70' : ''}`}>
                    {rankLabels[rank.rank]}
                  </span>
                )}
              </div>
              {index < ranks.length - 1 && (
                <div className={`mx-2 h-px flex-1 ${past ? 'bg-violet-500/30' : future ? 'bg-white/[0.05]' : 'bg-white/[0.07]'}`}>
                  <ArrowRight size={10} className="mx-auto hidden text-zinc-700" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}
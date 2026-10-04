import { ArrowRight } from 'lucide-react';
import { GlassCard } from '../dashboard/GlassCard';
import { RankEmblem } from '../dashboard/RankEmblem';
import type { HunterProfile } from '../../types/profile';

const ranks = ['E', 'D', 'C', 'B', 'A', 'S'] as const;
const rankLabels: Record<string, string> = {
  E: 'Novice',
  D: 'Apprentice',
  C: 'Adept',
  B: 'Expert',
  A: 'Master',
  S: 'Legendary',
};

interface RankProgressionProps {
  profile: HunterProfile;
}

export function RankProgression({ profile }: RankProgressionProps) {
  const currentRankIndex = ranks.indexOf(profile.rank);

  return (
    <GlassCard className="p-5 sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Hunter Rank</p>
          <h2 className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
            {profile.rank}-Rank <span className="font-normal text-zinc-500">{rankLabels[profile.rank]}</span>
          </h2>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500">Next Rank</p>
          <p className="mt-1 font-bold text-zinc-300">{ranks[currentRankIndex + 1] || 'S'}</p>
        </div>
      </div>

      <div className="flex items-center overflow-x-auto pb-2">
        {ranks.map((rank, index) => {
          const past = currentRankIndex > index;
          const current = rank === profile.rank;
          const future = currentRankIndex < index;
          return (
            <div key={rank} className="flex min-w-[70px] flex-1 items-center justify-center last:flex-none">
              <div className={`flex flex-col items-center gap-2 ${current ? 'scale-105' : ''} transition-all duration-300`}>
                <div className={`relative ${current ? 'rounded-full bg-violet-500/15 shadow-[0_0_24px_rgba(139,92,246,.25)]' : ''}`}>
                  <RankEmblem rank={rank} size="md" />
                  {current && (
                    <div className="absolute inset-0 rounded-full border-2 border-violet-400/50 animate-pulse-subtle" />
                  )}
                </div>
                <span className={`text-[9px] font-semibold tracking-widest ${
                  current ? 'text-violet-300' : past ? 'text-zinc-400' : 'text-zinc-700'
                }`}>{rank}</span>
                <span className={`min-h-[12px] text-[8px] font-medium uppercase tracking-wider ${current ? 'text-violet-400' : past ? 'text-emerald-400' : 'text-transparent'}`}>
                  {current ? 'Current' : past ? 'Cleared' : 'Future'}
                </span>
              </div>
              {index < ranks.length - 1 && (
                <div className={`mx-2 h-px flex-1 ${past ? 'bg-violet-500/30' : future ? 'bg-white/[0.05]' : 'bg-white/[0.07]'}`}>
                  <ArrowRight size={12} className="mx-auto hidden text-zinc-700" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}

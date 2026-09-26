import { ArrowRight } from 'lucide-react';
import type { Rank } from '../../types/dashboard';
import { user } from '../../data/mockDashboard';
import { RankEmblem } from './RankEmblem';

const ranks: Rank[] = ['E', 'D', 'C', 'B', 'A', 'S'];

export function RankProgression() {
  return (
    <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">Your rank</p><h2 className="mt-1 text-sm font-semibold text-white">C-Rank Hunter</h2></div>
        <p className="text-xs text-zinc-500">Next Rank: <span className="font-medium text-zinc-300">B</span></p>
      </div>
      <div className="mt-5 flex items-center overflow-x-auto pb-1">
        {ranks.map((rank, index) => {
          const current = rank === user.rank;
          const past = ranks.indexOf(user.rank) > index;
          return <div key={rank} className="flex min-w-[58px] flex-1 items-center last:flex-none">
            <div className={`flex flex-col items-center gap-1 ${current ? 'scale-105' : ''} transition`}>
              <div className={`${current ? 'rounded-full bg-violet-500/10 shadow-[0_0_24px_rgba(139,92,246,.18)]' : ''}`}><RankEmblem rank={rank} size="sm" /></div>
              <span className={`text-[9px] font-semibold tracking-widest ${current ? 'text-violet-300' : past ? 'text-zinc-400' : 'text-zinc-700'}`}>{rank}</span>
            </div>
            {index < ranks.length - 1 && <div className={`mx-1 h-px flex-1 ${past ? 'bg-violet-500/30' : 'bg-white/[0.07]'}`}><ArrowRight size={10} className="mx-auto hidden text-zinc-700" /></div>}
          </div>;
        })}
      </div>
    </section>
  );
}

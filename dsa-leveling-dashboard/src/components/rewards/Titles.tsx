import { Check, Lock, Sparkles } from 'lucide-react';
import { GlassCard } from '../dashboard/GlassCard';
import type { TitleReward } from '../../types/rewards';

interface TitlesProps {
  titles: TitleReward[];
}

export function Titles({ titles }: TitlesProps) {
  return (
    <GlassCard className="p-5 sm:p-6">
      <div className="flex items-center justify-between mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Titles</p>
        <p className="text-[10px] text-zinc-500">
          {titles.filter(t => t.status === 'unlocked').length} / {titles.length}
        </p>
      </div>
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {titles.map((title) => (
          <div key={title.id} className="relative group">
            <GlassCard className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${title.status === 'unlocked' ? 'border-violet-400/20 bg-violet-500/5' : 'border-white/5 bg-white/2 opacity-70'}`}>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className={`font-semibold text-sm truncate ${title.status === 'unlocked' ? 'text-white' : 'text-zinc-500'}`}>
                    {title.name}
                  </p>
                  {title.isEquipped && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-violet-500/15 border border-violet-400/30 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-violet-300">
                      <Sparkles size={10} />
                      Equipped
                    </span>
                  )}
                  {title.status === 'locked' && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-zinc-600">
                      <Lock size={10} />
                      Locked
                    </span>
                  )}
                  {title.status === 'unlocked' && !title.isEquipped && (
                    <div className="absolute top-2 right-2">
                      <Sparkles size={12} className="text-amber-400 animate-pulse" />
                    </div>
                  )}
                </div>
                {title.status !== 'unlocked' && title.unlockCondition && (
                  <p className="text-[10px] text-zinc-600">{title.unlockCondition}</p>
                )}
              </div>
              {title.status === 'locked' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Lock size={24} className="text-white/50" />
                </div>
              )}
            </GlassCard>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
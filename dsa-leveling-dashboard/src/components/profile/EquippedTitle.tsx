import { Sparkles, Shield } from 'lucide-react';
import { GlassCard } from '../dashboard/GlassCard';
import type { HunterProfile } from '../../types/profile';

interface EquippedTitleProps {
  profile: HunterProfile;
}

export function EquippedTitle({ profile }: EquippedTitleProps) {
  return (
    <GlassCard className="p-5 sm:p-6 relative overflow-hidden border-violet-400/15 bg-violet-500/5">
      <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-bl from-violet-500/20 to-transparent rounded-bl-3xl" />
      
      <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-xl border border-violet-400/30 bg-violet-500/15 text-violet-300 shadow-[0_0_16px_rgba(139,92,246,0.2)]">
            <Sparkles size={22} />
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500">Equipped Title</p>
            <h2 className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">"{profile.equippedTitle}"</h2>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <GlassCard className="px-3 py-2 border-violet-400/20 bg-violet-500/10">
            <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-violet-300">Active</span>
          </GlassCard>
        </div>
      </div>
      
      <p className="mt-4 text-sm text-zinc-500">{profile.titleDescription}</p>
    </GlassCard>
  );
}
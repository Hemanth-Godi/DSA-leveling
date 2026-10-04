import { MapPin, Sparkles } from 'lucide-react';
import { GlassCard } from '../dashboard/GlassCard';

export function RewardsHeader() {
  return (
    <div className="mx-auto max-w-[1240px] px-4 sm:px-6 mb-8 lg:mb-10">
      <GlassCard className="p-5 sm:p-6 border-violet-400/15 bg-violet-500/3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300">
              <Sparkles size={12} className="inline-block mr-1" /> REWARD VAULT
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              YOUR PROGRESS BECOMES POWER
            </h1>
          </div>
          <p className="text-base text-zinc-400 sm:text-lg max-w-xl">
            Collect ranks, avatars, titles and rare rewards as you progress through the DSA journey.
          </p>
        </div>
      </GlassCard>
    </div>
  );
}
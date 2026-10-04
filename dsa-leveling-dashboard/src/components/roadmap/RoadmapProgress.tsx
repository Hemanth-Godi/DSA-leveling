import type { CSSProperties } from 'react';
import { GlassCard } from '../dashboard/GlassCard';

interface RoadmapProgressProps {
  completed: number;
  total: number;
}

export function RoadmapProgress({ completed, total }: RoadmapProgressProps) {
  const percentage = Math.round((completed / total) * 100);

  return (
    <GlassCard className="mx-auto max-w-[1240px] px-4 sm:px-6 mb-8 lg:mb-10">
      <div className="py-5 sm:py-6">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">OVERALL PROGRESS</p>
          </div>
          <p className="text-sm font-medium text-zinc-300">{completed} / {total} TOPICS COMPLETED</p>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-violet-600 via-violet-400 to-indigo-400 transition-all duration-1000"
            style={{ width: `${percentage}%` } as CSSProperties}
          />
        </div>
      </div>
    </GlassCard>
  );
}
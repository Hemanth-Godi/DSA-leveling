import { Flag, Trophy, Sparkles, Crown } from 'lucide-react';
import { RoadmapNode } from './RoadmapNode';
import type { RoadmapStage } from '../../types/roadmap';

interface RoadmapTimelineProps {
  stages: RoadmapStage[];
}

export function RoadmapTimeline({ stages }: RoadmapTimelineProps) {
  // Alternate left/right symmetrically
  const getPosition = (index: number): 'left' | 'right' => {
    return index % 2 === 0 ? 'left' : 'right';
  };

  const currentIndex = stages.findIndex((s) => s.status === 'current');
  const allCompleted = stages.length > 0 && stages.every((s) => s.status === 'completed');

  if (stages.length === 0) {
    return (
      <div className="mx-auto max-w-[1240px] px-4 py-20 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-500 mb-4">
          <Sparkles size={24} />
        </div>
        <h3 className="font-display text-xl font-bold text-white">No Dungeons Found</h3>
        <p className="mt-2 text-sm text-zinc-400">Try adjusting your search query or status filter.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1240px] px-4 sm:px-6 pb-24 relative">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(196,181,253,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(196,181,253,0.03) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Central Ambient Glow around the active area */}
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none -z-10" />

      {/* Continuous Spine Connecting Line */}
      <div className="relative">
        {/* DESKTOP VERTICAL LINE (Centered at left-1/2) */}
        <div className="hidden md:block absolute left-1/2 top-8 bottom-16 -translate-x-1/2 w-0.5 pointer-events-none z-0">
          {/* Active / Cleared Segment */}
          <div
            className="w-full bg-gradient-to-b from-emerald-400 via-violet-500 to-fuchsia-500 shadow-[0_0_12px_rgba(139,92,246,0.5)] transition-all duration-500"
            style={{
              height: currentIndex >= 0 ? `${((currentIndex + 1) / stages.length) * 100}%` : '10%',
            }}
          />
          {/* Locked / Future Segment */}
          <div className="w-full h-full border-l-2 border-dashed border-white/[0.08]" />
        </div>

        {/* MOBILE VERTICAL LINE (Aligned with nodes on the left: left-9 sm:left-12) */}
        <div className="md:hidden absolute left-[2.25rem] sm:left-[2.75rem] top-8 bottom-16 -translate-x-1/2 w-0.5 pointer-events-none z-0">
          <div
            className="w-full bg-gradient-to-b from-emerald-400 via-violet-500 to-fuchsia-500 shadow-[0_0_10px_rgba(139,92,246,0.4)]"
            style={{
              height: currentIndex >= 0 ? `${((currentIndex + 1) / stages.length) * 100}%` : '10%',
            }}
          />
          <div className="w-full h-full border-l-2 border-dashed border-white/[0.08]" />
        </div>

        {/* All Roadmap Nodes */}
        <div className="relative space-y-4 md:space-y-2">
          {stages.map((stage, index) => (
            <RoadmapNode
              key={stage.id}
              stage={stage}
              index={index}
              totalStages={stages.length}
              isLast={index === stages.length - 1}
              position={getPosition(index)}
            />
          ))}
        </div>

        {/* GRAND FINALE SUMMIT: S-Rank Mastery Pinnacle */}
        <div className="mt-16 sm:mt-20 pt-8 flex flex-col items-center justify-center text-center relative z-10">
          {allCompleted ? (
            <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in-95 duration-700">
              <div className="relative flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 shadow-[0_0_50px_rgba(245,158,11,0.7)]">
                <Crown size={36} className="text-white drop-shadow-md" />
                <span className="absolute -inset-2 rounded-full border-2 border-amber-400/60 animate-ping pointer-events-none" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                  <Trophy size={14} /> Monarch Awakened
                </span>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-white">
                  ALL DUNGEONS CONQUERED
                </h3>
                <p className="mt-2 text-sm text-zinc-400 max-w-md">
                  You have conquered all 15 DSA stages. You are ready for top-tier technical interviews and system-level challenges.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <div className="relative flex items-center justify-center h-16 w-16 rounded-2xl border border-white/10 bg-gradient-to-br from-[#121124] to-[#0c0a1a] shadow-[0_0_24px_rgba(0,0,0,0.6)]">
                <Crown size={24} className="text-zinc-600" />
                <div className="absolute inset-0 rounded-2xl border border-violet-500/10 pointer-events-none" />
              </div>
              <div className="max-w-md">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Pinnacle Destination
                </span>
                <h4 className="mt-2 font-display text-lg font-bold text-zinc-300">
                  Monarch Rank · Technical Mastery
                </h4>
                <p className="mt-1 text-xs text-zinc-500">
                  Complete all 15 dungeon stages to unlock the Monarch Title and exclusive rewards.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
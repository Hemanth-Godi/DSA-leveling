import { Check, Lock, ChevronRight, ArrowRight } from 'lucide-react';
import { GlassCard } from '../dashboard/GlassCard';
import type { XPMilestone } from '../../types/rewards';

interface XPMilestonesProps {
  milestones: XPMilestone[];
}

export function XPMilestones({ milestones }: XPMilestonesProps) {
  return (
    <GlassCard className="p-5 sm:p-6">
      <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">XP Milestones</p>
      <div className="flex flex-col sm:flex-row gap-3 overflow-x-auto pb-2 scrollbar-thin">
        {milestones.map((milestone, index) => {
          const isPast = index < milestones.findIndex(m => m.status !== 'unlocked');
          const isCurrent = milestone.status === 'current';
          const isLocked = milestone.status === 'locked';
          const isUnlocked = milestone.status === 'unlocked';
          
          return (
            <div key={milestone.xp} className={`flex-shrink-0 flex flex-col items-center gap-3 min-w-[140px] ${isLocked ? 'opacity-60' : ''}`}>
              <div className={`relative flex flex-col items-center gap-2 ${isCurrent ? 'scale-105' : ''} transition-all duration-300`}>
                <div className={`relative flex h-16 w-16 items-center justify-center rounded-full border-2 ${isUnlocked 
                  ? 'border-emerald-400/50 bg-emerald-500/15 shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                  : isCurrent
                  ? 'border-violet-400/50 bg-violet-500/15 shadow-[0_0_20px_rgba(139,92,246,0.4)] animate-pulse-subtle'
                  : 'border-white/10 bg-white/5'}`}>
                  {isUnlocked && (
                    <>
                      <Check size={24} className="text-emerald-400" strokeWidth={3} />
                      <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500">
                        <Check size={10} className="text-white" strokeWidth={3} />
                      </div>
                    </>
                  )}
                  {isCurrent && <ArrowRight size={20} className="text-violet-300" />}
                  {isLocked && <Lock size={20} className="text-zinc-600" />}
                </div>
                {isUnlocked && !isCurrent && (
                  <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500">
                    <Check size={10} className="text-white" strokeWidth={3} />
                  </div>
                )}
              </div>
              <div className="text-center">
                <p className={`font-semibold text-sm ${isLocked ? 'text-zinc-500' : 'text-white'}`}>
                  {milestone.xp >= 1000 ? `${(milestone.xp / 1000).toFixed(0)}K` : milestone.xp} XP
                </p>
                <p className={`mt-1 text-[10px] ${isLocked ? 'text-zinc-600' : 'text-zinc-400'}`}>
                  {milestone.label}
                </p>
                <p className={`mt-1 text-[10px] font-medium ${isUnlocked ? 'text-emerald-400' : isCurrent ? 'text-violet-300' : 'text-zinc-600'}`}>
                  {isUnlocked ? '✓ Reached' : isCurrent ? 'Current' : 'Locked'}
                </p>
              </div>
            </div>
          );
        })}
        {milestones.length > 1 && milestones.slice(0, -1).map((_, index) => (
          <div key={`conn-${index}`} className="hidden self-center mx-1 flex-1 sm:block">
            <div className="h-px w-full bg-gradient-to-r from-violet-500/30 to-transparent" />
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
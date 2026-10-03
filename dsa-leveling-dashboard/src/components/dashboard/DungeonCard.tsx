import { Lock, Check, ChevronRight } from 'lucide-react';
import { GlassCard } from './GlassCard';
import type { Dungeon } from '../../types/dashboard';

interface DungeonCardProps {
  dungeon: Dungeon;
  index: number;
  dungeonImages: string[];
}

const difficultyColors: Record<string, string> = {
  Beginner: 'text-emerald-400',
  Intermediate: 'text-amber-400',
  Advanced: 'text-orange-400',
  Expert: 'text-red-400',
};

export function DungeonCard({ dungeon, index, dungeonImages }: DungeonCardProps) {
  const isLocked = dungeon.state === 'locked';
  const isAvailable = dungeon.state === 'available';
  const isCompleted = dungeon.state === 'completed';
  
  const DifficultyColor = difficultyColors[dungeon.difficulty] || 'text-zinc-400';

  return (
    <GlassCard 
      className={`relative overflow-hidden p-4 transition duration-300 ${
        isLocked 
          ? 'opacity-70 border-white/[0.05] bg-black/20' 
          : isCompleted
          ? 'border-emerald-400/20 bg-emerald-500/[0.03]'
          : 'border-violet-400/15 bg-violet-500/[0.03] hover:border-violet-400/30 hover:bg-violet-500/[0.06]'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
          <img
            src={dungeonImages[index % dungeonImages.length]}
            alt={`${dungeon.name} dungeon`}
            className="h-full w-full object-cover"
          />
          {isLocked && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60">
              <Lock size={24} className="text-white/50" />
            </div>
          )}
          {isCompleted && (
            <div className="absolute inset-0 flex items-center justify-center bg-emerald-500/20">
              <Check size={24} className="text-emerald-400" />
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className={`font-semibold text-white ${isLocked ? 'text-zinc-500' : ''}`}>{dungeon.name}</h3>
              <p className="mt-0.5 text-[11px] text-zinc-500">{dungeon.difficulty} · {dungeon.totalProblems} problems</p>
            </div>
            {isLocked && dungeon.unlockRequirement && (
              <span className="shrink-0 flex items-center gap-1 rounded-full border border-white/[0.1] bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-zinc-600">
                <Lock size={10} />
                Locked
              </span>
            )}
            {isAvailable && !isCompleted && (
              <span className="shrink-0 flex items-center gap-1 rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-1 text-[10px] font-medium text-violet-300">
                Available
              </span>
            )}
            {isCompleted && (
              <span className="shrink-0 flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-300">
                Completed
              </span>
            )}
          </div>
          
          {!isLocked && (
            <>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                <div className="h-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-400 transition-all duration-1000" style={{ width: `${dungeon.progress}%` }} />
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px]">
                <span className="text-zinc-500">{dungeon.completedProblems} / {dungeon.totalProblems} completed</span>
                <span className="font-medium text-violet-300">+{dungeon.xpAvailable} XP</span>
              </div>
            </>
          )}
          
          {isLocked && dungeon.unlockRequirement && (
            <p className="mt-3 text-[11px] text-zinc-600">
              <Lock size={11} className="inline-block mr-1" />
              {dungeon.unlockRequirement}
            </p>
          )}
        </div>
        
        <ChevronRight className="hidden shrink-0 text-white/10 lg:block" size={20} />
      </div>
    </GlassCard>
  );
}
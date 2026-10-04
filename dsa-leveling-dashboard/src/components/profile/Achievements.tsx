import { Check, Lock, Award, Sparkles, Sword, Zap, Trophy, Shield, Star, Target, Flame } from 'lucide-react';
import { GlassCard } from '../dashboard/GlassCard';
import type { Achievement } from '../../types/profile';

interface AchievementsProps {
  achievements: Achievement[];
}

const achievementIcons: Record<string, any> = {
  'array-slayer': Sword,
  'first-blood': Zap,
  'dungeon-explorer': Target,
  '7-day-streak': Flame,
  'tree-master': Trophy,
  'graph-hunter': Star,
};

export function Achievements({ achievements }: AchievementsProps) {
  return (
    <GlassCard className="p-5 sm:p-6">
      <div className="flex items-center justify-between mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Achievements</p>
        <p className="text-[10px] text-zinc-500">
          {achievements.filter(a => a.unlocked).length} / {achievements.length}
        </p>
      </div>
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {achievements.map((achievement) => {
          const Icon = achievementIcons[achievement.id] || Award;
          return (
            <div key={achievement.id} className="relative group">
              <GlassCard className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${achievement.unlocked ? 'border-violet-400/20 bg-violet-500/5' : 'border-white/5 bg-white/2 opacity-70'}`}>
                <div className="flex flex-col items-center justify-center p-4">
                  <div className={`relative flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-xl ${achievement.unlocked 
                    ? 'border-violet-400/30 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/15 shadow-[0_0_20px_rgba(139,92,246,0.15)]' 
                    : 'border-white/10 bg-white/5'}`}>
                    {achievement.unlocked ? (
                      <>
                        <Icon size={28} strokeWidth={1.8} className="text-violet-300" />
                        <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500">
                          <Check size={10} className="text-white" strokeWidth={3} />
                        </div>
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Lock size={24} className="text-zinc-700" />
                      </div>
                    )}
                  </div>
                  <div className="mt-3 text-center min-w-0">
                    <p className={`font-semibold text-sm truncate ${achievement.unlocked ? 'text-white' : 'text-zinc-500'}`}>
                      {achievement.name}
                    </p>
                    <p className={`mt-1 text-[10px] truncate ${achievement.unlocked ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
                {achievement.unlocked && (
                  <div className="absolute top-2 right-2">
                    <Sparkles size={12} className="text-amber-400 animate-pulse" />
                  </div>
                )}
              </GlassCard>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}
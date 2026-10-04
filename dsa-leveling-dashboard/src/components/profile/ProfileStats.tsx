import { Flame, Swords, Target, Zap, MapPin, Calendar } from 'lucide-react';
import { GlassCard } from '../dashboard/GlassCard';
import type { HunterProfile } from '../../types/profile';

interface ProfileStatsProps {
  profile: HunterProfile;
}

export function ProfileStats({ profile }: ProfileStatsProps) {
  const stats = [
    { label: 'Problems Solved', value: profile.problemsSolved, icon: Target, color: 'text-violet-300' },
    { label: 'Dungeons Cleared', value: profile.dungeonsCleared, icon: Swords, color: 'text-cyan-300' },
    { label: 'Current Streak', value: `${profile.streak} Days`, icon: Flame, color: 'text-fuchsia-300' },
    { label: 'Total XP', value: profile.totalXp.toLocaleString(), icon: Zap, color: 'text-amber-300' },
    { label: 'Roadmap Progress', value: `${profile.roadmapProgress.completed} / ${profile.roadmapProgress.total}`, icon: MapPin, color: 'text-emerald-300' },
    { label: 'Hunter Since', value: profile.hunterSince, icon: Calendar, color: 'text-zinc-400' },
  ];

  return (
    <GlassCard className="p-5 sm:p-6">
      <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Hunter Stats</p>
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <GlassCard key={label} className="p-4 min-w-0 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/20 hover:bg-white/[0.05]">
            <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-zinc-400">
              <Icon size={18} strokeWidth={1.7} className={color} />
            </div>
            <p className="text-lg font-semibold text-white sm:text-xl truncate">{value}</p>
            <p className="mt-1 text-xs text-zinc-500 truncate">{label}</p>
          </GlassCard>
        ))}
      </div>
    </GlassCard>
  );
}
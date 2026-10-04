import { ArrowRight, MapPin, Target, Trophy, Flame, Swords, Zap } from 'lucide-react';
import { GlassCard } from '../dashboard/GlassCard';
import { RankEmblem } from '../dashboard/RankEmblem';
import type { HunterProfile } from '../../types/profile';

interface ProfileHeaderProps {
  profile: HunterProfile;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  const progress = Math.round((profile.xp / profile.xpToNextLevel) * 100);
  const remaining = profile.xpToNextLevel - profile.xp;

  return (
    <GlassCard className="relative overflow-hidden p-6 sm:p-8 border-violet-400/15 bg-violet-500/3">
        {/* Ambient glow */}
        <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />
        
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center">
          {/* Avatar */}
          <div className="flex-shrink-0 relative">
            <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-2xl overflow-hidden border-2 border-violet-400/30 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10">
              <img
                src={profile.avatar}
                alt={`${profile.username} avatar`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a12]/80 via-transparent to-transparent" />
            </div>
            {/* Current Avatar badge */}
            <div className="absolute -bottom-2 -right-2 rounded-full border border-violet-400/40 bg-violet-500/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-violet-300">
              Current Avatar
            </div>
          </div>

          {/* Profile Info */}
          <div className="min-w-0 flex-1 text-center lg:text-left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300">Hunter Profile</p>
            <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {profile.username}
            </h1>
            <div className="mt-3 flex flex-col gap-3 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <span className="flex items-center gap-1.5">
                <RankEmblem rank={profile.rank} size="sm" />
                <span className="font-semibold text-white">{profile.rank}-Rank {({ E: 'Novice', D: 'Apprentice', C: 'Adept', B: 'Expert', A: 'Master', S: 'Legendary' })[profile.rank]}</span>
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                Level {profile.level}
              </span>
            </div>
            
            {/* Equipped Title */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-zinc-500">Equipped</span>
              <span className="font-semibold text-white">"{profile.equippedTitle}"</span>
            </div>
            <p className="mt-2 text-[11px] text-zinc-500">{profile.titleDescription}</p>
          </div>

          {/* XP Progress */}
          <div className="w-full shrink-0 lg:w-80">
            <div className="text-center lg:text-right">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">XP Progress</p>
              <p className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">LEVEL {profile.level}</p>
              <p className="mt-1 text-sm font-medium text-zinc-300">{profile.xp.toLocaleString()} / {profile.xpToNextLevel.toLocaleString()} XP</p>
            </div>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/[0.06]">
              <div className="h-full rounded-full bg-gradient-to-r from-violet-600 via-violet-400 to-indigo-400 transition-all duration-1000" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-2 text-center text-sm text-zinc-500 lg:text-right">{remaining} XP to Level {profile.level + 1}</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-center">
              <GlassCard className="p-3 border-white/5 bg-white/2">
                <p className="text-[10px] uppercase tracking-wider text-zinc-500">Total XP</p>
                <p className="mt-1 font-semibold text-white">{profile.totalXp.toLocaleString()}</p>
              </GlassCard>
              <GlassCard className="p-3 border-white/5 bg-white/2">
                <p className="text-[10px] uppercase tracking-wider text-zinc-500">Current Level</p>
                <p className="mt-1 font-semibold text-white">{profile.level}</p>
              </GlassCard>
            </div>
          </div>
        </div>
    </GlassCard>
  );
}

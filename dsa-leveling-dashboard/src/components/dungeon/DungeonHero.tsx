import { ArrowRight, MapPin, Trophy, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlassCard } from '../dashboard/GlassCard';
import type { Dungeon, DungeonNavigation } from '../../types/dungeon';

interface DungeonHeroProps {
  dungeon: Dungeon;
  navigation: DungeonNavigation | undefined;
}

export function DungeonHero({ dungeon, navigation }: DungeonHeroProps) {
  return (
    <div className="mx-auto max-w-[1240px] px-4 sm:px-6 mb-8 lg:mb-10">
      {/* Navigation breadcrumb */}
      {navigation && (
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            {navigation.previous && (
              <Link
                to={`/dungeons/${navigation.previous.id}`}
                className="flex items-center gap-1 hover:text-violet-300 transition"
              >
                <MapPin size={14} />
                <span>{navigation.previous.title}</span>
              </Link>
            )}
            <span className="mx-1">/</span>
            <span className="font-semibold text-white">{dungeon.title}</span>
            {navigation.next && (
              <>
                <span className="mx-1">/</span>
                <Link
                  to={`/dungeons/${navigation.next.id}`}
                  className="flex items-center gap-1 hover:text-violet-300 transition"
                >
                  <span>{navigation.next.title}</span>
                  <MapPin size={14} />
                </Link>
              </>
            )}
          </div>
          <div className="flex items-center gap-3">
            <GlassCard className="flex items-center gap-2 px-3 py-2">
              <Trophy size={14} className="text-amber-400" />
              <span className="text-sm font-medium text-white">{dungeon.totalXP.toLocaleString()} XP Total</span>
            </GlassCard>
            <GlassCard className="flex items-center gap-2 px-3 py-2">
              <Target size={14} className="text-violet-400" />
              <span className="text-sm font-medium text-white">{dungeon.totalQuestions} Challenges</span>
            </GlassCard>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-8">
        {/* Left: Dungeon Info */}
        <div className="space-y-6">
          <GlassCard className="p-5 sm:p-6 relative overflow-hidden border-violet-400/20 bg-violet-500/5">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-[#160d2b]/80 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-200">
                <MapPin size={12} className="text-violet-300" />
                {dungeon.title.toUpperCase()} DUNGEON
              </div>
              <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                {dungeon.title}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-xl">
                {dungeon.description}
              </p>
            </div>

            {/* Progress Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white">{dungeon.progress}%</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-zinc-500">Complete</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white">{dungeon.completedCount} / {dungeon.totalQuestions}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-zinc-500">Problems</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-violet-300">+{dungeon.totalXP.toLocaleString()}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-zinc-500">Total XP</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white">{dungeon.easy.length + dungeon.medium.length + dungeon.hard.length + dungeon.boss.questions.length}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-zinc-500">Challenges</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-zinc-400">Dungeon Progress</span>
                <span className="font-medium text-white">{dungeon.completedCount} / {dungeon.totalQuestions}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                <div className="h-full rounded-full bg-gradient-to-r from-violet-600 via-violet-400 to-indigo-400 transition-all duration-1000" style={{ width: `${dungeon.progress}%` }} />
              </div>
            </div>

            {/* Continue Button */}
            <Link
              to={`/dungeons/${dungeon.id}/easy/1`}
              className="mt-6 inline-flex items-center gap-2 w-full sm:w-auto justify-center rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(124,58,237,0.4)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(124,58,237,0.55)]"
            >
              <span>Continue Dungeon</span>
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </GlassCard>
        </div>

        {/* Right: Dungeon Artwork */}
        <div className="relative">
          <GlassCard className="relative overflow-hidden h-full min-h-[320px] lg:min-h-[400px] border-violet-400/15 bg-white/[0.02]">
            <img
              src={dungeon.image}
              alt={`${dungeon.title} Dungeon`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a12] via-[#0c0a12]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a12] via-transparent to-transparent" />
            
            {/* Overlay info */}
            <div className="relative h-full flex flex-col justify-end p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-violet-400/30 bg-violet-500/15 text-violet-300 shadow-[0_0_16px_rgba(139,92,246,0.2)]">
                  <MapPin size={18} strokeWidth={1.7} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-400">Dungeon Environment</p>
                  <p className="mt-0.5 font-semibold text-white">{dungeon.title}</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
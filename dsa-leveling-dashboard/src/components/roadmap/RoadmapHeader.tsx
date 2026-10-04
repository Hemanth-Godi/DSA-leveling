import { Map, Target, Trophy, Sparkles, Search, Filter, Flame, ArrowRight } from 'lucide-react';
import { GlassCard } from '../dashboard/GlassCard';
import { Link } from 'react-router-dom';

interface RoadmapHeaderProps {
  currentStage: string;
  completedCount: number;
  totalCount: number;
  activeFilter?: 'all' | 'current' | 'completed' | 'locked';
  onFilterChange?: (filter: 'all' | 'current' | 'completed' | 'locked') => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export function RoadmapHeader({
  currentStage,
  completedCount,
  totalCount,
  activeFilter = 'all',
  onFilterChange,
  searchQuery = '',
  onSearchChange,
}: RoadmapHeaderProps) {
  const progressPercent = Math.round((completedCount / totalCount) * 100);
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * progressPercent) / 100;

  return (
    <div className="mx-auto max-w-[1240px] px-4 sm:px-6 mb-8 lg:mb-12 relative">
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-500/10 via-fuchsia-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative py-4 sm:py-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Title & Description */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-[#160d2b]/80 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-200 shadow-[0_0_12px_rgba(139,92,246,0.25)]">
              <Map size={12} className="text-violet-300" />
              <span>SYSTEM ROADMAP · HUNTER RANKING</span>
              <span className="hidden sm:inline h-px w-8 bg-gradient-to-r from-violet-400/30 to-transparent" />
              <Sparkles size={11} className="text-violet-400" />
            </div>

            <h1 className="mt-3.5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              MASTER THE <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">PATH OF DSA</span>
            </h1>

            <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-zinc-400">
              Traverse the dungeon levels from foundations to dynamic programming. Clear challenges, gain Hunter XP, and unlock senior-tier algorithmic mastery.
            </p>
          </div>

          {/* Right Header Cards */}
          <div className="flex flex-col sm:flex-row items-stretch gap-3.5 sm:gap-4 shrink-0">
            {/* Overall Progress Card */}
            <GlassCard className="flex items-center gap-4 px-5 py-4 min-w-[220px] relative overflow-hidden border-violet-400/20 bg-gradient-to-br from-violet-950/40 to-[#0e0c1f]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-fuchsia-500/5 to-transparent pointer-events-none" />

              {/* Progress Ring with correct SVG coordinate space */}
              <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                <svg
                  className="w-full h-full -rotate-90"
                  viewBox="0 0 68 68"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(139,92,246,0.4))' }}
                >
                  <circle
                    cx="34"
                    cy="34"
                    r={radius}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="4"
                  />
                  <circle
                    cx="34"
                    cy="34"
                    r={radius}
                    fill="none"
                    stroke="url(#header-progress-gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id="header-progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#d946ef" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-base font-extrabold text-white leading-none tracking-tight">
                    {progressPercent}%
                  </span>
                  <span className="text-[8px] font-bold uppercase tracking-wider text-violet-300/80 mt-0.5">
                    Clear
                  </span>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">Overall Progress</p>
                <p className="mt-1 font-bold text-white text-base sm:text-lg">
                  {completedCount} <span className="text-zinc-500 text-sm font-normal">/ {totalCount} Cleared</span>
                </p>
                <div className="mt-1 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <Flame size={12} className="text-amber-400" />
                  <span>Hunter Rank C</span>
                </div>
              </div>
            </GlassCard>

            {/* Current Quest Card */}
            <GlassCard className="flex items-center justify-between gap-4 px-5 py-4 min-w-[220px] relative overflow-hidden border-violet-400/30 bg-violet-600/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(139,92,246,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-transparent pointer-events-none" />

              <div className="flex items-center gap-3.5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-violet-400/40 bg-violet-500/20 text-violet-300 shadow-[0_0_18px_rgba(139,92,246,0.35)] relative">
                  <Target size={20} strokeWidth={2} />
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500" />
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-violet-300">Active Quest</span>
                    <span className="inline-block h-1 w-1 rounded-full bg-violet-400 animate-pulse" />
                  </div>
                  <p className="mt-0.5 font-bold text-white text-base">{currentStage}</p>
                  <p className="text-[11px] text-zinc-400">35% Dungeon Progress</p>
                </div>
              </div>

              <Link
                to="/dungeons/arrays"
                className="hidden sm:flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 border border-violet-400/40 text-violet-200 transition hover:bg-violet-500 hover:text-white hover:scale-105 shadow-[0_0_12px_rgba(139,92,246,0.3)]"
                title="Enter current dungeon"
              >
                <ArrowRight size={15} />
              </Link>
            </GlassCard>
          </div>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-white/[0.08] pt-5">
          {/* Status Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mr-2">
              <Filter size={12} />
              Filter:
            </span>

            {[
              { key: 'all', label: 'All Stages', count: totalCount },
              { key: 'current', label: 'Active', count: 1 },
              { key: 'completed', label: 'Cleared', count: completedCount },
              { key: 'locked', label: 'Locked', count: totalCount - completedCount - 1 },
            ].map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => onFilterChange?.(tab.key as any)}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold tracking-wide transition-all whitespace-nowrap ${
                    isActive
                      ? 'border border-violet-400/40 bg-violet-500/20 text-white shadow-[0_0_16px_rgba(139,92,246,0.3)]'
                      : 'border border-transparent bg-white/[0.03] text-zinc-400 hover:bg-white/[0.07] hover:text-zinc-200'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`rounded-md px-1.5 py-0.2 text-[10px] font-mono ${
                      isActive ? 'bg-violet-400/30 text-violet-200' : 'bg-white/5 text-zinc-500'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[220px] sm:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder="Search topics (e.g. Tree, DP)..."
              className="w-full rounded-xl border border-white/10 bg-black/30 pl-9 pr-3 py-1.5 text-xs text-zinc-200 placeholder-zinc-500 outline-none transition focus:border-violet-400/50 focus:bg-violet-950/20 focus:ring-1 focus:ring-violet-400/30"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
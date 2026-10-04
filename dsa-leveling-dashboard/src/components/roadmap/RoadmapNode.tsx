import { Link } from 'react-router-dom';
import { Check, Lock, ArrowRight, MapPin, Swords, Sparkles, ChevronRight } from 'lucide-react';
import { GlassCard } from '../dashboard/GlassCard';
import type { RoadmapStage } from '../../types/roadmap';

interface RoadmapNodeProps {
  stage: RoadmapStage;
  index: number;
  totalStages: number;
  isLast: boolean;
  position: 'left' | 'right';
}

const rankStyles: Record<string, { badge: string; text: string }> = {
  'E-Rank': { badge: 'border-emerald-400/30 bg-emerald-500/10 text-emerald-300', text: 'text-emerald-400' },
  'D-Rank': { badge: 'border-cyan-400/30 bg-cyan-500/10 text-cyan-300', text: 'text-cyan-400' },
  'C-Rank': { badge: 'border-violet-400/30 bg-violet-500/10 text-violet-300', text: 'text-violet-400' },
  'B-Rank': { badge: 'border-amber-400/30 bg-amber-500/10 text-amber-300', text: 'text-amber-400' },
  'A-Rank': { badge: 'border-orange-400/30 bg-orange-500/10 text-orange-300', text: 'text-orange-400' },
  'S-Rank': { badge: 'border-rose-400/30 bg-rose-500/10 text-rose-300', text: 'text-rose-400' },
};

export function RoadmapNode({ stage, index, totalStages, isLast, position }: RoadmapNodeProps) {
  const isCompleted = stage.status === 'completed';
  const isCurrent = stage.status === 'current';
  const isLocked = stage.status === 'locked';
  const isLeft = position === 'left';

  const rankInfo = rankStyles[stage.rank || 'E-Rank'] || rankStyles['E-Rank'];

  // Card Progress Ring calculations
  const cardRadius = 14;
  const cardCircumference = 2 * Math.PI * cardRadius;
  const cardOffset = cardCircumference - (cardCircumference * stage.progress) / 100;

  // Node Progress Ring calculations
  const nodeRadius = 26;
  const nodeCircumference = 2 * Math.PI * nodeRadius;
  const nodeOffset = nodeCircumference - (nodeCircumference * stage.progress) / 100;

  const renderCard = () => {
    return (
      <div className="w-full max-w-lg">
        <GlassCard
          className={`relative overflow-hidden p-5 sm:p-6 transition-all duration-300 ${
            isCurrent
              ? 'border-violet-400/50 bg-gradient-to-br from-violet-950/40 via-[#130f26]/80 to-[#0e0c1a]/90 shadow-[0_0_35px_rgba(139,92,246,0.25)] hover:border-violet-400/70 hover:shadow-[0_0_45px_rgba(139,92,246,0.35)]'
              : isCompleted
              ? 'border-emerald-400/30 bg-gradient-to-br from-emerald-950/20 via-[#0d1615]/70 to-[#0a0f12]/90 shadow-[0_0_25px_rgba(16,185,129,0.15)] hover:border-emerald-400/50'
              : 'border-white/[0.08] bg-[#0d0c18]/60 opacity-80 hover:opacity-100 hover:border-white/20'
          }`}
        >
          {/* Ambient Card Corner Accent */}
          {isCurrent && (
            <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl from-violet-500/20 via-fuchsia-500/10 to-transparent rounded-tr-2xl pointer-events-none" />
          )}
          {isCompleted && (
            <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-emerald-500/15 to-transparent rounded-tr-2xl pointer-events-none" />
          )}

          {/* Top Row: Stage Index, Difficulty Rank, and Status Badge */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/[0.06] border border-white/10 text-[10px] font-mono font-bold text-zinc-300">
                {String(index + 1).padStart(2, '0')}
              </span>
              {stage.rank && (
                <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase border ${rankInfo.badge}`}>
                  {stage.rank}
                </span>
              )}
            </div>

            {/* Status Pill */}
            {isCompleted && (
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold tracking-wide uppercase text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                <Check size={11} strokeWidth={2.5} /> Cleared
              </span>
            )}
            {isCurrent && (
              <span className="inline-flex items-center gap-1 rounded-full border border-violet-400/40 bg-violet-500/20 px-2.5 py-0.5 text-[10px] font-bold tracking-wide uppercase text-violet-200 shadow-[0_0_14px_rgba(139,92,246,0.3)]">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
                Active Quest
              </span>
            )}
            {isLocked && (
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-zinc-500">
                <Lock size={10} /> Locked
              </span>
            )}
          </div>

          {/* Middle: Title & Description */}
          <div className="mt-3">
            <h3 className={`text-base sm:text-lg font-bold tracking-tight ${isLocked ? 'text-zinc-300' : 'text-white'}`}>
              {stage.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm leading-relaxed text-zinc-400 line-clamp-2">
              {stage.description}
            </p>
          </div>

          {/* Topic Chips */}
          {stage.topics && stage.topics.length > 0 && (
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {stage.topics.map((topic) => (
                <span
                  key={topic}
                  className={`rounded-md px-2 py-0.5 text-[10px] font-medium transition ${
                    isCurrent
                      ? 'bg-violet-500/15 border border-violet-400/20 text-violet-300'
                      : isCompleted
                      ? 'bg-emerald-500/10 border border-emerald-400/20 text-emerald-300/80'
                      : 'bg-white/[0.04] border border-white/[0.06] text-zinc-500'
                  }`}
                >
                  {topic}
                </span>
              ))}
            </div>
          )}

          {/* Dungeon Stats Row: XP, Problem Count */}
          <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3 text-[11px] text-zinc-400">
            <div className="flex items-center gap-3">
              {stage.xpReward && (
                <span className="inline-flex items-center gap-1 text-amber-400 font-semibold">
                  <Sparkles size={11} /> +{stage.xpReward} XP
                </span>
              )}
              {stage.problemCount && (
                <span className="text-zinc-500">
                  {stage.problemCount} Problems
                </span>
              )}
            </div>

            {/* Circular Progress Ring in Card */}
            <div className="flex items-center gap-2">
              <span className={`font-mono text-xs font-bold ${isCurrent ? 'text-violet-300' : isCompleted ? 'text-emerald-300' : 'text-zinc-600'}`}>
                {stage.progress}%
              </span>
              <div className="relative h-7 w-7 shrink-0">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r={cardRadius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                  <circle
                    cx="18"
                    cy="18"
                    r={cardRadius}
                    fill="none"
                    stroke={isCompleted ? '#10b981' : isCurrent ? '#8b5cf6' : 'rgba(255,255,255,0.1)'}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={cardCircumference}
                    strokeDashoffset={cardOffset}
                    className="transition-all duration-1000"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Progress Bar Line */}
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${
                isCompleted
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                  : isCurrent
                  ? 'bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500'
                  : 'bg-white/10'
              }`}
              style={{ width: `${stage.progress}%` }}
            />
          </div>

          {/* Action Row */}
          <div className="mt-4 pt-1 flex items-center justify-between">
            {isCompleted && (
              <Link
                to={stage.route}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition"
              >
                <span>Review Completed Dungeon</span>
                <ChevronRight size={14} />
              </Link>
            )}

            {isCurrent && (
              <Link
                to={stage.route}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-4 py-2.5 text-xs font-bold text-white shadow-[0_4px_20px_rgba(139,92,246,0.4)] transition hover:shadow-[0_6px_28px_rgba(139,92,246,0.6)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <Swords size={14} />
                <span>ENTER DUNGEON</span>
                <ArrowRight size={14} />
              </Link>
            )}

            {isLocked && (
              <span className="text-[11px] text-zinc-500 italic">
                Clear Stage {index} to unlock
              </span>
            )}
          </div>
        </GlassCard>
      </div>
    );
  };

  return (
    <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 min-h-[170px] my-4 md:my-6">
      {/* DESKTOP LEFT SLOT */}
      <div className="hidden md:flex flex-1 justify-end items-center relative">
        {isLeft ? (
          <>
            {renderCard()}
            {/* Horizontal connecting bridge to center node */}
            <div
              className={`h-0.5 w-8 lg:w-12 transition-colors ${
                isCompleted
                  ? 'bg-gradient-to-r from-transparent to-emerald-500/60 shadow-[0_0_8px_rgba(16,185,129,0.4)]'
                  : isCurrent
                  ? 'bg-gradient-to-r from-transparent via-violet-500 to-fuchsia-500 shadow-[0_0_12px_rgba(139,92,246,0.6)] animate-pulse'
                  : 'bg-white/10'
              }`}
            />
          </>
        ) : (
          /* Symmetrical empty spacer on desktop ensures center node is exactly in the middle */
          <div className="w-full max-w-lg" />
        )}
      </div>

      {/* CENTER NODE (Desktop: Centered at 50%; Mobile: Positioned on left with vertical line) */}
      <div className="relative shrink-0 flex items-center md:flex-col md:justify-center z-10 w-full md:w-20 pl-2 sm:pl-4 md:pl-0">
        {/* Node Circle */}
        <div className="relative flex items-center justify-center">
          <div
            className={`relative flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full border-2 transition-all duration-500 ${
              isCompleted
                ? 'border-emerald-400 bg-gradient-to-br from-emerald-500/25 to-teal-700/20 shadow-[0_0_24px_rgba(16,185,129,0.4)] text-emerald-300'
                : isCurrent
                ? 'border-violet-400 bg-gradient-to-br from-violet-600/40 via-fuchsia-600/30 to-indigo-600/30 shadow-[0_0_36px_rgba(139,92,246,0.6)] text-violet-200'
                : 'border-white/15 bg-[#121124] text-zinc-500 shadow-[0_4px_16px_rgba(0,0,0,0.5)]'
            }`}
          >
            {/* Pulse ring for active current stage */}
            {isCurrent && (
              <span className="absolute -inset-1.5 rounded-full border-2 border-violet-400/50 animate-ping opacity-60 pointer-events-none" />
            )}

            {/* Icon */}
            {isCompleted && <Check size={22} strokeWidth={3} className="text-emerald-300" />}
            {isCurrent && <MapPin size={22} strokeWidth={2.2} className="text-violet-200 animate-bounce" />}
            {isLocked && <Lock size={18} strokeWidth={2} className="text-zinc-600" />}

            {/* Circular Progress Ring overlay on the node */}
            <svg className="absolute -inset-1 h-[60px] w-[60px] sm:h-[68px] sm:w-[68px] -rotate-90 pointer-events-none" viewBox="0 0 64 64">
              <circle cx="32" cy="32" r={nodeRadius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2.5" />
              <circle
                cx="32"
                cy="32"
                r={nodeRadius}
                fill="none"
                stroke={isCompleted ? '#10b981' : isCurrent ? '#c084fc' : 'rgba(255,255,255,0.08)'}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={nodeCircumference}
                strokeDashoffset={nodeOffset}
                className="transition-all duration-1000"
                style={{
                  filter: isCurrent ? 'drop-shadow(0 0 6px rgba(192,132,252,0.8))' : isCompleted ? 'drop-shadow(0 0 4px rgba(16,185,129,0.5))' : 'none',
                }}
              />
            </svg>
          </div>
        </div>

        {/* Node Label Below (Desktop) */}
        <div className="hidden md:block mt-2.5 text-center w-28">
          <p className={`text-[10px] font-bold uppercase tracking-wider ${isCurrent ? 'text-violet-300 font-extrabold' : isCompleted ? 'text-emerald-400' : 'text-zinc-500'}`}>
            Stage {String(index + 1).padStart(2, '0')}
          </p>
          <p className="text-[10px] text-zinc-400 truncate max-w-full font-medium mt-0.5">
            {stage.title.split('&')[0].trim()}
          </p>
        </div>

        {/* Mobile: Horizontal connector to card */}
        <div
          className={`md:hidden h-0.5 w-4 sm:w-6 transition-colors shrink-0 ${
            isCompleted
              ? 'bg-emerald-500/60'
              : isCurrent
              ? 'bg-violet-500'
              : 'bg-white/10'
          }`}
        />

        {/* MOBILE CARD (Always renders beside the node on small screens) */}
        <div className="md:hidden flex-1 min-w-0 pr-2">
          {renderCard()}
        </div>
      </div>

      {/* DESKTOP RIGHT SLOT */}
      <div className="hidden md:flex flex-1 justify-start items-center relative">
        {!isLeft ? (
          <>
            {/* Horizontal connecting bridge to center node */}
            <div
              className={`h-0.5 w-8 lg:w-12 transition-colors ${
                isCompleted
                  ? 'bg-gradient-to-l from-transparent to-emerald-500/60 shadow-[0_0_8px_rgba(16,185,129,0.4)]'
                  : isCurrent
                  ? 'bg-gradient-to-l from-transparent via-violet-500 to-fuchsia-500 shadow-[0_0_12px_rgba(139,92,246,0.6)] animate-pulse'
                  : 'bg-white/10'
              }`}
            />
            {renderCard()}
          </>
        ) : (
          /* Symmetrical empty spacer on desktop */
          <div className="w-full max-w-lg" />
        )}
      </div>
    </div>
  );
}
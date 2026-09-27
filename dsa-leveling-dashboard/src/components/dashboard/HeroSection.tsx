import { useState, useEffect } from 'react';
import {
  ArrowRight,
  ChevronRight,
  Code2,
  Flame,
  Layers,
  Map,
  Pause,
  Play,
  ShieldCheck,
  Sparkles,
  Swords,
  Trophy,
  Users,
  X,
  Zap,
} from 'lucide-react';
import dungeon1 from '../../assets/dungon1.png';
import dungeon3 from '../../assets/dungon3.png';
import dungeon5 from '../../assets/dungon5.png';
import rankE from '../../assets/rank-E.png';
import rankD from '../../assets/rank-D.png';
import rankC from '../../assets/rank-C.png';
import rankS from '../../assets/rank-S.png';

const benefits = [
  { icon: Users, text: 'Join a global community of learners' },
  { icon: ShieldCheck, text: 'Track your progress and stay consistent' },
  { icon: Trophy, text: 'Build skills for real world opportunities' },
];

const processCards = [
  {
    step: '01',
    badge: 'PHASE 01 · EXPLORATION',
    title: 'Enter Topic Dungeons',
    copy: 'Progress through structured DSA dungeons — from Arrays & Strings to Advanced Graphs and Dynamic Programming.',
    icon: Map,
    accent: 'border-violet-500/30 bg-violet-950/20 text-violet-300',
    iconBg: 'bg-violet-500/15 border-violet-400/30 text-violet-300',
    tags: ['5 Dungeons', '500+ Handpicked Problems', 'Tier 1 to 5'],
    metric: '+12,500 Total XP Available',
    indicator: 'bg-violet-400',
  },
  {
    step: '02',
    badge: 'PHASE 02 · COMBAT',
    title: 'Slay Code Challenges',
    copy: 'Code solutions against rigorous test suites. Optimize time and space complexity to conquer dungeon boss monsters.',
    icon: Code2,
    accent: 'border-cyan-500/30 bg-cyan-950/20 text-cyan-300',
    iconBg: 'bg-cyan-500/15 border-cyan-400/30 text-cyan-300',
    tags: ['O(N) Complexity', 'Hidden Edge Cases', 'Instant Feedback'],
    metric: '+150 XP per Boss Defeated',
    indicator: 'bg-cyan-400',
  },
  {
    step: '03',
    badge: 'PHASE 03 · PROGRESSION',
    title: 'Earn XP & Hunter Streaks',
    copy: 'Compound your skills with daily bounties. Level up your hunter attributes and maintain unshakeable consistency streaks.',
    icon: Flame,
    accent: 'border-fuchsia-500/30 bg-fuchsia-950/20 text-fuchsia-300',
    iconBg: 'bg-fuchsia-500/15 border-fuchsia-400/30 text-fuchsia-300',
    tags: ['Daily Bounties', 'Streak Multipliers', 'Level 1 → 50'],
    metric: '🔥 7-Day Consistency Multiplier',
    indicator: 'bg-fuchsia-400',
  },
  {
    step: '04',
    badge: 'PHASE 04 · PRESTIGE',
    title: 'Ascend to S-Rank Glory',
    copy: 'Rise from E-Rank novice to the legendary S-Rank. Unlock exclusive hunter titles, avatars, badges, and verified certificates.',
    icon: Trophy,
    accent: 'border-amber-500/30 bg-amber-950/20 text-amber-300',
    iconBg: 'bg-amber-500/15 border-amber-400/30 text-amber-300',
    tags: ['Rank E → S', 'Leaderboards', 'Verified Certificate'],
    metric: 'Elite Hunter Certification',
    indicator: 'bg-amber-400',
  },
];

const trailerSteps = [
  {
    title: 'Enter 5 Epic Dungeons',
    desc: 'From Foundations to Mastery — conquer curated DSA problem gates sorted by topic and tier.',
    img: dungeon1,
    tag: 'Dungeon Exploration',
  },
  {
    title: 'Earn XP & Level Up',
    desc: 'Gain combat XP for every test case passed. Maintain streaks and conquer daily hunter bounties.',
    img: dungeon3,
    tag: 'Gamified Mechanics',
  },
  {
    title: 'Ascend to S-Rank',
    desc: 'Climb from Rank E to S-Rank Hunter, unlock exclusive badges, avatars, and verified certificates.',
    img: dungeon5,
    tag: 'Hunter Prestige',
  },
];

export function HeroSection() {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Close trailer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsTrailerOpen(false);
    };
    if (isTrailerOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isTrailerOpen]);

  return (
    <section
      id="home"
      className="hero-section relative min-h-[760px] overflow-hidden bg-[#07070e] pt-28 pb-16 sm:min-h-[820px] sm:pt-32 sm:pb-20 lg:min-h-[880px] lg:pt-36 lg:pb-24 flex items-center"
    >
      {/* Sleek, clean atmospheric gaming tech background (No background hero image) */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        {/* Ambient radial lighting glows */}
        <div className="absolute right-[-10%] top-[-15%] h-[600px] w-[600px] rounded-full bg-violet-600/12 blur-[130px] animate-pulse-glow" />
        <div className="absolute left-[-10%] top-[40%] h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[130px]" />
        <div className="absolute right-[25%] bottom-[5%] h-[400px] w-[400px] rounded-full bg-fuchsia-600/8 blur-[120px]" />

        {/* Tech grid texture */}
        <div className="hero-grid absolute inset-0 opacity-25" />

        {/* Ambient floating energy sparks */}
        <div className="absolute inset-0">
          <span className="absolute top-[22%] left-[18%] h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_12px_#c084fc] animate-float-gentle opacity-60" />
          <span className="absolute top-[48%] right-[15%] h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_16px_#e879f9] animate-float-gentle [animation-delay:1.8s] opacity-50" />
          <span className="absolute top-[75%] left-[32%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9] animate-float-gentle [animation-delay:3s] opacity-60" />
        </div>

        {/* Bottom smooth fade into the rest of the page */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07070e] to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 mx-auto w-full max-w-[1260px] px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Left Column: Hero Copy & Actions */}
          <div className="hero-copy max-w-[620px]">
            {/* Kicker badge */}
            <div className="hero-kicker mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-[#160d2b]/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-200 shadow-[0_0_25px_rgba(168,85,247,0.22)] backdrop-blur-md">
              <Sparkles size={12} className="text-violet-300 animate-pulse" />
              <span>Level up your DSA skills</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title font-display text-[42px] font-bold leading-[1.02] tracking-[-0.035em] text-white sm:text-[56px] lg:text-[66px] xl:text-[72px]">
              Turn DSA into a
              <span className="mt-1 block bg-gradient-to-r from-white via-violet-200 to-fuchsia-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(192,132,252,0.38)]">
                Leveling Journey
              </span>
            </h1>

            {/* Subtitle & Value Proposition */}
            <div className="hero-description mt-6 max-w-[540px] space-y-2">
              <p className="text-[15px] font-semibold text-zinc-100 sm:text-base">
                Solve problems. Earn XP. Level up. Unlock rewards.
              </p>
              <p className="text-[13px] leading-relaxed text-zinc-400 sm:text-[14px]">
                Experience Data Structures and Algorithms like never before in a gamified, immersive journey built for deliberate practice and true mastery.
              </p>
            </div>

            {/* CTA Action Buttons */}
            <div className="hero-actions mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#about"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(124,58,237,0.4)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(124,58,237,0.55)] active:translate-y-0"
              >
                <span>Start Your Journey</span>
                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={() => setIsTrailerOpen(true)}
                className="group inline-flex items-center gap-2.5 rounded-xl border border-violet-300/30 bg-[#120f26]/75 px-6 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur-md shadow-lg transition duration-300 hover:border-violet-300/60 hover:bg-violet-950/40 hover:text-white hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-violet-500/25 text-violet-300 transition duration-300 group-hover:bg-violet-500/40 group-hover:scale-110">
                  <Play size={11} fill="currentColor" className="ml-0.5" />
                </span>
                <span>Watch Trailer</span>
              </button>
            </div>

            {/* Social Proof / Live Hunter Indicator */}
            <div className="mt-5 flex items-center gap-4 text-[11px] text-zinc-400">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="font-medium text-zinc-300">14,800+ Hunters Active</span>
              </div>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">500+ Handpicked Dungeons</span>
            </div>

            {/* Benefits Strip */}
            <div className="hero-benefits mt-9 grid max-w-[620px] grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3">
              {benefits.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 rounded-2xl border border-violet-300/15 bg-[#120e24]/60 p-3.5 backdrop-blur-md transition duration-300 hover:border-violet-400/35 hover:bg-[#1a1436]/70 hover:shadow-[0_8px_25px_rgba(139,92,246,0.12)]"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-violet-400/25 bg-violet-500/15 text-violet-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                    <Icon size={17} strokeWidth={2} />
                  </div>
                  <span className="text-[11px] font-medium leading-4 text-zinc-300">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Sliding Train of 4 Process Cards */}
          <div className="relative w-full overflow-hidden rounded-3xl border border-violet-300/20 bg-[#0e0c1f]/80 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.5),0_0_40px_rgba(139,92,246,0.15)] backdrop-blur-2xl sm:p-6">
            {/* Train Header with Live Status & Controls */}
            <div className="mb-4 flex items-center justify-between border-b border-white/[0.08] pb-3.5">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-400" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-200">
                  The Leveling Process
                </span>
                <span className="hidden sm:inline-block rounded-full border border-violet-400/30 bg-violet-500/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-violet-300">
                  4 Stages
                </span>
              </div>

              {/* Pause / Play Control */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsPaused((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-zinc-300 transition hover:border-violet-300/40 hover:bg-violet-500/15 hover:text-white"
                  aria-label={isPaused ? 'Resume train' : 'Pause train'}
                >
                  {isPaused ? <Play size={10} fill="currentColor" /> : <Pause size={10} />}
                  <span>{isPaused ? 'Resume' : 'Pause'}</span>
                </button>
              </div>
            </div>

            {/* Sliding Train Conveyor Track with Seamless Edge Fades */}
            <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] py-1">
              <div className={`train-track ${isPaused ? 'is-paused' : ''}`}>
                {/* 4 process cards duplicated once to make an infinite seamless loop */}
                {[...processCards, ...processCards].map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <article
                      key={`${card.step}-${index}`}
                      className="group relative flex w-[280px] shrink-0 flex-col justify-between rounded-2xl border border-white/[0.09] bg-gradient-to-b from-white/[0.06] to-white/[0.015] p-5 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-[0_16px_36px_rgba(139,92,246,0.25)] sm:w-[310px]"
                    >
                      {/* Top Header of Card */}
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-violet-300">
                            {card.badge}
                          </span>
                          <span className="font-mono text-xs font-black text-zinc-500 group-hover:text-violet-300 transition-colors">
                            #{card.step}
                          </span>
                        </div>

                        {/* Icon & Title */}
                        <div className="mt-4 flex items-center gap-3">
                          <div
                            className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border ${card.iconBg} shadow-sm transition group-hover:scale-105`}
                          >
                            <Icon size={19} strokeWidth={2} />
                          </div>
                          <h3 className="text-[15px] font-bold text-white group-hover:text-violet-100 transition-colors">
                            {card.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="mt-3 text-xs leading-5 text-zinc-300/90">{card.copy}</p>

                        {/* Tag Chips */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {card.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-white/[0.07] bg-black/30 px-2 py-0.5 text-[10px] font-medium text-zinc-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer Metric */}
                      <div className="mt-5 border-t border-white/[0.07] pt-3 flex items-center justify-between text-[11px]">
                        <span className="flex items-center gap-1.5 font-semibold text-zinc-200">
                          <span className={`h-1.5 w-1.5 rounded-full ${card.indicator}`} />
                          {card.metric}
                        </span>
                        <ChevronRight size={14} className="text-zinc-500 group-hover:text-violet-300 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Stepper Footer Guide */}
            <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3 text-[11px] text-zinc-400">
              <span className="text-[10px] uppercase tracking-wider text-zinc-500">
                Hover to pause · Continuous live track
              </span>
              <div className="flex items-center gap-1.5">
                {processCards.map((c) => (
                  <span
                    key={c.step}
                    className="h-1.5 w-5 rounded-full bg-violet-400/30 transition hover:bg-violet-400"
                    title={`Stage ${c.step}: ${c.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Cinematic Trailer Modal */}
      {isTrailerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop blur overlay */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setIsTrailerOpen(false)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-[720px] overflow-hidden rounded-3xl border border-violet-400/30 bg-[#0d0a1b] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.8),0_0_50px_rgba(139,92,246,0.25)] sm:p-8">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-violet-300/15 pb-4">
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-violet-500/20 text-violet-300">
                  <Sparkles size={15} />
                </span>
                <div>
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    The Hunter's Journey — Interactive Preview
                  </h3>
                  <p className="text-[11px] text-zinc-400">Discover how DSA Leveling transforms deliberate practice</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsTrailerOpen(false)}
                className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-zinc-400 transition hover:border-white/30 hover:text-white"
                aria-label="Close trailer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Stepper Tabs */}
            <div className="mt-5 grid grid-cols-3 gap-2">
              {trailerSteps.map((step, idx) => (
                <button
                  key={step.tag}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`rounded-xl border px-3 py-2 text-left transition duration-200 ${
                    activeTab === idx
                      ? 'border-violet-400 bg-violet-600/20 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                      : 'border-white/[0.08] bg-white/[0.02] text-zinc-400 hover:border-white/20 hover:text-zinc-200'
                  }`}
                >
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-violet-300">
                    Phase 0{idx + 1}
                  </span>
                  <span className="mt-0.5 block truncate text-xs font-semibold">{step.tag}</span>
                </button>
              ))}
            </div>

            {/* Active Feature Showcase */}
            <div className="mt-5 overflow-hidden rounded-2xl border border-violet-400/20 bg-black/40">
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={trailerSteps[activeTab].img}
                  alt={trailerSteps[activeTab].title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a1b] via-[#0d0a1b]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block rounded-full bg-violet-600/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    {trailerSteps[activeTab].tag}
                  </span>
                  <h4 className="mt-1 text-lg font-bold text-white sm:text-xl">
                    {trailerSteps[activeTab].title}
                  </h4>
                  <p className="mt-1 text-xs text-zinc-300 sm:text-sm">
                    {trailerSteps[activeTab].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-violet-300/10 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  <img src={rankE} alt="" className="h-6 w-6 object-contain" />
                  <img src={rankD} alt="" className="h-6 w-6 object-contain" />
                  <img src={rankC} alt="" className="h-6 w-6 object-contain" />
                  <img src={rankS} alt="" className="h-6 w-6 object-contain" />
                </div>
                <span className="text-[11px] text-zinc-400">6 Hunter Ranks to Conquer</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsTrailerOpen(false)}
                  className="rounded-xl border border-white/10 px-4 py-2 text-xs font-semibold text-zinc-300 hover:bg-white/5"
                >
                  Close
                </button>
                <a
                  href="#about"
                  onClick={() => setIsTrailerOpen(false)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2 text-xs font-bold text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:from-violet-500 hover:to-indigo-500"
                >
                  <span>Begin Leveling Now</span>
                  <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

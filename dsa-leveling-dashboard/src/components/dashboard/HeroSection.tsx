import { useState, useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Flame,
  Play,
  ShieldCheck,
  Sparkles,
  Sword,
  Trophy,
  Users,
  X,
  Zap,
} from 'lucide-react';
import heroBg from '../../assets/dashboard-hero.png';
import rankE from '../../assets/rank-E.png';
import rankD from '../../assets/rank-D.png';
import rankC from '../../assets/rank-C.png';
import rankS from '../../assets/rank-S.png';
import dungeon1 from '../../assets/dungon1.png';
import dungeon2 from '../../assets/dungon2.png';
import dungeon3 from '../../assets/dungon3.png';
import dungeon4 from '../../assets/dungon4.png';
import dungeon5 from '../../assets/dungon5.png';

const benefits = [
  { icon: Users, text: 'Join a global community of learners' },
  { icon: ShieldCheck, text: 'Track your progress and stay consistent' },
  { icon: Trophy, text: 'Build skills for real world opportunities' },
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
  const [xp, setXp] = useState(1450);
  const [levelUpNotice, setLevelUpNotice] = useState(false);
  const maxXp = 2000;

  const handleSimulateXp = () => {
    if (xp + 250 >= maxXp) {
      setXp(maxXp);
      setLevelUpNotice(true);
      setTimeout(() => setLevelUpNotice(false), 3000);
    } else {
      setXp((prev) => prev + 250);
    }
  };

  const handleResetXp = () => {
    setXp(1450);
    setLevelUpNotice(false);
  };

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

  const xpPercent = Math.min(100, Math.round((xp / maxXp) * 100));

  return (
    <section
      id="home"
      className="hero-section relative min-h-[760px] overflow-hidden bg-[#07070e] pt-24 pb-16 sm:min-h-[820px] sm:pt-28 sm:pb-20 lg:min-h-[880px] lg:pt-32 lg:pb-24"
    >
      {/* Background artwork: Solo Leveling Hunter & Monolith */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <img
          src={heroBg}
          alt="DSA Leveling Hunter facing the purple dungeon monolith"
          className="h-full w-full object-cover object-[78%_center] sm:object-[72%_center] lg:object-right-top transition-transform duration-1000 ease-out"
        />

        {/* Ambient layered gradients for 100% text readability & atmospheric blending */}
        {/* Left deep dark vignette behind copy */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[82%] lg:w-[68%] bg-gradient-to-r from-[#07070e] via-[#07070e]/95 to-transparent z-10" />

        {/* Mobile/Tablet overall dark wash to keep text ultra-crisp */}
        <div className="absolute inset-0 bg-[#07070e]/45 lg:hidden z-10" />

        {/* Top gradient for navbar blending */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#07070e] via-[#07070e]/60 to-transparent z-10" />

        {/* Bottom smooth fade into the rest of the page */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#07070e] via-[#07070e]/80 to-transparent z-10" />

        {/* Monolith Apex Purple Rune Glow */}
        <div className="absolute right-[12%] sm:right-[18%] lg:right-[20%] top-[12%] lg:top-[14%] h-64 w-64 rounded-full bg-violet-600/30 blur-[90px] animate-pulse-glow pointer-events-none z-10" />

        {/* Subtle cyber grid texture */}
        <div className="hero-grid absolute inset-0 z-10 opacity-20 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid min-h-[640px] items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Left Column: Hero Copy & Actions */}
          <div className="hero-copy max-w-[640px]">
            {/* Kicker badge */}
            <div className="hero-kicker mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-[#160d2b]/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-200 shadow-[0_0_25px_rgba(168,85,247,0.22)] backdrop-blur-md">
              <Sparkles size={12} className="text-violet-300 animate-pulse" />
              <span>Level up your DSA skills</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title font-display text-[42px] font-bold leading-[1.02] tracking-[-0.035em] text-white sm:text-[56px] lg:text-[68px] xl:text-[74px]">
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

            {/* Benefits Strip (Matching dashboard reference) */}
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

          {/* Right Column: Motto & Interactive Hunter Awakening HUD */}
          <div className="relative flex flex-col justify-between self-stretch pt-6 lg:pt-0">
            {/* "DISCIPLINE SOLVES EVERYTHING" Watermark (Top right from reference) */}
            <div className="pointer-events-none hidden select-none text-right font-display text-xs uppercase tracking-[0.34em] text-violet-300/50 lg:block xl:text-sm">
              <p>D I S C I P L I N E</p>
              <p className="mt-1">S O L V E S</p>
              <p className="mt-1">E V E R Y T H I N G</p>
            </div>

            {/* Floating Dungeon Sparks / Ambient Runes */}
            <div className="pointer-events-none absolute inset-0 hidden lg:block overflow-hidden">
              <span className="absolute top-[28%] left-[20%] h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_12px_#c084fc] animate-float-gentle opacity-75" />
              <span className="absolute top-[42%] right-[25%] h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_16px_#e879f9] animate-float-gentle [animation-delay:1.5s] opacity-60" />
              <span className="absolute top-[65%] left-[35%] h-1.5 w-1.5 rounded-full bg-indigo-300 shadow-[0_0_10px_#818cf8] animate-float-gentle [animation-delay:2.5s] opacity-70" />
            </div>

            {/* Interactive Floating Hunter HUD Card */}
            <div className="mt-6 lg:mt-auto w-full max-w-[420px] mx-auto lg:mx-0 lg:ml-auto rounded-2xl border border-violet-300/25 bg-[#0f0c22]/85 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(139,92,246,0.18)] backdrop-blur-xl transition duration-300 hover:border-violet-300/50">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-violet-300/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-300">
                    System HUD · Hunter Status
                  </span>
                </div>
                <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-violet-200">
                  Live Preview
                </span>
              </div>

              {/* Hunter Profile Row */}
              <div className="mt-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative grid h-11 w-11 place-items-center rounded-xl border border-violet-400/30 bg-violet-950/60 shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                    <img src={rankC} alt="Hunter Rank C" className="h-9 w-9 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Hunter Jin-Woo</h3>
                    <p className="text-[11px] text-zinc-400">
                      Rank C Hunter <span className="text-zinc-600">·</span> Level 12
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-300">
                    <Flame size={13} className="text-amber-400" /> 7 Day Streak
                  </span>
                  <p className="text-[10px] text-zinc-500">Daily Quest Active</p>
                </div>
              </div>

              {/* Active Dungeon & XP Gauge */}
              <div className="mt-4 rounded-xl border border-white/[0.06] bg-black/30 p-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="flex items-center gap-1.5 font-medium text-zinc-300">
                    <Sword size={12} className="text-violet-400" />
                    Dungeon 01: Arrays & Hashing
                  </span>
                  <span className="font-mono text-xs font-bold text-violet-300">{xpPercent}%</span>
                </div>

                {/* Progress bar */}
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.08]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-400 shadow-[0_0_12px_rgba(168,85,247,0.7)] transition-all duration-500 ease-out"
                    style={{ width: `${xpPercent}%` }}
                  />
                </div>

                <div className="mt-2 flex items-center justify-between text-[10px] text-zinc-400">
                  <span>{xp.toLocaleString()} / {maxXp.toLocaleString()} XP</span>
                  <span className="text-violet-300">
                    {maxXp - xp > 0 ? `${maxXp - xp} XP to Level 13` : 'Ready for Promotion!'}
                  </span>
                </div>
              </div>

              {/* Interactive Simulator Button */}
              <div className="mt-3 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSimulateXp}
                  disabled={xp >= maxXp}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-violet-400/30 bg-violet-600/20 py-2 text-[11px] font-semibold text-violet-200 transition duration-200 hover:bg-violet-600/35 hover:text-white disabled:opacity-50"
                >
                  <Zap size={12} className="text-violet-300" />
                  {xp >= maxXp ? 'Max XP Reached!' : 'Simulate Solving Problem (+250 XP)'}
                </button>

                {xp >= maxXp && (
                  <button
                    type="button"
                    onClick={handleResetXp}
                    className="rounded-lg border border-white/10 px-2.5 py-2 text-[10px] text-zinc-400 hover:text-white"
                  >
                    Reset
                  </button>
                )}
              </div>

              {levelUpNotice && (
                <div className="mt-2 flex items-center justify-center gap-1.5 rounded-lg bg-emerald-500/20 py-1 text-[11px] font-semibold text-emerald-300 animate-bounce">
                  <CheckCircle2 size={13} /> Promotion Dungeon Gate Unlocked!
                </div>
              )}
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

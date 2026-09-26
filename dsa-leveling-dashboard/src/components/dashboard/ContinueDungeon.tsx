import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import dungeonImage from '../../assets/dungons.png';
import { currentDungeon } from '../../data/mockDashboard';
import { GlassCard } from './GlassCard';

export function ContinueDungeon() {
  return (
    <GlassCard className="group relative min-h-[286px] overflow-hidden border-violet-400/10 p-6 shadow-violet-soft sm:p-7">
      <div className="absolute inset-y-0 right-0 w-[54%] opacity-70 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-85 sm:w-[48%]">
        <img src={dungeonImage} alt="Fantasy dungeon environment" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a12] via-[#0c0a12]/60 to-transparent" />
      </div>
      <div className="relative z-10 max-w-xl">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300/75"><Sparkles size={13} />Continue your journey</div>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{currentDungeon.name} Dungeon</h2>
        <p className="mt-1 text-sm text-zinc-500">Pick up where you left off and keep your momentum.</p>
        <div className="mt-6 grid max-w-lg grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
          <div><p className="text-[10px] uppercase tracking-wider text-zinc-600">Progress</p><p className="mt-1 text-sm font-medium text-zinc-200">{currentDungeon.progress}%</p></div>
          <div><p className="text-[10px] uppercase tracking-wider text-zinc-600">Problems</p><p className="mt-1 text-sm font-medium text-zinc-200">{currentDungeon.completedProblems} / {currentDungeon.totalProblems}</p></div>
          <div><p className="text-[10px] uppercase tracking-wider text-zinc-600">Difficulty</p><p className="mt-1 text-sm font-medium text-zinc-200">{currentDungeon.difficulty}</p></div>
          <div><p className="text-[10px] uppercase tracking-wider text-zinc-600">XP available</p><p className="mt-1 text-sm font-medium text-violet-300">+{currentDungeon.xpAvailable} XP</p></div>
        </div>
        <div className="mt-5 h-1.5 max-w-lg overflow-hidden rounded-full bg-white/[0.07]"><div className="h-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-400" style={{ width: `${currentDungeon.progress}%` }} /></div>
        <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(124,58,237,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_34px_rgba(124,58,237,0.32)]">
          Continue Dungeon <ArrowRight size={16} />
        </button>
      </div>
      <ChevronRight className="absolute bottom-5 right-5 hidden text-white/10 sm:block" size={28} />
    </GlassCard>
  );
}

import { Check, Crosshair } from 'lucide-react';
import { todaysMission } from '../../data/mockDashboard';
import { GlassCard } from './GlassCard';

export function TodaysMission() {
  const progress = (todaysMission.completed / todaysMission.total) * 100;
  return (
    <GlassCard className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500"><Crosshair size={13} className="text-violet-400" />Today's mission</div>
          <h2 className="mt-2 text-base font-semibold text-white">{todaysMission.title}</h2>
        </div>
        <span className="rounded-full border border-violet-400/15 bg-violet-500/10 px-2.5 py-1 text-[11px] font-medium text-violet-300">+{todaysMission.rewardXp} XP</span>
      </div>
      <div className="mt-5 flex items-center gap-4">
        <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full" style={{ background: `conic-gradient(#8b5cf6 ${progress}%, rgba(255,255,255,.06) ${progress}% 100%)` }}>
          <div className="grid h-9 w-9 place-items-center rounded-full bg-[#0c0a12] text-[11px] font-semibold text-white">{todaysMission.completed}/{todaysMission.total}</div>
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex justify-between text-[11px] text-zinc-500"><span>Progress</span><span>{progress}%</span></div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]"><div className="h-full rounded-full bg-violet-500" style={{ width: `${progress}%` }} /></div>
        </div>
        <button className="shrink-0 rounded-lg border border-white/[0.08] px-3 py-2 text-xs font-medium text-zinc-300 transition hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"><Check size={14} className="mr-1 inline" />Continue</button>
      </div>
    </GlassCard>
  );
}

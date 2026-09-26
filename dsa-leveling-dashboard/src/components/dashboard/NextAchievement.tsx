import { ArrowUpRight, Award } from 'lucide-react';
import { achievement } from '../../data/mockDashboard';
import { GlassCard } from './GlassCard';

export function NextAchievement() {
  const progress = (achievement.completed / achievement.total) * 100;
  return (
    <GlassCard className="p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-lg bg-violet-500/10 text-violet-300"><Award size={17} /></div><div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Next achievement</p><h2 className="mt-0.5 text-sm font-semibold text-white">{achievement.name}</h2></div></div>
        <span className="text-[10px] text-zinc-600">{achievement.completed}/{achievement.total}</span>
      </div>
      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/[0.06]"><div className="h-full rounded-full bg-gradient-to-r from-violet-600 to-violet-400" style={{ width: `${progress}%` }} /></div>
      <div className="mt-2 flex justify-between text-[10px] text-zinc-600"><span>{achievement.completed} problems solved</span><span>{achievement.reward}</span></div>
      <button className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 transition hover:text-violet-300">View Rewards <ArrowUpRight size={13} /></button>
    </GlassCard>
  );
}

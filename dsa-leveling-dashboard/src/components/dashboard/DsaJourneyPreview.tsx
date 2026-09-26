import { Check, ChevronRight, Lock } from 'lucide-react';
import { roadmapStages } from '../../data/mockDashboard';
import { GlassCard } from './GlassCard';

export function DsaJourneyPreview() {
  return (
    <GlassCard className="overflow-hidden p-5 sm:p-6">
      <div className="flex items-end justify-between gap-4">
        <div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Progression</p><h2 className="mt-1 text-lg font-semibold text-white">Your DSA Journey</h2></div>
        <button className="hidden items-center gap-1 text-xs font-medium text-violet-300 transition hover:text-white sm:flex">View Full Roadmap <ChevronRight size={14} /></button>
      </div>
      <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {roadmapStages.map((stage, index) => (
          <div key={stage.name} className="flex min-w-[160px] flex-1 items-center gap-2">
            <div className={`relative w-full rounded-xl border p-3 transition ${stage.state === 'current' ? 'border-violet-400/25 bg-violet-500/[0.08] shadow-[0_0_26px_rgba(139,92,246,0.07)]' : stage.state === 'completed' ? 'border-white/[0.1] bg-white/[0.04]' : 'border-white/[0.05] bg-black/10'}`}>
              <div className="flex items-center gap-2">
                <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg ${stage.state === 'current' ? 'bg-violet-500/15 text-violet-300' : stage.state === 'completed' ? 'bg-white/[0.06] text-zinc-300' : 'bg-white/[0.025] text-zinc-700'}`}>
                  {stage.state === 'completed' ? <Check size={14} /> : stage.state === 'locked' ? <Lock size={13} /> : <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,.8)]" />}
                </span>
                <div className="min-w-0"><p className={`truncate text-xs font-semibold ${stage.state === 'locked' ? 'text-zinc-600' : 'text-zinc-200'}`}>{stage.name}</p><p className="mt-0.5 truncate text-[10px] text-zinc-600">{stage.description}</p></div>
              </div>
              {stage.state === 'current' && <span className="mt-2 block text-[9px] font-semibold uppercase tracking-widest text-violet-400">Current stage</span>}
            </div>
            {index < roadmapStages.length - 1 && <span className="hidden h-px w-2 shrink-0 bg-white/[0.08] xl:block" />}
          </div>
        ))}
      </div>
      <button className="mt-2 flex items-center gap-1 text-xs font-medium text-violet-300 sm:hidden">View Full Roadmap <ChevronRight size={14} /></button>
    </GlassCard>
  );
}

import { Award, CheckCircle2, CircleArrowUp } from 'lucide-react';
import { GlassCard } from './GlassCard';
import type { Activity } from '../../types/dashboard';

interface RecentActivityProps {
  activities: Activity[];
}

const icons = { check: CheckCircle2, level: CircleArrowUp, badge: Award };

export function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <GlassCard as="section" className="p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-white">Recent Activity</h2>
        <span className="text-[10px] uppercase tracking-wider text-zinc-600">Latest</span>
      </div>
      <div className="mt-4 divide-y divide-white/[0.06]">
        {activities.map((item) => {
          const Icon = icons[item.icon];
          return (
            <div key={item.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/[0.035] text-zinc-500">
                <Icon size={15} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium text-zinc-300">{item.title}</p>
                <p className="mt-0.5 text-[10px] text-zinc-600">{item.time}</p>
              </div>
              <span className="shrink-0 text-[10px] font-medium text-violet-300">{item.reward}</span>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}
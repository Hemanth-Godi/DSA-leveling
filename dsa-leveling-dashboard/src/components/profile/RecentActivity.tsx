import { CheckCircle2, CircleArrowUp, Award, Sword } from 'lucide-react';
import { GlassCard } from '../dashboard/GlassCard';
import type { Activity } from '../../types/profile';

interface RecentActivityProps {
  activities: Activity[];
}

const icons = { 
  check: CheckCircle2, 
  level: CircleArrowUp, 
  badge: Award,
  dungeon: Sword,
};

export function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <GlassCard as="section" className="p-5 sm:p-6">
      <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Recent Activity</p>
      <div className="divide-y divide-white/[0.06]">
        {activities.map((item) => {
          const Icon = icons[item.icon];
          return (
            <div key={item.id} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/[0.035] text-zinc-500">
                <Icon size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-zinc-300">{item.title}</p>
                <p className="mt-0.5 text-[11px] text-zinc-600">{item.time}</p>
              </div>
              <span className="shrink-0 text-sm font-medium text-violet-300">{item.xp}</span>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}
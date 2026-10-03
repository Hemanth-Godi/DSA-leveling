import { Lock, Sparkles, ChevronRight } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { DungeonCard } from './DungeonCard';
import type { Dungeon } from '../../types/dashboard';

const dungeonImages = [
  '/src/assets/dungon1.png',
  '/src/assets/dungon2.png',
  '/src/assets/dungon3.png',
  '/src/assets/dungon4.png',
  '/src/assets/dungon5.png',
];

interface DungeonProgressProps {
  dungeons: Dungeon[];
  title?: string;
}

export function DungeonProgress({ dungeons, title = 'Your Dungeons' }: DungeonProgressProps) {
  const availableDungeons = dungeons.filter(d => d.state === 'available');
  const lockedDungeons = dungeons.filter(d => d.state === 'locked');
  const completedDungeons = dungeons.filter(d => d.state === 'completed');

  return (
    <GlassCard className="overflow-hidden p-5 sm:p-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            <Sparkles size={13} className="inline-block mr-1" />{title}
          </p>
          <h2 className="mt-1 text-lg font-semibold text-white">
            {availableDungeons.length + completedDungeons.length} available · {lockedDungeons.length} locked
          </h2>
        </div>
        <button className="hidden items-center gap-1 text-xs font-medium text-violet-300 transition hover:text-white sm:flex">
          View All <ChevronRight size={14} />
        </button>
      </div>
      
      <div className="mt-6 space-y-3">
        {dungeons.map((dungeon, index) => (
          <DungeonCard key={dungeon.name} dungeon={dungeon} index={index} dungeonImages={dungeonImages} />
        ))}
      </div>
    </GlassCard>
  );
}
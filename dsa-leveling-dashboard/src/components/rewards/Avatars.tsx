import { Check, Lock } from 'lucide-react';
import { GlassCard } from '../dashboard/GlassCard';
import type { AvatarReward } from '../../types/rewards';

interface AvatarsProps {
  avatars: AvatarReward[];
}

export function Avatars({ avatars }: AvatarsProps) {
  return (
    <GlassCard className="p-5 sm:p-6">
      <div className="flex items-center justify-between mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Avatars</p>
        <p className="text-[10px] text-zinc-500">
          {avatars.filter(a => a.status === 'unlocked').length} / {avatars.length}
        </p>
      </div>
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {avatars.map((avatar) => (
          <div key={avatar.id} className="relative group">
            <GlassCard className={`aspect-square relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${avatar.status === 'unlocked' ? 'border-violet-400/20 bg-violet-500/5' : 'border-white/5 bg-white/2 opacity-70'}`}>
              <img
                src={avatar.image}
                alt={avatar.name}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                style={{ opacity: avatar.status === 'locked' ? 0.4 : 1 }}
              />
              {avatar.status === 'locked' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <Lock size={24} className="text-white/50" />
                </div>
              )}
              {avatar.status === 'unlocked' && (
                <div className="absolute top-2 right-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500">
                    <Check size={10} className="text-white" strokeWidth={3} />
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-[#0c0a12] via-transparent to-transparent">
                <p className={`text-[10px] font-semibold text-center truncate ${avatar.status === 'locked' ? 'text-zinc-500' : 'text-white'}`}>
                  {avatar.name}
                </p>
                {avatar.status !== 'unlocked' && avatar.unlockCondition && (
                  <p className={`mt-0.5 text-[9px] text-center ${avatar.status === 'locked' ? 'text-zinc-600' : 'text-violet-400'}`}>
                    {avatar.unlockCondition}
                  </p>
                )}
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
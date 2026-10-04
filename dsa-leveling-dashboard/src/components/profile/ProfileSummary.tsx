import { Calendar, MapPin, Sword } from 'lucide-react';
import { GlassCard } from '../dashboard/GlassCard';
import type { HunterProfile } from '../../types/profile';

interface ProfileSummaryProps {
  profile: HunterProfile;
}

export function ProfileSummary({ profile }: ProfileSummaryProps) {
  return (
    <GlassCard className="p-5 sm:p-6">
      <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Profile Summary</p>
      <div className="grid gap-3">
        <GlassCard className="p-4 border-violet-400/10 bg-violet-500/3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-violet-400/30 bg-violet-500/15 text-violet-300">
              <Calendar size={18} strokeWidth={1.7} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-zinc-500">Hunter Since</p>
              <p className="mt-0.5 font-semibold text-white">{profile.hunterSince}</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-4 border-emerald-400/10 bg-emerald-500/3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-400/30 bg-emerald-500/15 text-emerald-300">
              <MapPin size={18} strokeWidth={1.7} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-zinc-500">Current Journey</p>
              <p className="mt-0.5 font-semibold text-white">{profile.currentJourney}</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-4 border-fuchsia-400/10 bg-fuchsia-500/3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-fuchsia-400/30 bg-fuchsia-500/15 text-fuchsia-300">
              <Sword size={18} strokeWidth={1.7} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-zinc-500">Dungeon Status</p>
              <p className="mt-0.5 truncate font-semibold text-white">{profile.dungeonStatus.name} — {profile.dungeonStatus.progress}%</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </GlassCard>
  );
}

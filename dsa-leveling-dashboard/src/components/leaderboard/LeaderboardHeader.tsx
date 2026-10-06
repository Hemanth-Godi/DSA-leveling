import { Trophy } from 'lucide-react';

export function LeaderboardHeader() {
  return (
    <header className="flex items-end justify-between gap-6">
      <div>
        <p className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-violet-300"><Trophy size={13} /> Hunter rankings</p>
        <h1 className="font-display text-4xl leading-none text-white sm:text-5xl">Hunter Leaderboard</h1>
        <p className="mt-3 text-sm text-zinc-400">Compete. Climb. Become the strongest.</p>
      </div>
      <p className="hidden text-right text-[11px] font-medium text-zinc-500 sm:block">Rankings update as Hunters earn their next win.</p>
    </header>
  );
}

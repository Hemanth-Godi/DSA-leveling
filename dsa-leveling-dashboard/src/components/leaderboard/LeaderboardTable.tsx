import { Search } from 'lucide-react';
import { LeaderboardRow } from './LeaderboardRow';
import type { LeaderboardHunter, LeaderboardMetric } from '../../types/leaderboard';

export function LeaderboardTable({ hunters, metric, search, onSearch }: { hunters: LeaderboardHunter[]; metric: LeaderboardMetric; search: string; onSearch: (value: string) => void }) {
  return <section className="overflow-hidden rounded-2xl border border-white/[.1] bg-[#0d0c18]/80 shadow-[0_22px_64px_rgba(0,0,0,.24)] backdrop-blur-xl">
    <div className="flex flex-col gap-4 border-b border-white/[.08] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-zinc-500">Rankings</p><label className="relative block sm:w-56"><Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" /><input value={search} onChange={(event) => onSearch(event.target.value)} placeholder="Find a hunter" className="w-full rounded-xl border border-white/[.1] bg-white/[.035] py-2.5 pl-9 pr-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-violet-300/45" /></label></div>
    <div className="grid grid-cols-[36px_minmax(0,1fr)_50px_72px] gap-2 border-b border-white/[.08] px-3 py-3 text-[9px] font-bold uppercase tracking-[.14em] text-zinc-500 sm:grid-cols-[54px_minmax(0,1fr)_76px_104px] sm:gap-4 sm:px-5"><span>#</span><span>Hunter</span><span className="text-center">Rank</span><span className="text-right">Score</span></div>
    <div>{hunters.length ? hunters.map((hunter, index) => <LeaderboardRow key={hunter.id} hunter={hunter} position={index + 1} metric={metric} />) : <p className="px-5 py-12 text-center text-sm text-zinc-500">No Hunter found.</p>}</div>
  </section>;
}

import { useMemo, useState } from 'react';
import { LeaderboardHeader, LeaderboardTable, LeaderboardTabs } from '../components/leaderboard';
import { leaderboardHunters } from '../data/leaderboardData';
import type { LeaderboardMetric } from '../types/leaderboard';

export default function Leaderboard() {
  const [metric, setMetric] = useState<LeaderboardMetric>('xp');
  const [search, setSearch] = useState('');
  const hunters = useMemo(() => leaderboardHunters.filter((hunter) => hunter.username.toLowerCase().includes(search.toLowerCase())).sort((a, b) => b[metric] - a[metric]), [metric, search]);
  return <main className="landing-page min-h-screen bg-[#07070e] pb-14 pt-24 text-zinc-100 sm:pb-20 sm:pt-28"><div className="mx-auto max-w-[1080px] px-4 sm:px-6"><div className="space-y-7"><LeaderboardHeader /><LeaderboardTabs metric={metric} onChange={setMetric} /><LeaderboardTable hunters={hunters} metric={metric} search={search} onSearch={setSearch} /></div></div></main>;
}

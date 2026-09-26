import { BarChart3, BookOpen, Code2, Gift, Home, LogOut, Map, Settings, Trophy, UserRound, Swords } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', icon: Home, active: true },
  { label: 'Roadmap', icon: Map },
  { label: 'Dungeons', icon: Swords },
  { label: 'Rewards', icon: Gift },
  { label: 'Leaderboard', icon: Trophy },
];

export function Sidebar() {
  return (
    <aside className="hidden w-[236px] shrink-0 border-r border-white/[0.06] bg-black/10 lg:flex lg:flex-col">
      <div className="flex h-full flex-col px-4 py-6">
        <div className="mb-10 flex items-center gap-3 px-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl border border-violet-400/25 bg-violet-500/10 text-violet-300 shadow-[0_0_28px_rgba(139,92,246,0.12)]">
            <Code2 size={18} />
          </div>
          <div>
            <p className="text-sm font-bold tracking-[0.12em] text-white">DSA</p>
            <p className="text-[10px] font-medium tracking-[0.28em] text-violet-300/70">LEVELING</p>
          </div>
        </div>

        <nav aria-label="Primary navigation" className="space-y-1">
          {navItems.map(({ label, icon: Icon, active }) => (
            <button
              key={label}
              className={`group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                active ? 'bg-violet-500/10 text-violet-200' : 'text-zinc-500 hover:bg-white/[0.035] hover:text-zinc-200'
              }`}
            >
              {active && <span className="absolute left-0 h-5 w-0.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />}
              <Icon size={17} className={active ? 'text-violet-300' : 'text-zinc-600 group-hover:text-zinc-300'} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto space-y-1 border-t border-white/[0.06] pt-4">
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-500 transition hover:bg-white/[0.035] hover:text-zinc-200"><UserRound size={17} />Profile</button>
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-500 transition hover:bg-white/[0.035] hover:text-zinc-200"><Settings size={17} />Settings</button>
          <div className="pt-2">
            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-xs text-zinc-700 transition hover:text-zinc-400"><LogOut size={15} />Sign out</button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function MobileNav() {
  return (
    <nav aria-label="Mobile navigation" className="fixed inset-x-3 bottom-3 z-30 flex items-center justify-around rounded-2xl border border-white/[0.08] bg-[#0c0a12]/90 p-2 shadow-2xl backdrop-blur-xl lg:hidden">
      {navItems.slice(0, 5).map(({ label, icon: Icon, active }) => (
        <button key={label} aria-label={label} className={`grid h-11 min-w-12 place-items-center rounded-xl transition ${active ? 'bg-violet-500/15 text-violet-300' : 'text-zinc-500 hover:text-white'}`}>
          <Icon size={18} />
        </button>
      ))}
    </nav>
  );
}

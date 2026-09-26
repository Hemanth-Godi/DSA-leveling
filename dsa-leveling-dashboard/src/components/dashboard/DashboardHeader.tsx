import { Bell, ChevronDown } from 'lucide-react';
import { Avatar } from './Avatar';

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-white/[0.06] pb-5">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-300/70">Hunter dashboard</p>
        <h1 className="mt-1 text-xl font-semibold tracking-tight text-white sm:text-2xl">Welcome back, Hunter.</h1>
        <p className="mt-1 text-sm text-zinc-500">Continue your journey and keep leveling up.</p>
      </div>
      <div className="flex items-center gap-3">
        <button aria-label="Notifications" className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-2.5 text-zinc-400 transition hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white">
          <Bell size={18} />
        </button>
        <button className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] p-1.5 pr-2.5 transition hover:border-violet-400/30 hover:bg-white/[0.05]" aria-label="Open profile menu">
          <Avatar size="sm" />
          <span className="hidden text-sm font-medium text-zinc-200 sm:inline">Hemanth</span>
          <ChevronDown size={15} className="text-zinc-500" />
        </button>
      </div>
    </header>
  );
}

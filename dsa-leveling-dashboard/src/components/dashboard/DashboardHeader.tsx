import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DashboardHeaderProps {
  username: string;
  isNewUser: boolean;
}

export function DashboardHeader({ username, isNewUser }: DashboardHeaderProps) {
  return (
    <div className="mx-auto max-w-[1240px] px-4 sm:px-6 mb-8 lg:mb-12">
      {isNewUser ? (
        <div className="text-center py-6 sm:py-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">Welcome, Hunter</p>
          <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Your journey begins here.
          </h1>
          <p className="mt-3 text-base text-zinc-400 sm:text-lg max-w-xl mx-auto">
            Complete your first challenge and earn your first XP. Every expert was once a beginner.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              to="/dungeons"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(124,58,237,0.4)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(124,58,237,0.55)]"
            >
              <Sparkles size={16} />
              Start First Dungeon
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-[13px] font-medium text-zinc-300">Welcome back, <span className="text-white font-semibold">{username}</span>.</p>
          <p className="mt-1 text-[13px] text-zinc-500">Continue your journey and keep leveling up.</p>
        </div>
      )}
    </div>
  );
}
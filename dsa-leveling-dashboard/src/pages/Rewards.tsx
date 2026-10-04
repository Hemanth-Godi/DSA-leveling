import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  RewardsHeader,
  HunterRanks,
  Avatars,
  Titles,
  XPMilestones,
  Certificate,
} from '../components/rewards';
import { rankRewards, avatarRewards, titleRewards, xpMilestones, certificateReward } from '../data/rewardsData';

export default function Rewards() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (!loggedIn) {
      window.location.href = '/login';
    }
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#07070e] flex items-center justify-center">
        <div className="text-violet-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="landing-page min-h-screen overflow-x-hidden bg-[#07070e] text-zinc-100 selection:bg-violet-500/30">
      <main className="relative z-10 pt-20 pb-12 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 space-y-8">
          {/* Rewards Header */}
          <RewardsHeader />

          {/* Hunter Ranks */}
          <HunterRanks ranks={rankRewards} />

          {/* Avatars */}
          <Avatars avatars={avatarRewards} />

          {/* Titles */}
          <Titles titles={titleRewards} />

          {/* XP Milestones */}
          <XPMilestones milestones={xpMilestones} />

          {/* Final Certificate */}
          <Certificate certificate={certificateReward} />

          {/* Back to Dashboard */}
          <div className="text-center pt-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-violet-400/30 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-violet-400/50 hover:bg-violet-500/15"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
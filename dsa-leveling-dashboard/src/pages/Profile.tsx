import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ProfileHeader,
  RankProgression,
  ProfileStats,
  EquippedTitle,
  Achievements,
  RecentActivity,
  ProfileSummary,
} from '../components/profile';
import { hunterProfile } from '../data/profileData';

export default function Profile() {
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

  const profile = hunterProfile;

  return (
    <div className="landing-page min-h-screen overflow-x-hidden bg-[#07070e] text-zinc-100 selection:bg-violet-500/30">
      <main className="relative z-10 pt-20 pb-12 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 space-y-8">
          {/* Profile Header */}
          <ProfileHeader profile={profile} />

          {/* Hunter Rank - Full Width */}
          <RankProgression profile={profile} />

          {/* Hunter Stats - Full Width Section */}
          <ProfileStats profile={profile} />

          {/* Main Content Grid - 2 Column Layout */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left Column - Title, Achievements, Activity */}
            <div className="lg:col-span-2 space-y-6">
              <EquippedTitle profile={profile} />
              <Achievements achievements={profile.achievements} />
              <RecentActivity activities={profile.recentActivity} />
            </div>

            {/* Right Column - Profile Summary */}
            <div className="lg:col-span-1 space-y-6">
              <ProfileSummary profile={profile} />
              
              {/* Back to Dashboard */}
              <Link
                to="/dashboard"
                className="block w-full inline-flex items-center justify-center gap-2 rounded-xl border border-violet-400/30 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-violet-400/50 hover:bg-violet-500/15"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
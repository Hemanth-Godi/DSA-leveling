import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  DashboardHeader,
  HunterProfile,
  ContinueJourney,
  DungeonProgress,
  QuickStats,
  TodaysMission,
  RecentActivity,
  NextAchievement,
  RankProgression,
} from '../components/dashboard';
import { returningUser, newUser, currentDungeon, dungeons, todaysMission, recentActivity, achievement } from '../data/mockDashboard';
import avatar1 from '../assets/avatar1.png';
import dungeon1 from '../assets/dungon1.png';

export default function Dashboard() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Check localStorage for login state
  useEffect(() => {
    setMounted(true);
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (!loggedIn) {
      window.location.href = '/login';
    }
    // For demo: press 'n' to toggle new user state
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'n' || e.key === 'N') {
        setIsNewUser(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#07070e] flex items-center justify-center">
        <div className="text-violet-400">Loading...</div>
      </div>
    );
  }

  const user = isNewUser ? newUser : returningUser;
  const currentDungeonData = isNewUser ? { ...currentDungeon, progress: 0, completedProblems: 0 } : currentDungeon;
  const todaysMissionData = isNewUser ? { ...todaysMission, title: 'Solve your first problem', completed: 0, total: 1 } : todaysMission;
  const recentActivityData = isNewUser ? [] : recentActivity;

  return (
    <div className="landing-page min-h-screen overflow-x-hidden bg-[#07070e] text-zinc-100 selection:bg-violet-500/30">
      <main className="relative z-10 pt-20 pb-12 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
          {/* Dashboard Header */}
          <DashboardHeader username={user.username} isNewUser={isNewUser} />

          {/* Main Grid Layout */}
          <div className="grid gap-5 lg:grid-cols-12">
            {/* Left Column - 8 cols on lg, full on mobile */}
            <div className="lg:col-span-8 space-y-5">
              {/* Hunter Profile */}
              <HunterProfile user={user} avatar={avatar1} />
              
              {/* Continue Journey */}
              <ContinueJourney dungeon={currentDungeonData} dungeonImage={dungeon1} />
              
              {/* Today's Mission */}
              <TodaysMission mission={todaysMissionData} />
              
              {/* Dungeon Progression */}
              <DungeonProgress dungeons={dungeons} />
              
              {/* Recent Activity */}
              {!isNewUser && <RecentActivity activities={recentActivityData} />}
            </div>

            {/* Right Column - 4 cols on lg, full on mobile */}
            <div className="lg:col-span-4 space-y-5">
              {/* Quick Stats */}
              <QuickStats user={user} />
              
              {/* Next Achievement */}
              <NextAchievement
                name={achievement.name}
                completed={achievement.completed}
                total={achievement.total}
                reward={achievement.reward}
              />
              
              {/* Rank Progression */}
              <RankProgression user={user} />
              
              {/* New User CTA - only for new users */}
              {isNewUser && (
                <div className="rounded-2xl border border-violet-400/20 bg-violet-500/5 p-5 text-center">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">New Hunter?</p>
                  <p className="mt-2 text-sm text-zinc-300">Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10 text-xs font-mono text-zinc-200">N</kbd> to toggle between new & returning user views</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Sword } from 'lucide-react';
import { DungeonHero, DifficultySection, BossSection } from '../components/dungeon';
import { GlassCard } from '../components/dashboard/GlassCard';
import { getDungeonById, getNavigationById } from '../data/dungeonData';
import type { Dungeon } from '../types/dungeon';

export default function Dungeon() {
  const [mounted, setMounted] = useState(false);
  const [dungeon, setDungeon] = useState<Dungeon | null>(null);
  const { topicId } = useParams<{ topicId: string }>();

  useEffect(() => {
    setMounted(true);
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (!loggedIn) {
      window.location.href = '/login';
      return;
    }
    const found = getDungeonById(topicId || '');
    if (found) {
      setDungeon(found);
    } else {
      window.location.href = '/roadmap';
    }
  }, [topicId]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#07070e] flex items-center justify-center">
        <div className="text-violet-400">Loading...</div>
      </div>
    );
  }

  if (!dungeon) {
    return (
      <div className="landing-page min-h-screen overflow-x-hidden bg-[#07070e] text-zinc-100 selection:bg-violet-500/30">
        <main className="relative z-10 pt-20 pb-12 lg:pt-24 lg:pb-16">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 text-center py-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-[#160d2b]/80 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-200 mb-4">
              Dungeon Not Found
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Dungeon Not Found</h1>
            <p className="mt-3 text-base text-zinc-400 sm:text-lg max-w-xl mx-auto">
              The dungeon you're looking for doesn't exist.
            </p>
            <Link
              to="/roadmap"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(124,58,237,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_34px_rgba(124,58,237,0.32)]"
            >
              Back to Roadmap
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const navigation = getNavigationById(dungeon.id);
  const easyUnlocked = true;
  const mediumUnlocked = dungeon.easy.every(q => q.status === 'completed');
  const hardUnlocked = dungeon.medium.every(q => q.status === 'completed');
  const bossUnlocked = dungeon.easy.every(q => q.status === 'completed') 
    && dungeon.medium.every(q => q.status === 'completed') 
    && dungeon.hard.every(q => q.status === 'completed');
  const bossCompleted = dungeon.boss.questions.every(q => q.status === 'completed');

  // Calculate overall progress including boss (35 total)
  const allQuestions = [
    ...dungeon.easy,
    ...dungeon.medium,
    ...dungeon.hard,
    ...dungeon.boss.questions
  ];
  const totalQuestions = allQuestions.length; // 35
  const completedCount = allQuestions.filter(q => q.status === 'completed').length;
  const overallProgress = Math.round((completedCount / totalQuestions) * 100);

  return (
    <div className="landing-page min-h-screen overflow-x-hidden bg-[#07070e] text-zinc-100 selection:bg-violet-500/30">
      <main className="relative z-10 pt-20 pb-12 lg:pt-24 lg:pb-16">
        <DungeonHero dungeon={dungeon} navigation={navigation} />
        
        {/* Overall Progress Update */}
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 mb-8">
          <GlassCard className="p-4 sm:p-5 border-violet-400/15 bg-violet-500/3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-violet-400/30 bg-violet-500/10 text-violet-300">
                  <Sword size={18} strokeWidth={1.7} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500">Dungeon Progress</p>
                  <p className="mt-0.5 font-bold text-white text-lg sm:text-xl">{completedCount} / {totalQuestions} Problems</p>
                </div>
              </div>
              <div className="flex items-center gap-6 shrink-0">
                <div className="hidden w-[140px] sm:block">
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full rounded-full bg-gradient-to-r from-violet-600 via-violet-400 to-indigo-400 transition-all duration-1000" style={{ width: `${overallProgress}%` }} />
                  </div>
                  <p className="mt-1.5 text-[11px] font-medium text-zinc-500">{overallProgress}%</p>
                </div>
                <span className="text-sm font-medium text-violet-300">+{dungeon.totalXP.toLocaleString()} XP</span>
              </div>
            </div>
          </GlassCard>
        </div>
        
        {/* Difficulty Sections */}
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 space-y-6">
          <div className="mb-4">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Difficulty Progression</h2>
          </div>
          
          <DifficultySection
            difficulty="easy"
            questions={dungeon.easy}
            isUnlocked={easyUnlocked}
          />
          
          <DifficultySection
            difficulty="medium"
            questions={dungeon.medium}
            isUnlocked={mediumUnlocked}
          />
          
          <DifficultySection
            difficulty="hard"
            questions={dungeon.hard}
            isUnlocked={hardUnlocked}
          />

          {/* Divider before Boss */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#07070e] px-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                Final Challenge
              </span>
            </div>
          </div>

          {/* Boss Section */}
          <BossSection
            boss={dungeon.boss}
            isUnlocked={bossUnlocked}
            isCompleted={bossCompleted}
          />
        </div>
      </main>
    </div>
  );
}
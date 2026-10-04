import type { HunterProfile, Rank } from '../types/profile';

export const hunterProfile: HunterProfile = {
  username: 'Hemanth',
  rank: 'C',
  level: 12,
  xp: 1240,
  xpToNextLevel: 2000,
  avatar: '/src/assets/avatar1.png',
  equippedTitle: 'Array Slayer',
  titleDescription: 'Unlocked through Arrays Dungeon',
  problemsSolved: 48,
  dungeonsCleared: 4,
  streak: 7,
  totalXp: 1240,
  roadmapProgress: { completed: 2, total: 15 },
  hunterSince: 'September 2026',
  currentJourney: 'Arrays',
  dungeonStatus: { name: 'Arrays', progress: 35 },
  achievements: [
    { id: 'array-slayer', name: 'Array Slayer', description: 'Complete all Array challenges', icon: '/src/assets/rank-C.png', unlocked: true, unlockedAt: '2026-09-15' },
    { id: 'first-blood', name: 'First Blood', description: 'Solve your first problem', icon: '/src/assets/rank-D.png', unlocked: true, unlockedAt: '2026-09-01' },
    { id: 'dungeon-explorer', name: 'Dungeon Explorer', description: 'Enter your first dungeon', icon: '/src/assets/rank-E.png', unlocked: true, unlockedAt: '2026-09-02' },
    { id: '7-day-streak', name: '7 Day Streak', description: 'Maintain a 7-day streak', icon: '/src/assets/rank-B.png', unlocked: true, unlockedAt: '2026-09-10' },
    { id: 'tree-master', name: 'Tree Master', description: 'Complete all Tree challenges', icon: '/src/assets/rank-A.png', unlocked: false },
    { id: 'graph-hunter', name: 'Graph Hunter', description: 'Complete all Graph challenges', icon: '/src/assets/rank-S.png', unlocked: false },
  ],
  recentActivity: [
    { id: 1, title: 'Solved Two Sum', xp: '+20 XP', time: '2 hours ago', icon: 'check' },
    { id: 2, title: 'Completed Array Challenge', xp: '+50 XP', time: 'Yesterday', icon: 'check' },
    { id: 3, title: 'Cleared Foundations Dungeon', xp: '+150 XP', time: '2 days ago', icon: 'dungeon' },
    { id: 4, title: 'Reached Level 12', xp: 'Level Up', time: '3 days ago', icon: 'level' },
    { id: 5, title: 'Earned "Array Slayer" badge', xp: 'Badge earned', time: '5 days ago', icon: 'badge' },
  ],
};

export const ranks: Rank[] = ['E', 'D', 'C', 'B', 'A', 'S'];

export const rankImages: Record<string, string> = {
  E: '/src/assets/rank-E.png',
  D: '/src/assets/rank-D.png',
  C: '/src/assets/rank-C.png',
  B: '/src/assets/rank-B.png',
  A: '/src/assets/rank-A.png',
  S: '/src/assets/rank-S.png',
};

export const rankLabels: Record<string, string> = {
  E: 'Novice',
  D: 'Apprentice',
  C: 'Adept',
  B: 'Expert',
  A: 'Master',
  S: 'Legendary',
};
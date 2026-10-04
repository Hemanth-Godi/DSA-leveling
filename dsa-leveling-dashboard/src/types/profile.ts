export type Rank = 'E' | 'D' | 'C' | 'B' | 'A' | 'S';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface Activity {
  id: number;
  title: string;
  xp: string;
  time: string;
  icon: 'check' | 'level' | 'badge' | 'dungeon';
}

export interface HunterProfile {
  username: string;
  rank: Rank;
  level: number;
  xp: number;
  xpToNextLevel: number;
  avatar: string;
  equippedTitle: string;
  titleDescription: string;
  problemsSolved: number;
  dungeonsCleared: number;
  streak: number;
  totalXp: number;
  roadmapProgress: { completed: number; total: number };
  hunterSince: string;
  currentJourney: string;
  dungeonStatus: { name: string; progress: number };
  achievements: Achievement[];
  recentActivity: Activity[];
}
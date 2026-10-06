import type { Rank } from './profile';

export type LeaderboardMetric = 'xp' | 'problemsSolved' | 'dungeonsCleared' | 'streak';

export interface LeaderboardHunter {
  id: string;
  username: string;
  avatar: string;
  rank: Rank;
  xp: number;
  problemsSolved: number;
  dungeonsCleared: number;
  streak: number;
  isCurrentUser?: boolean;
}

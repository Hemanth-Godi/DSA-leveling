export type Rank = 'E' | 'D' | 'C' | 'B' | 'A' | 'S';

export interface UserStats {
  username: string;
  level: number;
  rank: Rank;
  currentXp: number;
  nextLevelXp: number;
  problemsSolved: number;
  streak: number;
  dungeonsCleared: number;
}

export interface Dungeon {
  name: string;
  progress: number;
  completedProblems: number;
  totalProblems: number;
  difficulty: string;
  xpAvailable: number;
}

export interface Mission {
  title: string;
  completed: number;
  total: number;
  rewardXp: number;
}

export interface Activity {
  id: number;
  title: string;
  reward: string;
  time: string;
  icon: 'check' | 'level' | 'badge';
}

export interface RoadmapStage {
  name: string;
  state: 'completed' | 'current' | 'locked';
  description: string;
}

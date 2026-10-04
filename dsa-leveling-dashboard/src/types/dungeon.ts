export type QuestionStatus = 'completed' | 'current' | 'available' | 'locked';

export type Difficulty = 'easy' | 'medium' | 'hard' | 'boss';

export interface Question {
  id: string;
  number: number;
  title: string;
  difficulty: Difficulty;
  xp: number;
  status: QuestionStatus;
}

export interface BossData {
  id: string;
  name: string;
  description: string;
  image: string;
  xpReward: number;
  questions: Question[];
}

export interface Dungeon {
  id: string;
  title: string;
  description: string;
  image: string;
  totalXP: number;
  progress: number;
  completedCount: number;
  totalQuestions: number;
  easy: Question[];
  medium: Question[];
  hard: Question[];
  boss: BossData;
}

export interface DungeonNavigation {
  previous: { id: string; title: string } | null;
  current: { id: string; title: string };
  next: { id: string; title: string } | null;
}
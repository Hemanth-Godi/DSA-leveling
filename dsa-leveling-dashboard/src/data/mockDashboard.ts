import type { Activity, Dungeon, Mission, RoadmapStage, UserStats } from '../types/dashboard';

export const returningUser: UserStats = {
  username: 'Hemanth',
  level: 12,
  rank: 'C',
  currentXp: 1240,
  nextLevelXp: 2000,
  problemsSolved: 48,
  streak: 7,
  dungeonsCleared: 4,
};

export const newUser: UserStats = {
  username: 'Hemanth',
  level: 1,
  rank: 'E',
  currentXp: 0,
  nextLevelXp: 100,
  problemsSolved: 0,
  streak: 0,
  dungeonsCleared: 0,
};

export const dungeons: Dungeon[] = [
  { name: 'Arrays', progress: 68, completedProblems: 17, totalProblems: 25, difficulty: 'Intermediate', xpAvailable: 350, state: 'available' },
  { name: 'Strings', progress: 42, completedProblems: 10, totalProblems: 24, difficulty: 'Intermediate', xpAvailable: 300, state: 'available' },
  { name: 'Linked Lists', progress: 0, completedProblems: 0, totalProblems: 20, difficulty: 'Beginner', xpAvailable: 250, state: 'locked', unlockRequirement: 'Level 15' },
  { name: 'Stacks', progress: 0, completedProblems: 0, totalProblems: 18, difficulty: 'Beginner', xpAvailable: 250, state: 'locked', unlockRequirement: 'Complete Linked Lists' },
  { name: 'Queues', progress: 0, completedProblems: 0, totalProblems: 18, difficulty: 'Beginner', xpAvailable: 250, state: 'locked', unlockRequirement: 'Complete Linked Lists' },
  { name: 'Trees', progress: 0, completedProblems: 0, totalProblems: 22, difficulty: 'Advanced', xpAvailable: 500, state: 'locked', unlockRequirement: 'Complete Stacks & Queues' },
  { name: 'Graphs', progress: 0, completedProblems: 0, totalProblems: 25, difficulty: 'Advanced', xpAvailable: 600, state: 'locked', unlockRequirement: 'Complete Trees' },
  { name: 'Dynamic Programming', progress: 0, completedProblems: 0, totalProblems: 30, difficulty: 'Expert', xpAvailable: 800, state: 'locked', unlockRequirement: 'Complete Graphs' },
];

export const currentDungeon: Dungeon = {
  name: 'Arrays',
  progress: 68,
  completedProblems: 17,
  totalProblems: 25,
  difficulty: 'Intermediate',
  xpAvailable: 350,
  state: 'available',
};

export const todaysMission: Mission = {
  title: 'Complete 3 problems',
  completed: 2,
  total: 3,
  rewardXp: 100,
};

export const roadmapStages: RoadmapStage[] = [
  { name: 'Foundations', state: 'completed', description: 'Java basics & complexity' },
  { name: 'Core Structures', state: 'current', description: 'Arrays, strings & hashing' },
  { name: 'Trees & Graphs', state: 'locked', description: 'Traverse deeper' },
  { name: 'Advanced', state: 'locked', description: 'Dynamic programming' },
  { name: 'Mastery', state: 'locked', description: 'Elite problem solving' },
];

export const recentActivity: Activity[] = [
  { id: 1, title: 'Solved Two Sum', reward: '+20 XP', time: '2 hours ago', icon: 'check' },
  { id: 2, title: 'Completed Array Dungeon', reward: '+150 XP', time: 'Yesterday', icon: 'check' },
  { id: 3, title: 'Reached Level 12', reward: 'Level Up', time: '2 days ago', icon: 'level' },
  { id: 4, title: 'Earned "Array Slayer" badge', reward: 'Badge earned', time: '3 days ago', icon: 'badge' },
];

export const achievement = {
  name: 'Array Master',
  completed: 17,
  total: 20,
  reward: 'Exclusive Avatar',
};
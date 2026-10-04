import type { RankReward, AvatarReward, TitleReward, XPMilestone, CertificateReward } from '../types/rewards';

const avatarImages = [
  '/src/assets/avatar1.png',
  '/src/assets/avatar2.png',
  '/src/assets/avatar3.png',
  '/src/assets/avatar4.png',
  '/src/assets/avatar5.png',
  '/src/assets/avatar6.png',
];

export const rankRewards: RankReward[] = [
  { rank: 'E', label: 'Novice', status: 'unlocked' },
  { rank: 'D', label: 'Apprentice', status: 'unlocked' },
  { rank: 'C', label: 'Adept', status: 'current' },
  { rank: 'B', label: 'Expert', status: 'locked' },
  { rank: 'A', label: 'Master', status: 'locked' },
  { rank: 'S', label: 'Legendary', status: 'locked' },
];

export const avatarRewards: AvatarReward[] = [
  { id: 'avatar1', name: 'Rookie Hunter', image: avatarImages[0], status: 'unlocked' },
  { id: 'avatar2', name: 'Shadow Walker', image: avatarImages[1], status: 'unlocked', unlockCondition: 'Complete Arrays Dungeon' },
  { id: 'avatar3', name: 'Void Stalker', image: avatarImages[2], status: 'unlocked', unlockCondition: 'Complete Strings Dungeon' },
  { id: 'avatar4', name: 'Night Reaper', image: avatarImages[3], status: 'locked', unlockCondition: 'Reach B-Rank' },
  { id: 'avatar5', name: 'Soul Render', image: avatarImages[4], status: 'locked', unlockCondition: 'Clear Graph Dungeon' },
  { id: 'avatar6', name: 'Legendary Hunter', image: avatarImages[5], status: 'locked', unlockCondition: 'Reach S-Rank' },
];

export const titleRewards: TitleReward[] = [
  { id: 'first-blood', name: 'First Blood', status: 'unlocked' },
  { id: 'array-slayer', name: 'Array Slayer', status: 'unlocked', isEquipped: true },
  { id: 'dungeon-explorer', name: 'Dungeon Explorer', status: 'unlocked' },
  { id: 'tree-master', name: 'Tree Master', status: 'locked', unlockCondition: 'Complete Tree Dungeon' },
  { id: 'graph-hunter', name: 'Graph Hunter', status: 'locked', unlockCondition: 'Clear Graph Dungeon' },
  { id: 'dp-wizard', name: 'DP Wizard', status: 'locked', unlockCondition: 'Complete DP Dungeon' },
  { id: 'legendary-hunter', name: 'Legendary Hunter', status: 'locked', unlockCondition: 'Reach S-Rank' },
];

export const xpMilestones: XPMilestone[] = [
  { xp: 100, label: 'First Steps', status: 'unlocked' },
  { xp: 500, label: 'Getting Started', status: 'unlocked' },
  { xp: 1000, label: 'Rising Hunter', status: 'unlocked' },
  { xp: 2500, label: 'Skilled Practitioner', status: 'locked' },
  { xp: 5000, label: 'Expert Problem Solver', status: 'locked' },
  { xp: 10000, label: 'DSA Master', status: 'locked' },
];

export const certificateReward: CertificateReward = {
  id: 'dsa-master-certificate',
  name: 'DSA MASTER CERTIFICATE',
  description: 'Complete the entire DSA journey and earn the ultimate proof of mastery.',
  image: '/src/assets/reward-icon.png',
  status: 'locked',
  requirements: [
    'Complete all 15 Roadmap stages',
    'Clear all 15 Dungeons',
    'Defeat all 15 Dungeon Bosses',
    'Reach S-Rank Hunter',
  ],
};
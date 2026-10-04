export type RewardStatus = 'unlocked' | 'current' | 'locked';

export interface RankReward {
  rank: 'E' | 'D' | 'C' | 'B' | 'A' | 'S';
  label: string;
  status: RewardStatus;
}

export interface AvatarReward {
  id: string;
  name: string;
  image: string;
  status: RewardStatus;
  unlockCondition?: string;
}

export interface TitleReward {
  id: string;
  name: string;
  status: RewardStatus;
  isEquipped?: boolean;
  unlockCondition?: string;
}

export interface XPMilestone {
  xp: number;
  label: string;
  status: RewardStatus;
}

export interface CertificateReward {
  id: string;
  name: string;
  description: string;
  image?: string;
  status: RewardStatus;
  requirements: string[];
}
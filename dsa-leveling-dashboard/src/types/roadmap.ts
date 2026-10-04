export type RoadmapStageStatus = 'completed' | 'current' | 'locked';

export interface RoadmapStage {
  id: string;
  title: string;
  description: string;
  status: RoadmapStageStatus;
  progress: number;
  route: string;
  rank?: 'E-Rank' | 'D-Rank' | 'C-Rank' | 'B-Rank' | 'A-Rank' | 'S-Rank';
  xpReward?: number;
  problemCount?: number;
  topics?: string[];
}

export interface RoadmapData {
  overallProgress: {
    completed: number;
    total: number;
    currentStage: string;
  };
  stages: RoadmapStage[];
}
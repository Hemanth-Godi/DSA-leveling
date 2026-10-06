import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';
import avatar4 from '../assets/avatar4.png';
import avatar5 from '../assets/avatar5.png';
import avatar6 from '../assets/avatar6.png';
import type { LeaderboardHunter } from '../types/leaderboard';

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

export const leaderboardHunters: LeaderboardHunter[] = [
  { id: 'shadow-dev', username: 'ShadowDev', avatar: avatars[4], rank: 'S', xp: 12840, problemsSolved: 245, dungeonsCleared: 18, streak: 42 },
  { id: 'code-hunter', username: 'CodeHunter', avatar: avatars[2], rank: 'A', xp: 9420, problemsSolved: 198, dungeonsCleared: 15, streak: 31 },
  { id: 'algo-master', username: 'AlgoMaster', avatar: avatars[5], rank: 'A', xp: 8160, problemsSolved: 173, dungeonsCleared: 13, streak: 28 },
  { id: 'byte-knight', username: 'ByteKnight', avatar: avatars[3], rank: 'B', xp: 6240, problemsSolved: 141, dungeonsCleared: 11, streak: 19 },
  { id: 'recursion-x', username: 'RecursionX', avatar: avatars[1], rank: 'B', xp: 5720, problemsSolved: 122, dungeonsCleared: 9, streak: 22 },
  { id: 'hemanth', username: 'Hemanth', avatar: avatars[0], rank: 'C', xp: 1240, problemsSolved: 48, dungeonsCleared: 4, streak: 7, isCurrentUser: true },
  { id: 'stack-trace', username: 'StackTrace', avatar: avatars[2], rank: 'C', xp: 1090, problemsSolved: 44, dungeonsCleared: 3, streak: 12 },
  { id: 'graph-rider', username: 'GraphRider', avatar: avatars[4], rank: 'C', xp: 960, problemsSolved: 38, dungeonsCleared: 3, streak: 9 },
  { id: 'loop-legend', username: 'LoopLegend', avatar: avatars[5], rank: 'D', xp: 720, problemsSolved: 31, dungeonsCleared: 2, streak: 11 },
  { id: 'binary-bloom', username: 'BinaryBloom', avatar: avatars[1], rank: 'D', xp: 540, problemsSolved: 25, dungeonsCleared: 2, streak: 5 },
  { id: 'node-nomad', username: 'NodeNomad', avatar: avatars[3], rank: 'E', xp: 310, problemsSolved: 16, dungeonsCleared: 1, streak: 4 },
  { id: 'array-apprentice', username: 'ArrayApprentice', avatar: avatars[0], rank: 'E', xp: 180, problemsSolved: 9, dungeonsCleared: 1, streak: 3 },
];

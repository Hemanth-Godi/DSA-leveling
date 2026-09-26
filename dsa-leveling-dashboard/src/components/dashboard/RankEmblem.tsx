import rankA from '../../assets/rank-A.png';
import rankB from '../../assets/rank-B.png';
import rankC from '../../assets/rank-C.png';
import rankD from '../../assets/rank-D.png';
import rankE from '../../assets/rank-E.png';
import rankS from '../../assets/rank-S.png';
import type { Rank } from '../../types/dashboard';

interface RankEmblemProps {
  rank: Rank;
  size?: 'sm' | 'md' | 'lg';
}

const rankImages: Record<Rank, string> = { E: rankE, D: rankD, C: rankC, B: rankB, A: rankA, S: rankS };

export function RankEmblem({ rank, size = 'md' }: RankEmblemProps) {
  const sizeClass = size === 'lg' ? 'h-20 w-20' : size === 'sm' ? 'h-10 w-10' : 'h-14 w-14';

  return (
    <span className={`${sizeClass} relative block shrink-0 overflow-hidden`} aria-label={`${rank}-Rank emblem`}>
      <img src={rankImages[rank]} alt="" className="h-full w-full object-contain" />
    </span>
  );
}

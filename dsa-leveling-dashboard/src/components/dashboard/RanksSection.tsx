import { ArrowRight } from 'lucide-react';
import rankA from '../../assets/rank-A.png';
import rankB from '../../assets/rank-B.png';
import rankC from '../../assets/rank-C.png';
import rankD from '../../assets/rank-D.png';
import rankE from '../../assets/rank-E.png';
import rankS from '../../assets/rank-S.png';
import { SectionHeading } from './SectionHeading';

const rankImages = { E: rankE, D: rankD, C: rankC, B: rankB, A: rankA, S: rankS };
const ranks = ['E', 'D', 'C', 'B', 'A', 'S'] as const;

function RankIcon({ rank }: { rank: (typeof ranks)[number] }) {
  return (
    <span className="relative block h-16 w-16 shrink-0 overflow-hidden sm:h-[76px] sm:w-[76px]">
      <img src={rankImages[rank]} alt={`${rank} rank`} className="h-full w-full object-contain" />
    </span>
  );
}

export function RanksSection() {
  return (
    <section id="ranks" className="landing-section relative overflow-hidden bg-[#0a0915] px-5 py-20 sm:px-8 sm:py-24">
      <SectionHeading title="Hunter Ranks" subtitle="Rise through the ranks as you grow stronger" />
      <div className="glass-rank-rail mx-auto mt-12 flex max-w-[900px] items-center justify-center overflow-x-auto rounded-2xl border border-violet-300/15 px-5 py-5 pb-5 sm:px-8">
        {ranks.map((rank, index) => (
          <div key={rank} className="flex shrink-0 items-center">
            <div className={`transition duration-300 hover:-translate-y-1 ${rank === 'C' ? 'scale-110 drop-shadow-[0_0_18px_rgba(139,92,246,.4)]' : 'opacity-95'}`}>
              <RankIcon rank={rank} />
            </div>
            {index < ranks.length - 1 && <ArrowRight size={17} className="mx-1.5 text-violet-300 sm:mx-3" />}
          </div>
        ))}
      </div>
    </section>
  );
}

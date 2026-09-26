import dungeon1 from '../../assets/dungon1.png';
import dungeon2 from '../../assets/dungon2.png';
import dungeon3 from '../../assets/dungon3.png';
import dungeon4 from '../../assets/dungon4.png';
import dungeon5 from '../../assets/dungon5.png';
import { ChevronRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const dungeonImages = [dungeon1, dungeon2, dungeon3, dungeon4, dungeon5];

const stages = [
  ['1. Foundations', 'Arrays, Strings, Hashing'],
  ['2. Core Structures', 'Linked Lists, Stacks, Queues'],
  ['3. Trees & Graphs', 'Trees, Graphs, Trie'],
  ['4. Advanced', 'Greedy, DP, Backtracking'],
  ['5. Mastery', 'System Design & More'],
];

export function JourneySection() {
  return (
    <section id="roadmap" className="landing-section relative overflow-hidden bg-[#07070e] px-5 py-20 sm:px-8 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(circle_at_50%_100%,rgba(88,28,135,.18),transparent_65%)]" />
      <SectionHeading title="The DSA Journey" subtitle="From basic concepts to advanced problem solving" />
      <div className="mx-auto mt-12 flex max-w-[1180px] items-stretch gap-4 overflow-x-auto pb-3 scrollbar-thin lg:overflow-visible">
        {stages.map(([title, description], index) => (
          <div key={title} className="flex min-w-[180px] flex-1 items-center gap-2 lg:min-w-0">
            <article className="glass-card group relative w-full overflow-hidden rounded-2xl border border-violet-300/15 bg-[#10101a] transition duration-300 hover:-translate-y-1 hover:border-violet-300/45">
              <div className="h-[148px] overflow-hidden">
                <img
                  src={dungeonImages[index]}
                  alt={`${title} dungeon`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="border-t border-white/[0.07] bg-[#0b0a14]/85 px-4 py-4">
                <h3 className="text-[12px] font-bold text-white">{title}</h3>
                <p className="mt-1.5 text-[10px] leading-4 text-zinc-400">{description}</p>
              </div>
            </article>
            {index < stages.length - 1 && <ChevronRight className="hidden shrink-0 text-violet-300 lg:block" size={16} />}
          </div>
        ))}
      </div>
    </section>
  );
}

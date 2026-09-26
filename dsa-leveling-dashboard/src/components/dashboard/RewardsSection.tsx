import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';
import avatar4 from '../../assets/avatar4.png';
import avatar5 from '../../assets/avatar5.png';
import avatar6 from '../../assets/avatar6.png';
import { ArrowRight, ScrollText, Sparkles } from 'lucide-react';

const avatarImages = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

export function RewardsSection() {
  return (
    <section id="community" className="landing-section relative overflow-hidden bg-[#0a0915] px-5 pb-20 pt-10 sm:px-8 sm:pb-24">
      <div className="glass-rewards mx-auto flex max-w-[1180px] flex-col gap-8 rounded-3xl border border-violet-300/15 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-9">
        <div className="max-w-[300px]">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[.18em] text-violet-300">Make it yours</p>
          <h2 className="font-display text-3xl leading-none text-white sm:text-[34px]">Avatars &amp; Rewards</h2>
          <p className="mt-3 text-xs leading-5 text-zinc-400">Unlock unique avatars, titles, badges and exclusive rewards as you progress.</p>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin sm:gap-3">
          {avatarImages.map((image, index) => (
            <div key={index} className="relative h-[112px] w-[82px] shrink-0 overflow-hidden rounded-xl border border-violet-300/20 bg-[#11111c] transition hover:-translate-y-1 hover:border-violet-300/50">
              <img src={image} alt={`Hunter avatar ${index + 1}`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="flex min-w-[230px] items-center justify-center gap-4 rounded-2xl border border-violet-300/15 bg-white/[0.04] p-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-violet-300/20 bg-violet-500/[0.08] shadow-[0_0_24px_rgba(139,92,246,.12)]"><Sparkles size={25} className="text-violet-300" /></div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div><Sparkles size={17} className="mx-auto text-violet-400" /><span className="mt-1 block text-[9px] text-zinc-400">Badges</span></div>
            <div><ScrollText size={17} className="mx-auto text-violet-400" /><span className="mt-1 block text-[9px] text-zinc-400">Titles</span></div>
            <div><ArrowRight size={17} className="mx-auto text-violet-400" /><span className="mt-1 block text-[9px] text-zinc-400">More</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

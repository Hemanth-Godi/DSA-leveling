import { Menu, Moon, X } from 'lucide-react';
import { useState } from 'react';
import { BrandMark } from './BrandMark';

const links = ['Home', 'About', 'Features', 'Roadmap', 'Community'];
const linkTargets: Record<string, string> = {
  Home: 'home',
  About: 'about',
  Features: 'features',
  Roadmap: 'roadmap',
  Community: 'community',
};

export function LandingHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header absolute inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 flex h-[64px] max-w-[1240px] items-center justify-between rounded-2xl border border-white/[0.12] bg-[#11101d]/65 px-4 shadow-[0_18px_50px_rgba(0,0,0,.28)] backdrop-blur-xl sm:px-6">
        <BrandMark />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {links.map((link, index) => (
            <a
              key={link}
              href={`#${linkTargets[link]}`}
              className={`relative py-3 text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors hover:text-white ${index === 0 ? 'text-white' : 'text-zinc-400'}`}
            >
              {link}
              {index === 0 && <span className="absolute -bottom-1 left-1/2 h-px w-8 -translate-x-1/2 bg-violet-400 shadow-[0_0_12px_rgba(196,181,253,.9)]" />}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button aria-label="Toggle theme" className="grid h-10 w-10 place-items-center rounded-full border border-violet-300/20 bg-[#11111b]/80 text-zinc-300 transition hover:border-violet-300/40 hover:text-white">
            <Moon size={16} strokeWidth={1.7} />
          </button>
          <button className="login-button rounded-xl border border-violet-300/30 bg-[#121124]/80 px-5 py-2 text-xs font-semibold text-zinc-200 transition hover:border-violet-300/60 hover:text-white">
            Login
          </button>
          <a
            href="#about"
            className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-[0_4px_22px_rgba(124,58,237,.35)] transition duration-200 hover:-translate-y-0.5 hover:from-violet-500 hover:to-indigo-500 hover:shadow-[0_6px_28px_rgba(124,58,237,.5)]"
          >
            Get Started
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-zinc-200 lg:hidden"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/[0.06] bg-[#07070d]/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-[1180px] flex-col gap-1" aria-label="Mobile navigation">
            {links.map((link) => (
              <a key={link} href={`#${linkTargets[link]}`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white">
                {link}
              </a>
            ))}
            <div className="mt-2 flex gap-2 border-t border-white/[0.06] pt-3">
              <button className="flex-1 rounded-xl border border-violet-300/35 py-2.5 text-xs font-medium text-white">Login</button>
              <button className="flex-1 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 py-2.5 text-xs font-semibold text-white">Get Started</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

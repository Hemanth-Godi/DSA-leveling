import { Menu, Moon, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrandMark } from './BrandMark';

const links = ['Home', 'About', 'Features', 'Roadmap', 'Community'];
const linkTargets: Record<string, string> = {
  Home: '/#home',
  About: '/#about',
  Features: '/#features',
  Roadmap: '/#roadmap',
  Community: '/#community',
};

export function LandingHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 px-3 sm:px-6 transition-all duration-300 pointer-events-none">
      <div
        className={`mx-auto flex h-[62px] sm:h-[64px] max-w-[1240px] items-center justify-between rounded-2xl border transition-all duration-300 pointer-events-auto px-4 sm:px-6 ${
          scrolled
            ? 'mt-2 border-violet-400/25 bg-[#0a0818]/95 shadow-[0_16px_45px_rgba(0,0,0,0.65)] backdrop-blur-2xl'
            : 'mt-3 border-white/[0.12] bg-[#11101d]/85 shadow-[0_18px_50px_rgba(0,0,0,.4)] backdrop-blur-2xl'
        }`}
      >
        <BrandMark />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {links.map((link, index) => (
            <a
              key={link}
              href={linkTargets[link]}
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
          <Link
            to="/login"
            className="login-button rounded-xl border border-violet-300/30 bg-[#121124]/80 px-5 py-2 text-xs font-semibold text-zinc-200 transition hover:border-violet-300/60 hover:text-white"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-xs font-bold text-white shadow-[0_4px_22px_rgba(124,58,237,.35)] transition duration-200 hover:-translate-y-0.5 hover:from-violet-500 hover:to-indigo-500 hover:shadow-[0_6px_28px_rgba(124,58,237,.5)]"
          >
            Get Started
          </Link>
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
        <div className="mx-auto mt-2 max-w-[1240px] rounded-2xl border border-white/[0.12] bg-[#0c0a1a]/95 px-5 py-4 shadow-2xl backdrop-blur-2xl pointer-events-auto lg:hidden">
          <nav className="mx-auto flex max-w-[1180px] flex-col gap-1" aria-label="Mobile navigation">
            {links.map((link) => (
              <a key={link} href={linkTargets[link]} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white">
                {link}
              </a>
            ))}
            <div className="mt-2 flex gap-2 border-t border-white/[0.06] pt-3">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="flex-1 text-center rounded-xl border border-violet-300/35 py-2.5 text-xs font-semibold text-white hover:bg-white/5"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="flex-1 text-center rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 py-2.5 text-xs font-semibold text-white shadow-md hover:from-violet-500 hover:to-fuchsia-400"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

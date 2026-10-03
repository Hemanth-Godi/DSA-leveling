import { Menu, X, Bell, ChevronDown, LogOut, User, LayoutDashboard, Map, Sword, Gem, Trophy, Shield } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrandMark } from '../dashboard/BrandMark';
import { RankEmblem } from '../dashboard/RankEmblem';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Roadmap', href: '/roadmap', icon: Map },
  { label: 'Dungeons', href: '/dungeons', icon: Sword },
  { label: 'Rewards', href: '/rewards', icon: Gem },
  { label: 'Leaderboard', href: '/leaderboard', icon: Trophy },
];

const userNavItems = [
  { label: 'Profile', href: '/profile', icon: User },
  { label: 'Settings', href: '/settings', icon: Shield },
];

const mockNotifications = [
  { id: 1, title: 'New Dungeon Unlocked', description: 'Linked Lists dungeon is now available', time: '5 min ago', unread: true },
  { id: 2, title: '+100 XP Reward Available', description: 'Complete today\'s mission to claim', time: '1 hour ago', unread: true },
  { id: 3, title: 'You reached Level 12', description: 'Rank up progress: 62%', time: '2 hours ago', unread: false },
  { id: 4, title: '7-day streak maintained!', description: 'Keep the momentum going', time: '1 day ago', unread: false },
  { id: 5, title: 'New achievement earned', description: '"Array Slayer" badge unlocked', time: '2 days ago', unread: false },
];

export function Navbar({ isAuthenticated = true }: { isAuthenticated?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) setNotifOpen(false);
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) setProfileOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const unreadCount = mockNotifications.filter(n => n.unread).length;

  const handleNavClick = () => {
    setMobileOpen(false);
    setNotifOpen(false);
    setProfileOpen(false);
  };

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

        {/* Desktop Navigation */}
        {isAuthenticated ? (
          <>
            <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href || (item.href !== '/dashboard' && location.pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={handleNavClick}
                    className={`relative flex items-center gap-2 py-3 text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors ${
                      isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Icon size={14} strokeWidth={1.7} />
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 h-px w-8 -translate-x-1/2 bg-violet-400 shadow-[0_0_12px_rgba(196,181,253,.9)]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              {/* Notification Bell */}
              <div className="relative" ref={notifRef}>
                <button
                  onClick={() => { setNotifOpen(!notifOpen); setProfileOpen(false); }}
                  className="relative grid h-10 w-10 place-items-center rounded-full border border-violet-300/20 bg-[#11111b]/80 text-zinc-300 transition hover:border-violet-300/40 hover:text-white"
                  aria-label="Notifications"
                  aria-expanded={notifOpen}
                >
                  <Bell size={16} strokeWidth={1.7} />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-violet-500 text-[9px] font-bold text-white">
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                  )}
                </button>

                {notifOpen && (
                  <div className="absolute right-0 mt-2 w-80 origin-top-right rounded-2xl border border-violet-300/20 bg-[#0c0a12]/95 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_40px_rgba(139,92,246,0.15)] backdrop-blur-2xl overflow-hidden animate-in fade-in-0 zoom-in-95">
                    <div className="flex items-center justify-between border-b border-violet-300/10 px-4 py-3">
                      <h3 className="text-sm font-semibold text-white">Notifications</h3>
                      <button className="text-[11px] text-violet-300 hover:text-violet-200">Mark all read</button>
                    </div>
                    <div className="divide-y divide-violet-300/10 max-h-96 overflow-y-auto">
                      {mockNotifications.map((notif) => (
                        <button
                          key={notif.id}
                          className={`w-full px-4 py-3 text-left transition hover:bg-violet-500/5 ${notif.unread ? 'bg-violet-500/5' : ''}`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`flex-shrink-0 mt-0.5 h-1.5 w-1.5 rounded-full ${notif.unread ? 'bg-violet-400' : 'bg-transparent border border-white/10'}`} />
                            <div className="min-w-0 flex-1">
                              <p className={`text-sm font-medium ${notif.unread ? 'text-white' : 'text-zinc-300'}`}>{notif.title}</p>
                              <p className="mt-0.5 text-[11px] text-zinc-500">{notif.description}</p>
                              <p className="mt-1 text-[10px] text-zinc-600">{notif.time}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                    <div className="border-t border-violet-300/10 px-4 py-3">
                      <Link to="/notifications" className="block text-center text-sm font-medium text-violet-300 hover:text-violet-200">View all notifications</Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Dropdown */}
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => { setProfileOpen(!profileOpen); setNotifOpen(false); }}
                  className="flex items-center gap-2 rounded-xl border border-violet-300/20 bg-[#121124]/80 px-3 py-1.5 pr-2 transition hover:border-violet-300/40 hover:bg-violet-500/10"
                  aria-label="User menu"
                  aria-expanded={profileOpen}
                >
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                  <span className="hidden text-sm font-semibold text-white sm:block">Hemanth</span>
                  <RankEmblem rank="C" size="sm" />
                  <ChevronDown size={14} className={`text-zinc-400 transition ${profileOpen ? 'rotate-180' : ''}`} />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-2xl border border-violet-300/20 bg-[#0c0a12]/95 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_40px_rgba(139,92,246,0.15)] backdrop-blur-2xl overflow-hidden animate-in fade-in-0 zoom-in-95">
                    <div className="p-4 border-b border-violet-300/10">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                        <div>
                          <p className="font-semibold text-white">Hemanth</p>
                          <p className="text-[11px] text-zinc-400">C-Rank Hunter · Level 12</p>
                        </div>
                      </div>
                    </div>
                    <nav className="py-2">
                      {userNavItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.label}
                            to={item.href}
                            onClick={handleNavClick}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-300 hover:bg-violet-500/5 hover:text-white"
                          >
                            <Icon size={16} strokeWidth={1.7} />
                            {item.label}
                          </Link>
                        );
                      })}
                    </nav>
                    <div className="border-t border-violet-300/10 p-2">
                      <button
                        onClick={() => {
                          localStorage.removeItem('isLoggedIn');
                          window.location.href = '/';
                        }}
                        className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-xl transition"
                      >
                        <LogOut size={16} strokeWidth={1.7} />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
              <Link to="/" className="relative py-3 text-[11px] font-semibold tracking-[0.12em] uppercase text-white">Home</Link>
              <Link to="/#features" className="relative py-3 text-[11px] font-semibold tracking-[0.12em] uppercase text-zinc-400 hover:text-white">Features</Link>
              <Link to="/#roadmap" className="relative py-3 text-[11px] font-semibold tracking-[0.12em] uppercase text-zinc-400 hover:text-white">Roadmap</Link>
              <Link to="/#community" className="relative py-3 text-[11px] font-semibold tracking-[0.12em] uppercase text-zinc-400 hover:text-white">Community</Link>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
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
          </>
        )}

        {/* Mobile Menu Button */}
        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-zinc-200 lg:hidden"
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-[1240px] rounded-2xl border border-white/[0.12] bg-[#0c0a1a]/95 px-5 py-4 shadow-2xl backdrop-blur-2xl pointer-events-auto lg:hidden animate-in slide-in-from-top-2">
          <nav className="mx-auto flex max-w-[1180px] flex-col gap-1" aria-label="Mobile navigation">
            {isAuthenticated ? (
              <>
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href || (item.href !== '/dashboard' && location.pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={handleNavClick}
                      className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition ${isActive ? 'bg-violet-500/10 text-violet-300' : 'text-zinc-300 hover:bg-white/5 hover:text-white'}`}
                    >
                      <Icon size={18} strokeWidth={1.7} />
                      {item.label}
                    </Link>
                  );
                })}
                <div className="mt-2 flex gap-2 border-t border-white/[0.06] pt-3">
                  <Link
                    to="/profile"
                    onClick={handleNavClick}
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-violet-300/35 py-2.5 text-xs font-semibold text-white hover:bg-white/5"
                  >
                    <User size={14} />
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    onClick={handleNavClick}
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-violet-300/35 py-2.5 text-xs font-semibold text-white hover:bg-white/5"
                  >
                    <Shield size={14} />
                    Settings
                  </Link>
                </div>
                <div className="mt-3 flex gap-2">
                  <Link
                    to="/notifications"
                    onClick={handleNavClick}
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-violet-300/35 py-2.5 text-xs font-semibold text-white hover:bg-white/5"
                  >
                    <Bell size={14} />
                    Notifications
                  </Link>
                  <button
                    onClick={() => {
                      localStorage.removeItem('isLoggedIn');
                      window.location.href = '/';
                    }}
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-red-500/35 py-2.5 text-xs font-semibold text-red-400 hover:bg-red-500/10"
                  >
                    <LogOut size={14} />
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/" onClick={handleNavClick} className="rounded-lg px-3 py-3 text-sm text-white">Home</Link>
                <Link to="/#features" onClick={handleNavClick} className="rounded-lg px-3 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white">Features</Link>
                <Link to="/#roadmap" onClick={handleNavClick} className="rounded-lg px-3 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white">Roadmap</Link>
                <Link to="/#community" onClick={handleNavClick} className="rounded-lg px-3 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white">Community</Link>
                <div className="mt-2 flex gap-2 border-t border-white/[0.06] pt-3">
                  <Link
                    to="/login"
                    onClick={handleNavClick}
                    className="flex-1 text-center rounded-xl border border-violet-300/35 py-2.5 text-xs font-semibold text-white hover:bg-white/5"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={handleNavClick}
                    className="flex-1 text-center rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 py-2.5 text-xs font-semibold text-white shadow-md hover:from-violet-500 hover:to-fuchsia-400"
                  >
                    Get Started
                  </Link>
                </div>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
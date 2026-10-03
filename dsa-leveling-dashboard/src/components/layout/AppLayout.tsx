import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export function AppLayout() {
  return (
    <div className="landing-page min-h-screen overflow-x-hidden bg-[#07070e] text-zinc-100 selection:bg-violet-500/30">
      <Navbar isAuthenticated={true} />
      <main className="relative z-10 pt-20 pb-12 lg:pt-24 lg:pb-16">
        <Outlet />
      </main>
    </div>
  );
}
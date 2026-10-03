import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className="landing-page min-h-screen overflow-x-hidden bg-[#07070e] text-zinc-100 selection:bg-violet-500/30">
      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 pb-16 pt-12 sm:px-6">
        <Outlet />
      </main>
    </div>
  );
}
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Diamond,
  Eye,
  EyeOff,
  GitBranch,
  Mail,
  Shield,
  Sparkles,
} from 'lucide-react';
import rankC from '../assets/rank-C.png';
import rankS from '../assets/rank-S.png';

export default function Login() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/dashboard');
  };

  return (
    <div className="landing-page min-h-screen overflow-x-hidden bg-[#07070e] text-zinc-100 selection:bg-violet-500/30">
      {/* Background ambient glows */}
      <div className="pointer-events-none fixed inset-0 select-none overflow-hidden">
        <div className="absolute left-[-5%] top-[-10%] h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="absolute right-[-8%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-indigo-600/8 blur-[130px]" />
        <div className="absolute left-[50%] top-[20%] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-fuchsia-600/6 blur-[120px]" />
        <div className="hero-grid absolute inset-0 opacity-15" />
      </div>

      {/* Minimal Fixed Header */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6">
        <div className="mx-auto mt-3 flex h-[62px] max-w-[1240px] items-center justify-between rounded-2xl border border-white/[0.12] bg-[#11101d]/90 px-5 shadow-[0_18px_50px_rgba(0,0,0,.45)] backdrop-blur-2xl">
          <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
            <div className="relative grid h-8 w-8 place-items-center text-violet-200">
              <span className="absolute inset-1 rotate-45 rounded-[3px] border border-violet-300/90" />
              <Diamond size={15} strokeWidth={1.7} className="relative" />
            </div>
            <span className="text-[13px] font-semibold tracking-[0.34em] text-white">DSA LEVELING</span>
          </Link>

          <div className="flex items-center gap-3 text-[12px]">
            <span className="text-zinc-500">New Hunter?</span>
            <Link
              to="/register"
              className="rounded-lg border border-violet-400/40 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 px-3.5 py-1.5 text-[11px] font-bold text-violet-200 transition hover:from-violet-600/30 hover:to-indigo-600/30 hover:text-white"
            >
              Register Free
            </Link>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 pb-16 pt-28 sm:px-6">
        <div className="w-full max-w-[480px]">

          {/* Form Card */}
          <div className="rounded-3xl border border-violet-300/20 bg-[#0e0c1f]/90 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.6),0_0_40px_rgba(139,92,246,0.15)] backdrop-blur-2xl sm:p-8">

            {/* Top decoration */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-[#160d2b]/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-200">
                  <Sparkles size={10} />
                  Hunter Portal
                </div>
                <h2 className="text-2xl font-bold text-white">Welcome back</h2>
                <p className="mt-0.5 text-[13px] text-zinc-400">Sign in to continue your journey</p>
              </div>

              <div className="flex -space-x-3 items-end">
                <img src={rankC} alt="Rank C" className="h-10 w-10 object-contain" />
                <img src={rankS} alt="Rank S" className="h-12 w-12 object-contain drop-shadow-[0_0_12px_rgba(251,191,36,0.4)]" />
              </div>
            </div>

            {/* OAuth Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[13px] font-semibold text-zinc-200 transition hover:bg-white/[0.08] hover:text-white">
                <GitBranch size={17} />
                GitHub
              </button>
              <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[13px] font-semibold text-zinc-200 transition hover:bg-white/[0.08] hover:text-white">
                <Mail size={17} className="text-red-400" />
                Google
              </button>
            </div>

            <div className="my-5 flex items-center gap-3">
              <span className="h-px flex-1 bg-white/[0.08]" />
              <span className="text-[11px] text-zinc-500 uppercase tracking-wider">or with email</span>
              <span className="h-px flex-1 bg-white/[0.08]" />
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-zinc-400">
                  Email Address
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="hunter@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-10 pr-4 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-violet-400/60 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(139,92,246,0.15)]"
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label className="text-[12px] font-semibold uppercase tracking-wider text-zinc-400">
                    Password
                  </label>
                  <a href="#" className="text-[11px] text-violet-400 hover:text-violet-300 transition">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Shield size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                  <input
                    type={showPass ? 'text' : 'password'}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Your secret pass"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-10 pr-11 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-violet-400/60 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(139,92,246,0.15)]"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((v) => !v)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition"
                    aria-label={showPass ? 'Hide password' : 'Show password'}
                  >
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_35px_rgba(124,58,237,0.4)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(124,58,237,0.55)] mt-2"
              >
                <span className="relative flex items-center justify-center gap-2.5">
                  Enter the System
                  <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </form>

            {/* Divider + Register redirect */}
            <p className="mt-5 text-center text-[12px] text-zinc-500">
              Don't have an account?{' '}
              <Link to="/register" className="font-semibold text-violet-300 transition hover:text-violet-200 hover:underline underline-offset-2">
                Create one free →
              </Link>
            </p>
          </div>

          {/* Footer note */}
          <p className="mt-4 text-center text-[11px] text-zinc-600">
            By logging in you agree to our{' '}
            <a href="#" className="text-zinc-500 hover:text-zinc-400 underline">Terms</a> and{' '}
            <a href="#" className="text-zinc-500 hover:text-zinc-400 underline">Privacy Policy</a>
          </p>
        </div>
      </main>
    </div>
  );
}
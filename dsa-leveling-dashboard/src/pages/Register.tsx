import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Diamond,
  Eye,
  EyeOff,
  Flame,
  GitBranch,
  Mail,
  Shield,
  Sparkles,
  Trophy,
  User,
  Users,
  Zap,
} from 'lucide-react';
import rankE from '../assets/rank-E.png';
import rankC from '../assets/rank-C.png';
import rankS from '../assets/rank-S.png';

const perks = [
  { icon: Zap, text: '500+ Handpicked DSA Problems' },
  { icon: Flame, text: 'Streak-based XP system' },
  { icon: Trophy, text: 'Rise from Rank E to S-Rank' },
  { icon: Users, text: '14,800+ Active Hunters' },
];

const steps = [
  { label: 'Create Account', done: false, active: true },
  { label: 'Pick Your Hunter', done: false, active: false },
  { label: 'Begin Journey', done: false, active: false },
];

export default function Register() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const passwordStrength = (pw: string) => {
    if (pw.length === 0) return 0;
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score;
  };

  const strength = passwordStrength(form.password);
  const strengthLabel = ['', 'Weak', 'Fair', 'Good', 'Strong'][strength];
  const strengthColor = ['', 'bg-red-500', 'bg-amber-400', 'bg-lime-400', 'bg-emerald-400'][strength];

  return (
    <div className="landing-page min-h-screen overflow-x-hidden bg-[#07070e] text-zinc-100 selection:bg-violet-500/30">
      {/* Background ambient glows */}
      <div className="pointer-events-none fixed inset-0 select-none overflow-hidden">
        <div className="absolute right-[-5%] top-[-10%] h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[130px]" />
        <div className="absolute left-[-8%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-indigo-600/8 blur-[130px]" />
        <div className="absolute left-[40%] top-[30%] h-[400px] w-[400px] rounded-full bg-fuchsia-600/6 blur-[120px]" />
        {/* Grid texture */}
        <div className="hero-grid absolute inset-0 opacity-15" />
      </div>

      {/* Minimal Fixed Header */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6">
        <div className="mx-auto mt-3 flex h-[62px] max-w-[1240px] items-center justify-between rounded-2xl border border-white/[0.12] bg-[#11101d]/90 px-5 shadow-[0_18px_50px_rgba(0,0,0,.45)] backdrop-blur-2xl">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
            <div className="relative grid h-8 w-8 place-items-center text-violet-200">
              <span className="absolute inset-1 rotate-45 rounded-[3px] border border-violet-300/90" />
              <Diamond size={15} strokeWidth={1.7} className="relative" />
            </div>
            <span className="text-[13px] font-semibold tracking-[0.34em] text-white">DSA LEVELING</span>
          </Link>

          {/* Breadcrumb stepper */}
          <div className="hidden items-center gap-2 sm:flex">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <div className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                  step.active
                    ? 'bg-violet-500/25 text-violet-200 border border-violet-400/40'
                    : 'text-zinc-600'
                }`}>
                  <span className={`flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold ${
                    step.active ? 'bg-violet-500 text-white' : 'bg-white/5 text-zinc-500'
                  }`}>{i + 1}</span>
                  {step.label}
                </div>
                {i < steps.length - 1 && (
                  <span className="h-px w-4 bg-white/10" />
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 text-[12px]">
            <span className="text-zinc-500">Already a Hunter?</span>
            <Link
              to="/login"
              className="rounded-lg border border-violet-300/30 bg-violet-500/10 px-3.5 py-1.5 text-[11px] font-semibold text-violet-200 transition hover:border-violet-300/60 hover:bg-violet-500/20 hover:text-white"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <main className="relative z-10 mx-auto grid min-h-screen max-w-[1240px] items-center px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16">

        {/* ── Left: Perks Panel ── */}
        <div className="hidden flex-col justify-center lg:flex">
          {/* Badge */}
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-violet-400/30 bg-[#160d2b]/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-200 shadow-[0_0_25px_rgba(168,85,247,0.22)] backdrop-blur-md">
            <Sparkles size={12} className="text-violet-300" />
            Begin Your Hunter Journey
          </div>

          {/* Headline */}
          <h1 className="font-display text-[52px] font-bold leading-[1.05] tracking-[-0.03em] text-white xl:text-[58px]">
            Create Your
            <span className="block bg-gradient-to-r from-white via-violet-200 to-fuchsia-300 bg-clip-text text-transparent">
              Hunter Profile
            </span>
          </h1>
          <p className="mt-4 max-w-[440px] text-sm leading-6 text-zinc-400">
            Register now and start your path from E-Rank novice to legendary S-Rank Hunter. Your DSA leveling journey begins with a single step.
          </p>

          {/* Rank Progression Preview */}
          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-violet-300/15 bg-[#120e24]/60 p-4 backdrop-blur-md">
            <div className="flex items-center gap-1 -space-x-2">
              <img src={rankE} alt="Rank E" className="h-10 w-10 object-contain" />
              <span className="mx-1 text-zinc-600">→</span>
              <img src={rankC} alt="Rank C" className="h-10 w-10 object-contain" />
              <span className="mx-1 text-zinc-600">→</span>
              <img src={rankS} alt="Rank S" className="h-12 w-12 object-contain drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-violet-300">Your Path Awaits</p>
              <p className="mt-0.5 text-xs text-zinc-400">6 ranks · 500+ problems · One epic journey</p>
            </div>
          </div>

          {/* Perks List */}
          <div className="mt-6 grid grid-cols-1 gap-3">
            {perks.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-violet-400/25 bg-violet-500/15 text-violet-300">
                  <Icon size={15} strokeWidth={2} />
                </div>
                <span className="text-[13px] text-zinc-300">{text}</span>
                <CheckCircle2 size={14} className="ml-auto text-violet-400/70 shrink-0" />
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex items-center gap-6 border-t border-white/[0.07] pt-6">
            <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              14,800+ Hunters Online
            </div>
            <div className="text-[11px] text-zinc-500">·</div>
            <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
              <Shield size={12} className="text-violet-400" />
              Free Forever
            </div>
            <div className="text-[11px] text-zinc-500">·</div>
            <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
              <Sparkles size={12} className="text-violet-400" />
              No Credit Card
            </div>
          </div>
        </div>

        {/* ── Right: Registration Form ── */}
        <div className="w-full">
          <div className="rounded-3xl border border-violet-300/20 bg-[#0e0c1f]/90 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.6),0_0_40px_rgba(139,92,246,0.15)] backdrop-blur-2xl sm:p-8">

            {/* Form Header */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white sm:text-2xl">Create your account</h2>
              <p className="mt-1 text-[13px] text-zinc-400">Join the ranks and start leveling your DSA skills</p>
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
              <span className="text-[11px] text-zinc-500 uppercase tracking-wider">or continue with email</span>
              <span className="h-px flex-1 bg-white/[0.08]" />
            </div>

            {/* Form Fields */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {/* Username */}
              <div>
                <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-zinc-400">
                  Hunter Name
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                  <input
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    placeholder="e.g. Jin_Woo_42"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-10 pr-4 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-violet-400/60 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(139,92,246,0.15)]"
                    autoComplete="username"
                  />
                </div>
              </div>

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
                <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-zinc-400">
                  Password
                </label>
                <div className="relative">
                  <Shield size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                  <input
                    type={showPass ? 'text' : 'password'}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Min. 8 characters"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-10 pr-11 text-sm text-white placeholder-zinc-600 outline-none transition focus:border-violet-400/60 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(139,92,246,0.15)]"
                    autoComplete="new-password"
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

                {/* Password strength bar */}
                {form.password.length > 0 && (
                  <div className="mt-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((n) => (
                        <div
                          key={n}
                          className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                            n <= strength ? strengthColor : 'bg-white/10'
                          }`}
                        />
                      ))}
                    </div>
                    <p className={`mt-1 text-[11px] font-medium ${
                      strength <= 1 ? 'text-red-400' : strength === 2 ? 'text-amber-400' : strength === 3 ? 'text-lime-400' : 'text-emerald-400'
                    }`}>
                      {strengthLabel} password
                    </p>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-zinc-400">
                  Confirm Password
                </label>
                <div className="relative">
                  <Shield size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    name="confirm"
                    value={form.confirm}
                    onChange={handleChange}
                    placeholder="Repeat your password"
                    className={`w-full rounded-xl border bg-white/[0.04] py-3 pl-10 pr-11 text-sm text-white placeholder-zinc-600 outline-none transition focus:shadow-[0_0_0_3px_rgba(139,92,246,0.15)] ${
                      form.confirm.length > 0 && form.confirm !== form.password
                        ? 'border-red-500/50 focus:border-red-500/70'
                        : 'border-white/10 focus:border-violet-400/60 focus:bg-white/[0.06]'
                    }`}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((v) => !v)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition"
                    aria-label={showConfirm ? 'Hide password' : 'Show password'}
                  >
                    {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {form.confirm.length > 0 && form.confirm !== form.password && (
                  <p className="mt-1 text-[11px] text-red-400">Passwords do not match</p>
                )}
              </div>

              {/* Terms Checkbox */}
              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3.5 transition hover:bg-white/[0.04]">
                <div className="relative mt-0.5 flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`h-4 w-4 rounded border transition duration-200 ${
                    agreed
                      ? 'border-violet-400 bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.6)]'
                      : 'border-white/20 bg-white/5'
                  }`}>
                    {agreed && (
                      <svg className="h-full w-full text-white p-0.5" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2.5}>
                        <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-[12px] leading-5 text-zinc-400">
                  I agree to the{' '}
                  <a href="#" className="text-violet-300 underline underline-offset-2 hover:text-violet-200">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-violet-300 underline underline-offset-2 hover:text-violet-200">Privacy Policy</a>
                </span>
              </label>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={!agreed}
                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_35px_rgba(124,58,237,0.4)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(124,58,237,0.55)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
              >
                <span className="relative flex items-center justify-center gap-2.5">
                  <Sparkles size={16} className="group-hover:animate-pulse" />
                  Create My Hunter Account
                  <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1 group-disabled:translate-x-0" />
                </span>
              </button>
            </form>

            {/* Login redirect */}
            <p className="mt-5 text-center text-[12px] text-zinc-500">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-violet-300 transition hover:text-violet-200 hover:underline underline-offset-2">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

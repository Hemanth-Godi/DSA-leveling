import { Link } from 'react-router-dom';
import { Check, Lock, Sword, Sparkles, ChevronRight } from 'lucide-react';
import { GlassCard } from '../dashboard/GlassCard';
import { QuestionRow } from './QuestionRow';
import type { Question, BossData } from '../../types/dungeon';

interface BossSectionProps {
  boss: BossData;
  isUnlocked: boolean;
  isCompleted: boolean;
}

export function BossSection({ boss, isUnlocked, isCompleted }: BossSectionProps) {
  const completedCount = boss.questions.filter(q => q.status === 'completed').length;
  const totalCount = boss.questions.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  if (isCompleted) {
    return (
      <GlassCard className="relative overflow-hidden border-amber-400/30 bg-amber-500/5 shadow-[0_0_40px_rgba(245,158,11,0.15)]">
        {/* Animated border glow */}
        <div className="absolute inset-0 border-2 rounded-2xl bg-gradient-to-r from-amber-500/30 via-fuchsia-500/20 to-amber-500/30 opacity-50 animate-pulse-subtle" />
        
        <div className="relative p-8 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-2 mb-6">
            <Sword size={16} className="text-amber-400" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300">Dungeon Cleared</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            ⚔ DUNGEON CLEARED ⚔
          </h2>
          
          <p className="text-lg text-zinc-400 mb-6 max-w-xl mx-auto">
            You have mastered every challenge and defeated the {boss.name}. The path forward is clear.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <GlassCard className="flex items-center gap-3 px-6 py-4 bg-amber-500/10 border-amber-400/20">
              <Sparkles size={20} className="text-amber-400" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-zinc-500">Boss XP Earned</p>
                <p className="font-bold text-amber-300">+{boss.xpReward} XP</p>
              </div>
            </GlassCard>
            <GlassCard className="flex items-center gap-3 px-6 py-4 bg-emerald-500/10 border-emerald-400/20">
              <Check size={20} className="text-emerald-400" />
              <div>
                <p className="text-[10px] uppercase tracking-wider text-zinc-500">Next Dungeon</p>
                <p className="font-bold text-emerald-300">Unlocked</p>
              </div>
            </GlassCard>
          </div>

          <Link
            to="/roadmap"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(245,158,11,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_34px_rgba(245,158,11,0.4)]"
          >
            <Sparkles size={16} />
            Continue to Roadmap
            <ChevronRight size={16} />
          </Link>
        </div>
      </GlassCard>
    );
  }

  if (!isUnlocked) {
    return (
      <GlassCard className="relative overflow-hidden border-white/10 bg-white/3">
        <div className="relative p-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-6">
            <Lock size={12} />
            Boss Locked
          </div>
          
          <div className="relative mb-6">
            <div className="mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-white/5 to-white/10 border border-white/10 flex items-center justify-center">
              <Sword size={32} className="text-zinc-500" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-2 border-dashed border-white/10 animate-pulse-subtle" />
            </div>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
            ⚔ {boss.name.toUpperCase()} ⚔
          </h2>
          
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            {boss.description}
          </p>

          <div className="space-y-3 text-sm text-zinc-500">
            <p>Complete all Easy challenges (10/10)</p>
            <p>Complete all Medium challenges (10/10)</p>
            <p>Complete all Hard challenges (10/10)</p>
          </div>

          <p className="mt-6 text-[11px] text-zinc-500">
            Defeat the boss to clear the dungeon and unlock the next stage
          </p>
        </div>
      </GlassCard>
    );
  }

  // Unlocked but not completed
  return (
    <GlassCard className="relative overflow-hidden border-fuchsia-400/30 bg-fuchsia-500/3 shadow-[0_0_40px_rgba(217,70,239,0.1)]">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-500 via-amber-500 to-fuchsia-500" />
      
      <div className="relative p-6 sm:p-8">
        {/* Boss Header with artwork */}
        <div className="relative mb-6">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-fuchsia-400/20">
            <img
              src={boss.image}
              alt={`${boss.name} Boss`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a12] via-[#0c0a12]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a12] via-transparent to-transparent" />
            
            {/* Boss badge overlay */}
            <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-3 py-1.5">
              <Sword size={12} className="text-fuchsia-400" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-fuchsia-300">Dungeon Boss</span>
            </div>
            
            {/* Unlocked indicator */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1.5 animate-pulse-subtle">
              <Sparkles size={12} className="text-emerald-400" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-emerald-300">Unlocked</span>
            </div>
          </div>
        </div>

        {/* Boss Info */}
        <div className="mb-6">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            ⚔ {boss.name.toUpperCase()} ⚔
          </h2>
          <p className="text-zinc-400 max-w-2xl">{boss.description}</p>
        </div>

        {/* Boss Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm mb-3">
            <span className="text-zinc-400">Boss Progress</span>
            <span className="font-bold text-fuchsia-300">{completedCount} / {totalCount}</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-white/5">
            <div className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 via-amber-500 to-fuchsia-500 transition-all duration-1000" 
              style={{ width: `${progressPercent}%` }} 
            />
          </div>
          <p className="mt-2 text-sm text-zinc-500">{progressPercent}% Complete — +{boss.xpReward} XP Total</p>
        </div>

        {/* Boss Questions */}
        <div className="space-y-2 mb-6">
          {boss.questions.map((question) => (
            <QuestionRow 
              key={question.id} 
              question={question} 
              isClickable={true}
            />
          ))}
        </div>

        {/* Challenge Button */}
        <div className="pt-4 border-t border-fuchsia-400/20">
          <Link
            to={`/dungeons/${boss.id.split('-')[0]}/boss/1`}
            className="inline-flex items-center gap-3 w-full sm:w-auto justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 via-amber-500 to-fuchsia-600 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(217,70,239,0.4)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(217,70,239,0.5)]"
          >
            <Sword size={18} />
            <span>Challenge Boss</span>
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </GlassCard>
  );
}
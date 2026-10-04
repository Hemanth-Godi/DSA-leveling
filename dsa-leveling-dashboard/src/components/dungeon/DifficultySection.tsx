import { Lock, Check, ChevronRight } from 'lucide-react';
import { GlassCard } from '../dashboard/GlassCard';
import { QuestionRow } from './QuestionRow';
import type { Question, Difficulty } from '../../types/dungeon';

interface DifficultySectionProps {
  difficulty: Difficulty;
  questions: Question[];
  isUnlocked: boolean;
  onQuestionClick?: (question: Question) => void;
}

const difficultyConfig: Record<Difficulty, { 
  label: string; 
  description: string; 
  icon: any;
  color: string;
  gradient: string;
  xpReward: number;
}> = {
  easy: {
    label: 'EASY',
    description: 'Beginner challenges to build fundamentals',
    icon: Check,
    color: 'text-emerald-400',
    gradient: 'from-emerald-500/20 to-emerald-500/5',
    xpReward: 100,
  },
  medium: {
    label: 'MEDIUM',
    description: 'Intermediate challenges requiring deeper understanding',
    icon: Check,
    color: 'text-amber-400',
    gradient: 'from-amber-500/20 to-amber-500/5',
    xpReward: 200,
  },
  hard: {
    label: 'HARD',
    description: 'Advanced challenges testing mastery',
    icon: Check,
    color: 'text-red-400',
    gradient: 'from-red-500/20 to-red-500/5',
    xpReward: 300,
  },
  boss: {
    label: 'BOSS',
    description: 'Final trials for true mastery',
    icon: Check,
    color: 'text-fuchsia-400',
    gradient: 'from-fuchsia-500/20 to-fuchsia-500/5',
    xpReward: 500,
  },
};

export function DifficultySection({ difficulty, questions, isUnlocked, onQuestionClick }: DifficultySectionProps) {
  const config = difficultyConfig[difficulty];
  const completedCount = questions.filter(q => q.status === 'completed').length;
  const totalCount = questions.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);
  const isCurrent = questions.some(q => q.status === 'current');

  if (!isUnlocked) {
    return (
      <GlassCard className="border-white/10 bg-white/3 overflow-hidden">
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
                <Lock size={18} className="text-zinc-500" />
              </div>
              <div>
                <p className="font-semibold text-white">{config.label}</p>
                <p className="text-sm text-zinc-500">{config.description}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-semibold text-zinc-500">
                <Lock size={14} />
                Locked
              </div>
              <p className="mt-1 text-sm text-zinc-500">Complete previous difficulty first</p>
            </div>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/5">
            <div className="h-full rounded-full bg-white/10" style={{ width: '0%' }} />
          </div>
          <p className="mt-2 text-sm text-zinc-500 text-center">
            Complete all {difficulty === 'medium' ? 'Easy' : 'Medium'} challenges to unlock
          </p>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard className={`relative overflow-hidden ${isCurrent ? 'border-violet-400/20 bg-violet-500/3 shadow-[0_0_24px_rgba(139,92,246,0.08)]' : 'border-white/5 bg-white/2'}`}>
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r" style={{ background: config.gradient }} />
      
      <div className="p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: config.gradient }}>
              <config.icon size={18} strokeWidth={2} className={config.color} />
            </div>
            <div>
              <p className="font-semibold text-white">{config.label}</p>
              <p className="text-sm text-zinc-500">{config.description}</p>
            </div>
          </div>
          <div className="text-right shrink-0">
            <p className="text-2xl font-bold text-white">{completedCount} / {totalCount}</p>
            <p className="text-sm text-zinc-500">+{config.xpReward} XP Total</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-5">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-zinc-400">Progress</span>
            <span className="font-medium text-white">{progressPercent}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/5">
            <div className="h-full rounded-full transition-all duration-1000" 
              style={{ 
                width: `${progressPercent}%`,
                background: config.gradient.replace('/20', '').replace('/5', '')
              }} 
            />
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-2">
          {questions.map((question) => (
            <QuestionRow 
              key={question.id} 
              question={question} 
              isClickable={isUnlocked}
            />
          ))}
        </div>

        {/* Section completion status */}
        {completedCount === totalCount && (
          <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center gap-2">
            <Check size={16} className="text-emerald-400" />
            <span className="text-sm font-medium text-emerald-300">{config.label} Complete — Next difficulty unlocked</span>
          </div>
        )}
      </div>
    </GlassCard>
  );
}
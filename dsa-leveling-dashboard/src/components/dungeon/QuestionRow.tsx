import { Check, Lock, Play, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Question, QuestionStatus } from '../../types/dungeon';

interface QuestionRowProps {
  question: Question;
  isClickable: boolean;
}

const statusConfig: Record<QuestionStatus, { 
  icon: any; 
  iconClass: string; 
  badge: string; 
  badgeClass: string;
  rowClass: string;
  hoverClass: string;
}> = {
  completed: {
    icon: Check,
    iconClass: 'text-emerald-400',
    badge: 'Solved',
    badgeClass: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/20',
    rowClass: 'border-emerald-400/10 bg-emerald-500/3',
    hoverClass: 'hover:bg-emerald-500/5',
  },
  current: {
    icon: Play,
    iconClass: 'text-violet-400',
    badge: 'Active',
    badgeClass: 'bg-violet-500/10 text-violet-300 border-violet-400/30',
    rowClass: 'border-violet-400/20 bg-violet-500/5 shadow-[0_0_16px_rgba(139,92,246,0.1)]',
    hoverClass: 'hover:bg-violet-500/8',
  },
  available: {
    icon: ChevronRight,
    iconClass: 'text-zinc-500',
    badge: '',
    badgeClass: '',
    rowClass: 'border-white/5 bg-white/2',
    hoverClass: 'hover:bg-white/5 hover:border-violet-400/20',
  },
  locked: {
    icon: Lock,
    iconClass: 'text-zinc-700',
    badge: 'Locked',
    badgeClass: 'bg-white/5 text-zinc-600 border-white/10',
    rowClass: 'border-white/5 bg-white/2 opacity-60',
    hoverClass: '',
  },
};

export function QuestionRow({ question, isClickable }: QuestionRowProps) {
  const config = statusConfig[question.status];
  const showBadge = question.status !== 'available';

  const content = (
    <div className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${config.rowClass} ${isClickable ? config.hoverClass : ''}`}>
      <div className="flex-shrink-0 w-8 text-center">
        <span className="text-[11px] font-mono font-bold text-zinc-500">
          {String(question.number).padStart(2, '0')}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <p className={`font-medium truncate ${question.status === 'locked' ? 'text-zinc-500' : 'text-white'}`}>
          {question.title}
        </p>
        <p className="mt-0.5 text-[11px] text-zinc-500 capitalize">{question.difficulty}</p>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <span className={`text-sm font-medium ${question.status === 'locked' ? 'text-zinc-500' : 'text-violet-300'}`}>
          +{question.xp} XP
        </span>
        {showBadge && (
          <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] ${config.badgeClass}`}>
            <config.icon size={10} strokeWidth={2.5} className={config.iconClass} />
            {config.badge}
          </span>
        )}
        {isClickable && question.status !== 'locked' && (
          <ChevronRight size={16} className="text-zinc-500 group-hover:text-violet-300 transition-colors" />
        )}
      </div>
    </div>
  );

  if (isClickable && question.status !== 'locked') {
    return (
      <Link
        to={`/dungeons/${question.id.split('-')[0]}/${question.difficulty}/${question.number}`}
        className="group block"
      >
        {content}
      </Link>
    );
  }

  return <div>{content}</div>;
}
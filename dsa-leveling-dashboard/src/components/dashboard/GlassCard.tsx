import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section';
}

export function GlassCard({ children, className = '', as = 'div' }: GlassCardProps) {
  const Component = as;
  return (
    <Component
      className={`rounded-2xl border border-white/[0.08] bg-white/[0.035] backdrop-blur-xl shadow-[0_16px_60px_rgba(0,0,0,0.2)] ${className}`}
    >
      {children}
    </Component>
  );
}

import { Link } from 'react-router-dom';
import { Check, Lock, Sparkles, Shield, Award, Star, ArrowRight } from 'lucide-react';
import { GlassCard } from '../dashboard/GlassCard';
import type { CertificateReward } from '../../types/rewards';

interface CertificateProps {
  certificate: CertificateReward;
}

export function Certificate({ certificate }: CertificateProps) {
  const isLocked = certificate.status === 'locked';

  const cardClassName = isLocked
    ? 'border-white/10 bg-white/3'
    : 'border-amber-400/30 bg-amber-500/5 shadow-[0_0_40px_rgba(245,158,11,0.15)]';

  const certVisualClassName = isLocked
    ? 'border-white/10 bg-white/5'
    : 'border-amber-400/30 bg-gradient-to-br from-amber-500/10 to-fuchsia-500/5 shadow-[0_0_30px_rgba(245,158,11,0.2)]';

  const iconClassName = isLocked ? 'text-amber-400 opacity-50' : 'text-amber-400';

  return (
    <GlassCard className={`relative overflow-hidden p-6 sm:p-8 ${cardClassName}`}>
      {/* Animated border glow for unlocked */}
      {!isLocked && (
        <div className="absolute inset-0 border-2 rounded-2xl bg-gradient-to-r from-amber-500/30 via-fuchsia-500/20 to-amber-500/30 opacity-50 animate-pulse-subtle pointer-events-none" />
      )}
      
      <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
        {/* Certificate Visual */}
        <div className="relative flex-shrink-0 flex items-center justify-center">
          <div className={`relative w-48 h-64 sm:w-56 sm:h-72 rounded-xl overflow-hidden ${certVisualClassName}`}>
            {certificate.image ? (
              <img
                src={certificate.image}
                alt={certificate.name}
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <Award size={32} className={iconClassName} />
                <p className="mt-3 font-display text-xl font-bold text-white">{certificate.name}</p>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a12] via-transparent to-transparent" />
            
            {!isLocked && (
              <div className="absolute top-3 right-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500">
                  <Check size={12} className="text-white" strokeWidth={3} />
                </div>
              </div>
            )}
            
            {isLocked && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <Lock size={32} className="text-white/50" />
              </div>
            )}
          </div>
        </div>

        {/* Certificate Info */}
        <div className="flex-1 min-w-0 text-center sm:text-left">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-300">Final Reward</p>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {certificate.name}
          </h2>
          <p className="mt-3 text-base text-zinc-400 sm:text-lg">
            {certificate.description}
          </p>

          {/* Requirements */}
          <div className="mt-6 space-y-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500 text-left sm:text-center">
              Requirements to Unlock
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {certificate.requirements.map((req, index) => (
                <GlassCard key={index} className="p-3 border-white/5 bg-white/2">
                  <div className="flex items-center gap-2">
                    <div className={`flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full ${isLocked 
                      ? 'border-white/10 bg-white/5' 
                      : 'border-emerald-400/30 bg-emerald-500/10'}`}>
                      {isLocked ? <Lock size={10} className="text-zinc-600" /> : <Check size={10} className="text-emerald-400" strokeWidth={3} />}
                    </div>
                    <p className={`text-sm ${isLocked ? 'text-zinc-500' : 'text-white'}`}>{req}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* CTA */}
          {!isLocked && (
            <Link
              to="/rewards"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(245,158,11,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_34px_rgba(245,158,11,0.4)]"
            >
              <Sparkles size={16} />
              View Certificate
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
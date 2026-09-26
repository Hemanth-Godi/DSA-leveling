import { Diamond } from 'lucide-react';

export function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative grid h-8 w-8 place-items-center text-violet-200">
        <span className="absolute inset-1 rotate-45 rounded-[3px] border border-violet-300/90" />
        <Diamond size={15} strokeWidth={1.7} className="relative" />
      </div>
      <span className="text-[13px] font-semibold tracking-[0.34em] text-white">DSA LEVELING</span>
    </div>
  );
}

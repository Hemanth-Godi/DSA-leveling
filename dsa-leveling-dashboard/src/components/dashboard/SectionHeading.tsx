interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="section-heading mx-auto max-w-3xl text-center">
      <div className="flex items-center justify-center gap-4">
        <span className="hidden h-px w-12 bg-gradient-to-r from-transparent to-violet-400/70 sm:block" />
        <h2 className="font-display text-[31px] leading-none tracking-[-0.02em] text-white sm:text-[34px]">{title}</h2>
        <span className="hidden h-px w-12 bg-gradient-to-l from-transparent to-violet-400/70 sm:block" />
      </div>
      <p className="mt-2 text-xs font-medium tracking-[0.08em] text-zinc-400 uppercase sm:text-[11px]">{subtitle}</p>
    </div>
  );
}

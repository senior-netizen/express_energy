import { SkeletonTextLine } from '@/components/shared/SkeletonTextLine';

type SkeletonCardProps = {
  className?: string;
  titleClassName?: string;
  lines?: number;
};

export function SkeletonCard({ className = '', titleClassName = '', lines = 2 }: SkeletonCardProps) {
  return (
    <article className={`rounded-2xl border border-brand-dark/10 bg-white p-5 ${className}`.trim()} aria-hidden='true'>
      <SkeletonTextLine className={`h-5 w-2/5 ${titleClassName}`.trim()} />
      <div className='mt-3 space-y-2'>
        {Array.from({ length: lines }).map((_, idx) => (
          <SkeletonTextLine key={idx} className={idx === lines - 1 ? 'w-3/4' : 'w-full'} />
        ))}
      </div>
    </article>
  );
}

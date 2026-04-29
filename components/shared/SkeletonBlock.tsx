type SkeletonBlockProps = {
  className?: string;
};

export function SkeletonBlock({ className = '' }: SkeletonBlockProps) {
  return <div className={`skeleton-shimmer animate-pulse rounded-xl bg-brand-dark/10 ${className}`.trim()} aria-hidden='true' />;
}

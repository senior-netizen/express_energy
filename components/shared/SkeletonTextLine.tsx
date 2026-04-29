type SkeletonTextLineProps = {
  className?: string;
};

export function SkeletonTextLine({ className = '' }: SkeletonTextLineProps) {
  return <div className={`skeleton-shimmer h-4 rounded-full bg-brand-dark/10 ${className}`.trim()} aria-hidden='true' />;
}

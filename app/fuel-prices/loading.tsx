import { SkeletonCard } from '@/components/shared/SkeletonCard';
import { SkeletonTextLine } from '@/components/shared/SkeletonTextLine';

export default function Loading() {
  return (
    <main className='container-page py-10'>
      <SkeletonTextLine className='h-10 w-60' />
      <div className='mt-4 grid gap-4 md:grid-cols-3'>
        {Array.from({ length: 3 }).map((_, i) => (
          <SkeletonCard key={i} className='min-h-[156px]' lines={2} />
        ))}
      </div>
    </main>
  );
}

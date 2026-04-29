import { SkeletonBlock } from '@/components/shared/SkeletonBlock';
import { SkeletonCard } from '@/components/shared/SkeletonCard';
import { SkeletonTextLine } from '@/components/shared/SkeletonTextLine';

export default function Loading() {
  return (
    <main className='container-page py-10'>
      <SkeletonTextLine className='h-10 w-72' />
      <div className='mt-4 grid gap-4 lg:grid-cols-2'>
        <SkeletonBlock className='min-h-[320px] rounded-2xl' />
        <div>
          <SkeletonCard className='min-h-[122px] rounded-lg' lines={2} />
        </div>
      </div>
    </main>
  );
}

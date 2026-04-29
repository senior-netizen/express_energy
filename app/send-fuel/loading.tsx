import { SkeletonBlock } from '@/components/shared/SkeletonBlock';
import { SkeletonTextLine } from '@/components/shared/SkeletonTextLine';

export default function Loading() {
  return (
    <main className='container-page py-10'>
      <SkeletonTextLine className='h-10 w-48' />
      <SkeletonTextLine className='mt-4 h-5 w-full max-w-2xl' />
      <SkeletonBlock className='mt-4 min-h-[240px] rounded-2xl' />
      <SkeletonBlock className='mt-6 h-10 w-48 rounded-full' />
    </main>
  );
}

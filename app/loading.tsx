import { SkeletonBlock } from '@/components/shared/SkeletonBlock';
import { SkeletonCard } from '@/components/shared/SkeletonCard';
import { SkeletonTextLine } from '@/components/shared/SkeletonTextLine';

export default function Loading() {
  return (
    <main>
      <section className='relative isolate overflow-hidden bg-brand-dark py-24 text-white md:py-28'>
        <div className='container-page'>
          <SkeletonTextLine className='h-7 w-40 bg-white/20' />
          <SkeletonTextLine className='mt-5 h-12 w-full max-w-3xl bg-white/20' />
          <SkeletonTextLine className='mt-3 h-12 w-3/4 max-w-2xl bg-white/20' />
          <SkeletonTextLine className='mt-6 h-5 w-full max-w-2xl bg-white/20' />
          <div className='mt-8 flex flex-col gap-3 md:flex-row'>
            <SkeletonBlock className='h-12 w-full max-w-52 rounded-full bg-white/20' />
            <SkeletonBlock className='h-12 w-full max-w-52 rounded-full bg-white/20' />
          </div>
        </div>
      </section>

      <section className='bg-brand-primary py-14 text-white'>
        <div className='container-page'>
          <SkeletonTextLine className='h-8 w-64 bg-white/20' />
          <SkeletonTextLine className='mt-3 h-4 w-72 bg-white/20' />
          <div className='mt-6 grid gap-4 md:grid-cols-3'>
            <SkeletonCard className='border-white/25 bg-white/10' titleClassName='bg-white/20' lines={2} />
            <SkeletonCard className='border-white/25 bg-white/10' titleClassName='bg-white/20' lines={2} />
            <SkeletonCard className='border-white/25 bg-white/10' titleClassName='bg-white/20' lines={2} />
          </div>
        </div>
      </section>

      <section className='container-page py-14'>
        <SkeletonTextLine className='h-8 w-56' />
        <SkeletonTextLine className='mt-3 h-4 w-80' />
        <div className='mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} lines={2} className='min-h-[140px]' />
          ))}
        </div>
      </section>
    </main>
  );
}

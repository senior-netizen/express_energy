import Link from 'next/link';

export function StationLocatorCTA({ count }: { count: number }) {
  return (
    <section className='container-page py-14'>
      <div className='rounded-3xl border border-brand-dark/10 bg-white p-6 shadow-[0_20px_55px_-32px_rgba(17,24,39,0.45)] md:flex md:items-center md:justify-between md:p-8'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary'>Station coverage</p>
          <p className='mt-2 text-2xl font-semibold tracking-tight md:text-3xl'>{count} stations across Zimbabwe</p>
          <p className='mt-2 text-sm text-brand-dark/70'>Locate routes, operating hours, and service extras in seconds.</p>
        </div>
        <Link href='/find-a-station' className='mt-5 inline-flex rounded-full bg-brand-dark px-6 py-3 text-sm font-medium text-white transition-colors duration-base ease-out-soft hover:bg-brand-secondary md:mt-0'>
          Open station finder
        </Link>
      </div>
    </section>
  );
}

import Link from 'next/link';

export function StationLocatorCTA({ count }: { count: number }) {
  return (
    <section className='bg-brand-offwhite py-14'>
      <div className='container-page rounded-xl bg-white p-8'>
        <h3 className='text-3xl font-semibold text-brand-navy'>Find Your Nearest Express Energy Station</h3>
        <p className='mt-3 text-brand-dark/80'>We have stations across Masvingo — at the CBD, Mucheke, Rhodene, and industrial areas in Masvingo and Chiredzi. ({count}+ service points)</p>
        <Link href='/find-a-station' className='mt-5 inline-block rounded-md bg-brand-navy px-6 py-3 font-semibold text-white'>View All Stations →</Link>
      </div>
    </section>
  );
}

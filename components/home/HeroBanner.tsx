import Link from 'next/link';

export function HeroBanner() {
  return (
    <section className='bg-brand-navy py-24 text-white'>
      <div className='container-page'>
        <h1 className='text-4xl font-bold md:text-6xl'>Express Energy Service Station</h1>
        <p className='mt-4 text-3xl font-serif italic'>We Promise You Simply Miles Ahead after your Fueling</p>
        <div className='mt-8 flex flex-wrap gap-3'>
          <Link href='/fuel-prices' className='rounded-md bg-brand-orange px-6 py-3 font-semibold'>View Fuel Prices</Link>
          <Link href='/find-a-station' className='rounded-md border border-white px-6 py-3 font-semibold'>Find a Station</Link>
        </div>
        <p className='mt-5 text-sm text-white/80'>24hr Service · ZERA Licensed · Masvingo Based</p>
      </div>
    </section>
  );
}

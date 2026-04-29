import Link from 'next/link';

export function HeroBanner() {
  return (
    <section className='relative isolate overflow-hidden bg-brand-dark py-24 text-white md:py-28'>
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,56,92,0.35),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(146,23,77,0.35),transparent_38%)]' />
      <div className='container-page'>
        <p className='inline-flex items-center rounded-full border border-white/25 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90'>
          Nationwide fuel network
        </p>
        <h1 className='mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl'>Powering Zimbabwe Forward</h1>
        <p className='mt-4 max-w-2xl text-base text-white/80 md:text-lg'>
          Reliable fuel, modern payments, and trusted nationwide service with transparent prices and fast digital gifting.
        </p>
        <div className='mt-8 flex flex-col gap-3 md:flex-row'>
          <Link href='/fuel-prices' className='rounded-full bg-brand-primary px-7 py-3 text-center font-medium transition hover:brightness-95'>
            View Fuel Prices
          </Link>
          <Link href='/find-a-station' className='rounded-full border border-white/60 px-7 py-3 text-center font-medium transition hover:bg-white/10'>
            Find a Station
          </Link>
        </div>
      </div>
    </section>
  );
}

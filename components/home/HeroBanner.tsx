import Link from 'next/link';

export function HeroBanner() {
  return (
    <section className='relative isolate overflow-hidden bg-brand-dark py-24 text-white md:py-28'>
      <div className='ambient-float animate-bg-drift absolute -left-24 top-[-12rem] -z-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,56,92,0.35),transparent_65%)]' style={{ animationDuration: '24s' }} />
      <div className='ambient-float animate-glow-pulse absolute right-[-8rem] top-[-6rem] -z-10 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(146,23,77,0.34),transparent_68%)]' style={{ animationDuration: '18s', animationDelay: '2s' }} />
      <div className='ambient-float animate-bg-drift absolute bottom-[-14rem] left-1/3 -z-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(70,4,121,0.3),transparent_70%)]' style={{ animationDuration: '12s', animationDelay: '4s' }} />
      <div className='container-page'>
        <p className='inline-flex items-center rounded-full border border-white/25 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90'>
          Nationwide fuel network
        </p>
        <h1 className='mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl'>Powering Zimbabwe Forward</h1>
        <p className='mt-4 max-w-2xl text-base text-white/80 md:text-lg'>
          Reliable fuel, modern payments, and trusted nationwide service with transparent prices and fast digital gifting.
        </p>
        <div className='mt-8 flex flex-col gap-3 md:flex-row'>
          <Link href='/fuel-prices' className='rounded-full bg-brand-primary px-7 py-3 text-center font-medium transition-all duration-fast ease-out-soft hover:brightness-95'>
            View Fuel Prices
          </Link>
          <Link href='/find-a-station' className='rounded-full border border-white/60 px-7 py-3 text-center font-medium transition-colors duration-base ease-out-soft hover:bg-white/10'>
            Find a Station
          </Link>
        </div>
      </div>
    </section>
  );
}

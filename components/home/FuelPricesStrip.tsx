import Link from 'next/link';

const cards = [
  ['Unleaded Petrol', 'ZWG 45.00', 'USD 1.52'],
  ['Diesel 50', 'ZWG 43.00', 'USD 1.49'],
  ['LP Gas', 'ZWG 40.00', 'USD 1.40 (per kg)'],
  ['Lubricants & Oils', 'Ask in-store', '']
];

export function FuelPricesStrip() {
  return (
    <section className='bg-brand-navy py-12 text-white'>
      <div className='container-page'>
        <div className='flex items-center justify-between gap-4'>
          <div>
            <h2 className='text-2xl font-semibold'>Today&apos;s Fuel Prices</h2>
            <p className='text-sm text-white/80'>Last updated: {new Date().toLocaleString()}</p>
          </div>
          <Link href='/fuel-prices' className='text-sm text-brand-orange'>View full prices →</Link>
        </div>
        <div className='mt-4 grid gap-3 md:grid-cols-4'>
          {cards.map(([title, zwg, usd]) => (
            <article key={title} className='rounded-lg bg-white/10 p-4'>
              <p>{title}</p>
              <p className='price-nums mt-2 font-semibold'>{zwg}</p>
              {usd ? <p className='price-nums text-sm text-white/90'>{usd}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import { FuelPrice } from '@/lib/types';

const tones: Record<string, string> = {
  Petrol: 'from-emerald-400/20 to-emerald-500/5',
  Diesel: 'from-blue-400/20 to-blue-500/5',
  Blend: 'from-amber-400/25 to-amber-500/10'
};

export function FuelPricesStrip({ prices }: { prices: FuelPrice[] }) {
  return (
    <section className='bg-brand-primary py-14 text-white'>
      <div className='container-page'>
        <div className='flex flex-wrap items-end justify-between gap-4'>
          <div>
            <h2 className='section-title text-white'>Today's Fuel Prices</h2>
            <p className='mt-2 text-sm text-white/80'>Updated daily from our retail network.</p>
          </div>
          <Link href='/fuel-prices' className='rounded-full border border-white/45 px-5 py-2 text-sm font-medium hover:bg-white/10'>
            Full price breakdown
          </Link>
        </div>
        <div className='mt-6 grid gap-4 md:grid-cols-3'>
          {prices.map((p) => (
            <article key={p.fuelType} className={`rounded-2xl border border-white/25 bg-gradient-to-br ${tones[p.fuelType] ?? 'from-white/20 to-white/5'} p-5`}>
              <p className='text-sm uppercase tracking-wide text-white/80'>{p.fuelType}</p>
              <p className='mt-3 text-2xl font-semibold'>ZWG {p.zwg.toFixed(2)}</p>
              <p className='text-sm text-white/85'>USD {p.usd.toFixed(2)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

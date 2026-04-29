import Link from 'next/link';

const items = [
  ['Fuel Products', 'Unleaded Petrol, Diesel 50, LP Gas, Lubricants & Oils'],
  ['Convenience & Ice', 'Cold drinks, snacks, ice blocks, daily essentials'],
  ['Vehicle Services', 'Windscreen cleaning and tyre air'],
  ['Bulk Fuel', 'Exportation & transportation, contracted deliveries']
];

export function ServicesGrid() {
  return (
    <section className='container-page py-14'>
      <h3 className='text-3xl font-semibold text-brand-navy'>At Our Forecourts</h3>
      <div className='mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
        {items.map(([title, body]) => (
          <Link key={title} href='/services' className='rounded-xl border border-brand-navy/15 p-5 hover:bg-brand-offwhite'>
            <h4 className='font-semibold'>{title}</h4>
            <p className='mt-2 text-sm text-brand-dark/70'>{body}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

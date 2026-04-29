const items = [
  ['Fuel', 'Petrol, Diesel, Blend'],
  ['Convenience Shop', 'Snacks, cold drinks, essentials'],
  ['Vehicle Services', 'Car wash, tyre air, oil check'],
  ['Send Fuel', 'Gift fuel to loved ones']
];

export function ServicesGrid() {
  return (
    <section className='container-page py-14'>
      <h3 className='section-title'>At our forecourts</h3>
      <p className='section-subtitle'>Designed for speed and comfort with every stop.</p>
      <div className='mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
        {items.map(([t, d]) => (
          <div key={t} className='rounded-2xl border border-brand-dark/10 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg'>
            <h4 className='font-semibold'>{t}</h4>
            <p className='mt-2 text-sm text-brand-dark/70'>{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

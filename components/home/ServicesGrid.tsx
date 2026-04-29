const items = [
  ['Fuel', 'Petrol, Diesel, Blend'],
  ['Convenience Shop', 'Snacks, cold drinks, essentials'],
  ['Vehicle Services', 'Car wash, tyre air, oil check'],
  ['Send Fuel', 'Gift fuel to loved ones']
];

export function ServicesGrid() {
  return (
    <section className='container-page relative isolate overflow-hidden py-14'>
      <div className='ambient-float animate-bg-drift pointer-events-none absolute -left-24 top-6 -z-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,56,92,0.12),transparent_68%)]' style={{ animationDuration: '22s' }} />
      <div className='ambient-float animate-glow-pulse pointer-events-none absolute -right-20 bottom-0 -z-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(70,4,121,0.1),transparent_70%)]' style={{ animationDuration: '14s', animationDelay: '3s' }} />
      <h3 className='section-title'>At our forecourts</h3>
      <p className='section-subtitle'>Designed for speed and comfort with every stop.</p>
      <div className='mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
        {items.map(([t, d]) => (
          <div
            key={t}
            className='ui-focus-ring ui-hover-lift rounded-2xl border border-brand-dark/10 bg-white p-5 motion-safe:transition'
            tabIndex={0}
          >
            <h4 className='font-semibold'>{t}</h4>
            <p className='mt-2 text-sm text-brand-dark/70'>{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

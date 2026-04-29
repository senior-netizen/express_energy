export function PartnersStrip() {
  return (
    <section className='bg-brand-light py-12'>
      <div className='container-page'>
        <h3 className='text-xl font-semibold'>In partnership with</h3>
        <div className='mt-4 flex flex-wrap gap-3'>
          {['TFN', 'Petrotrade'].map((name) => (
            <span key={name} className='rounded-full border border-brand-dark/15 bg-white px-4 py-2 text-sm font-medium text-brand-dark/70'>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

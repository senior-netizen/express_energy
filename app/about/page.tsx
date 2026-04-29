export default function AboutPage() {
  return (
    <main className='container-page py-12'>
      <h1 className='text-4xl font-bold text-brand-navy'>About Express Energy</h1>
      <p className='mt-4'>Express Energy Service Station operates 24/7 from Masvingo with customer-first fueling and convenience services.</p>
      <div className='mt-6 grid gap-4 md:grid-cols-2'>
        <div className='rounded-xl border p-5'><h2 className='font-semibold'>Mission</h2><p className='mt-2'>To deliver reliable fuel, gas and forecourt services with integrity and speed.</p></div>
        <div className='rounded-xl border p-5'><h2 className='font-semibold'>Vision</h2><p className='mt-2'>To be the most trusted independent fuel partner in the Masvingo region and beyond.</p></div>
      </div>
      <p className='mt-6 text-sm'>Directors: Tawanda Mabande (50%) and Tafadzwa Mabande (50%).</p>
    </main>
  );
}

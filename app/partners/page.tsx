export default function PartnersPage() {
  return (
    <main className='container-page py-12'>
      <h1 className='text-4xl font-bold text-brand-navy'>Partners</h1>
      <div className='mt-6 grid gap-4 md:grid-cols-2'>
        <article className='rounded-xl border border-brand-navy/15 p-6'>
          <h2 className='text-xl font-semibold'>Petrotrade</h2>
          <p className='mt-2'>National Fuel Purchase Facility and Petrotrade coupon acceptance for everyday and corporate fueling.</p>
        </article>
        <article className='rounded-xl border border-brand-navy/15 p-6'>
          <h2 className='text-xl font-semibold'>TFN (Truck Fuel Network)</h2>
          <p className='mt-2'>International fuel purchase and settlement support through the TFN network at www.tfn.co.za.</p>
        </article>
      </div>
    </main>
  );
}

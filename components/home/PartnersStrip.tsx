import Link from 'next/link';

export function PartnersStrip() {
  return (
    <section className='bg-brand-offwhite py-12'>
      <div className='container-page'>
        <h3 className='text-2xl font-semibold text-brand-navy'>In Partnership With</h3>
        <div className='mt-4 grid gap-3 md:grid-cols-2'>
          <div className='rounded-lg bg-white p-4'>Petrotrade — National Fuel Purchase Facility · Petrotrade coupons accepted</div>
          <div className='rounded-lg bg-white p-4'>TFN (Truck Fuel Network) — International purchase via www.tfn.co.za</div>
        </div>
        <Link href='/partners' className='mt-4 inline-block text-brand-orange'>Learn more →</Link>
      </div>
    </section>
  );
}

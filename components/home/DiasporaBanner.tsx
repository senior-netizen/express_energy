import Link from 'next/link';

export function DiasporaBanner() {
  return (
    <section className='py-14'>
      <div className='container-page'>
        <div className='overflow-hidden rounded-3xl bg-brand-secondary px-6 py-10 text-white md:px-10'>
          <p className='text-xs font-semibold uppercase tracking-[0.22em] text-white/70'>Diaspora fuel gifting</p>
          <h3 className='mt-3 max-w-2xl text-3xl font-semibold leading-tight'>Family abroad? They can send you fuel instantly.</h3>
          <p className='mt-3 max-w-2xl text-white/85'>Diaspora customers can purchase fuel for loved ones in Zimbabwe via EcoCash and InnBucks vouchers with secure digital delivery.</p>
          <Link href='/send-fuel' className='mt-6 inline-block rounded-full bg-brand-primary px-6 py-3 font-medium hover:brightness-95'>
            How it works
          </Link>
        </div>
      </div>
    </section>
  );
}

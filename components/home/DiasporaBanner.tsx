import Link from 'next/link';

export function DiasporaBanner() {
  return (
    <section className='bg-brand-orange py-14 text-white'>
      <div className='container-page'>
        <h3 className='text-3xl font-semibold'>Family abroad? They can send you fuel.</h3>
        <p className='mt-3 max-w-3xl'>Someone in the diaspora can purchase fuel for you using EcoCash or InnBucks — you simply collect at the station. No need for them to be in Zimbabwe.</p>
        <Link href='/send-fuel' className='mt-5 inline-block rounded-md bg-brand-navy px-6 py-3 font-semibold'>How it works →</Link>
      </div>
    </section>
  );
}

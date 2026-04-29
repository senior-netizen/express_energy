import Link from 'next/link';

export function Footer() {
  return (
    <footer className='mt-16 bg-brand-navy py-12 text-white'>
      <div className='container-page grid gap-8 md:grid-cols-3'>
        <div>
          <p className='text-lg font-bold'>EXPRESS ENERGY</p>
          <p className='mt-2 font-serif italic text-xl'>We Promise You Simply Miles Ahead after your Fueling</p>
        </div>
        <div>
          <p className='font-semibold'>Quick Links</p>
          <div className='mt-2 flex flex-col gap-1 text-sm text-white/85'>
            {['fuel-prices', 'find-a-station', 'send-fuel', 'services', 'partners', 'about', 'clients', 'contact'].map((item) => (
              <Link key={item} href={`/${item}`} className='hover:text-brand-orange'>{item.replaceAll('-', ' ')}</Link>
            ))}
          </div>
        </div>
        <div className='text-sm text-white/90'>
          <p>Phone: 0773 910 693 / 0776 161 732</p>
          <p className='mt-2'>15 Hofmeyer Street, Masvingo CBD</p>
          <p className='mt-4'>Licensed to supply petroleum and gas products in Zimbabwe.</p>
          <p className='mt-2'>© 2025 Express Energy Service Station. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

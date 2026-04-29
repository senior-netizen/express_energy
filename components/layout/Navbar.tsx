import Link from 'next/link';

const links = [
  ['Fuel Prices', '/fuel-prices'],
  ['Find a Station', '/find-a-station'],
  ['Send Fuel', '/send-fuel'],
  ['Services', '/services'],
  ['Partners', '/partners'],
  ['About', '/about'],
  ['Clients', '/clients'],
  ['Contact', '/contact']
];

export function Navbar() {
  return (
    <header className='sticky top-0 z-50 border-b border-brand-navy/10 bg-white/90 backdrop-blur'>
      <nav className='container-page flex h-20 items-center justify-between'>
        <Link href='/' className='text-lg font-bold text-brand-navy'>EXPRESS ENERGY</Link>
        <ul className='hidden items-center gap-2 md:flex'>
          {links.map(([label, href]) => (
            <li key={href}>
              <Link href={href} className={`rounded-full px-3 py-2 text-sm ${href === '/send-fuel' ? 'bg-brand-orange font-semibold text-white' : 'text-brand-dark hover:bg-brand-offwhite'}`}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

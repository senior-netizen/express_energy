import Link from 'next/link';

const links = ['fuel-prices', 'find-a-station', 'send-fuel', 'services', 'about', 'contact'];

export function Navbar() {
  return (
    <header className='sticky top-0 z-50 border-b border-brand-dark/10 bg-white/90 backdrop-blur'>
      <nav className='container-page flex h-20 items-center justify-between'>
        <Link href='/' className='ui-focus-ring ui-press ui-hover-lift rounded-md text-lg font-semibold tracking-tight motion-safe:transition'>
          Express Energy
        </Link>
        <ul className='hidden items-center gap-2 md:flex'>
          {links.map((l) => (
            <li key={l}>
              <Link
                className={`rounded-full px-4 py-2 text-sm capitalize transition-colors duration-base ease-out-soft ${
                  l === 'send-fuel' ? 'bg-brand-primary text-white font-semibold' : 'text-brand-dark hover:bg-brand-light'
                }`}
                href={`/${l}`}
              >
                {l.replaceAll('-', ' ')}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

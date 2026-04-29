import Link from 'next/link';
const links = ['fuel-prices','find-a-station','send-fuel','services','about','contact'];
export function Navbar(){return <header className='sticky top-0 z-50 border-b bg-white'><nav className='container-page flex h-16 items-center justify-between'><Link href='/' className='font-semibold'>Express Energy</Link><ul className='hidden gap-4 md:flex'>{links.map(l=><li key={l}><Link className={l==='send-fuel'?'text-brand-primary font-semibold capitalize':'capitalize'} href={`/${l}`}>{l.replaceAll('-',' ')}</Link></li>)}</ul></nav></header>}

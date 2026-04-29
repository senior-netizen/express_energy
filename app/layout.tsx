import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Express Energy Service Station',
  description: '24-hour fueling, station services, and diaspora fuel gifting in Masvingo.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='font-sans'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

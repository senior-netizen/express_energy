import { HeroBanner } from '@/components/home/HeroBanner';
import { FuelPricesStrip } from '@/components/home/FuelPricesStrip';
import { StationLocatorCTA } from '@/components/home/StationLocatorCTA';
import { DiasporaBanner } from '@/components/home/DiasporaBanner';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { PartnersStrip } from '@/components/home/PartnersStrip';

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <FuelPricesStrip />
      <StationLocatorCTA count={5} />
      <DiasporaBanner />
      <ServicesGrid />
      <PartnersStrip />
    </main>
  );
}

import { HeroBanner } from '@/components/home/HeroBanner';
import { FuelPricesStrip } from '@/components/home/FuelPricesStrip';
import { StationLocatorCTA } from '@/components/home/StationLocatorCTA';
import { DiasporaBanner } from '@/components/home/DiasporaBanner';
import { PaymentBadges } from '@/components/shared/PaymentBadges';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { PartnersStrip } from '@/components/home/PartnersStrip';

const prices=[{fuelType:'Petrol',zwg:45,usd:1.52,updatedAt:new Date().toISOString()},{fuelType:'Diesel',zwg:43,usd:1.49,updatedAt:new Date().toISOString()},{fuelType:'Blend',zwg:40,usd:1.4,updatedAt:new Date().toISOString()}] as const;
export default function Home(){return <main><HeroBanner/><FuelPricesStrip prices={[...prices]}/><StationLocatorCTA count={28}/><section className='container-page py-10'><h3 className='mb-3 text-xl'>We accept</h3><PaymentBadges/></section><DiasporaBanner/><ServicesGrid/><PartnersStrip/></main>}

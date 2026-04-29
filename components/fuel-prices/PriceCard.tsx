import { FuelPrice } from '@/lib/types';
export function PriceCard({price}:{price:FuelPrice}){return <div className='rounded-lg border p-4'><h3>{price.fuelType}</h3><p>ZWG {price.zwg.toFixed(2)}</p><p>USD {price.usd.toFixed(2)}</p></div>}

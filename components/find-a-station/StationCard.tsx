import { Station } from '@/lib/types';
export function StationCard({station}:{station:Station}){return <article className='rounded-lg border p-4'><h4 className='font-semibold'>{station.name}</h4><p>{station.city}</p><p className='text-sm'>{station.address}</p></article>}

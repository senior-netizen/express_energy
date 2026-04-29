import { StationMap } from '@/components/find-a-station/StationMap';
import { StationCard } from '@/components/find-a-station/StationCard';
export default function FindStationPage(){const stations=[{name:'Express Energy Avondale',city:'Harare',address:'123 Samora Machel',lat:0,lng:0,services:['Fuel']}]; return <main className='container-page py-10'><h1 className='text-3xl font-semibold'>Find a Station</h1><div className='mt-4 grid gap-4 lg:grid-cols-2'><StationMap/><div>{stations.map(s=><StationCard key={s.name} station={s}/>)}</div></div></main>}

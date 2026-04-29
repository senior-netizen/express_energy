export type FuelType = 'Petrol' | 'Diesel' | 'Blend';
export type FuelPrice = { fuelType: FuelType; zwg: number; usd: number; updatedAt: string };
export type Station = { name: string; city: string; address: string; lat: number; lng: number; services: string[] };

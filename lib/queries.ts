export const fuelPricesQuery = `*[_type == "fuelPrice"] | order(_updatedAt desc){fuelType, zwg, usd, "updatedAt": _updatedAt}`;
export const stationsQuery = `*[_type == "station"] | order(city asc){name, city, address, lat, lng, services}`;

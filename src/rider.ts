// Rider management utilities

export interface Rider {
  id: string;
  name: string;
  phone: string;
  vehicleType: 'motorcycle' | 'bicycle' | 'van' | 'truck';
  status: 'available' | 'busy' | 'offline';
  currentLocation?: {
    lat: number;
    lng: number;
  };
  rating: number;
  totalDeliveries: number;
}

export function createRider(
  id: string,
  name: string,
  phone: string,
  vehicleType: Rider['vehicleType']
): Rider {
  return {
    id,
    name,
    phone,
    vehicleType,
    status: 'offline',
    rating: 5.0,
    totalDeliveries: 0
  };
}

export function updateRiderStatus(
  rider: Rider,
  status: Rider['status']
): Rider {
  return { ...rider, status };
}

export function calculateDeliveryTime(
  distanceKm: number,
  vehicleType: Rider['vehicleType']
): number {
  const speeds: Record<Rider['vehicleType'], number> = {
    motorcycle: 30,
    bicycle: 15,
    van: 25,
    truck: 20
  };
  
  const speed = speeds[vehicleType];
  return Math.ceil((distanceKm / speed) * 60); // minutes
}

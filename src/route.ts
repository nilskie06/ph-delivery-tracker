// Route optimization utilities

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface RouteStop {
  id: string;
  address: string;
  coordinates: Coordinates;
  orderId: string;
  estimatedTime?: number;
}

export interface OptimizedRoute {
  stops: RouteStop[];
  totalDistance: number;
  estimatedDuration: number;
}

export function calculateDistance(
  point1: Coordinates,
  point2: Coordinates
): number {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(point2.lat - point1.lat);
  const dLng = toRad(point2.lng - point1.lng);
  
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(point1.lat)) *
      Math.cos(toRad(point2.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180);
}

export function optimizeRoute(stops: RouteStop[]): OptimizedRoute {
  // Simple nearest neighbor algorithm for route optimization
  const optimized: RouteStop[] = [];
  const remaining = [...stops];
  let current: Coordinates = { lat: 14.5995, lng: 120.9842 }; // Manila default
  
  while (remaining.length > 0) {
    let nearestIndex = 0;
    let nearestDistance = Infinity;
    
    for (let i = 0; i < remaining.length; i++) {
      const dist = calculateDistance(current, remaining[i].coordinates);
      if (dist < nearestDistance) {
        nearestDistance = dist;
        nearestIndex = i;
      }
    }
    
    const nearest = remaining.splice(nearestIndex, 1)[0];
    optimized.push(nearest);
    current = nearest.coordinates;
  }
  
  return {
    stops: optimized,
    totalDistance: 0,
    estimatedDuration: 0
  };
}

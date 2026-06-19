// src/route.ts
function calculateDistance(point1, point2) {
  const R = 6371;
  const dLat = toRad(point2.lat - point1.lat);
  const dLng = toRad(point2.lng - point1.lng);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(point1.lat)) * Math.cos(toRad(point2.lat)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
function toRad(deg) {
  return deg * (Math.PI / 180);
}
function optimizeRoute(stops) {
  const optimized = [];
  const remaining = [...stops];
  let current = { lat: 14.5995, lng: 120.9842 };
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
export {
  calculateDistance,
  optimizeRoute
};
//# sourceMappingURL=route.js.map
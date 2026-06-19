// src/rider.ts
function createRider(id, name, phone, vehicleType) {
  return {
    id,
    name,
    phone,
    vehicleType,
    status: "offline",
    rating: 5,
    totalDeliveries: 0
  };
}
function updateRiderStatus(rider, status) {
  return { ...rider, status };
}
function calculateDeliveryTime(distanceKm, vehicleType) {
  const speeds = {
    motorcycle: 30,
    bicycle: 15,
    van: 25,
    truck: 20
  };
  const speed = speeds[vehicleType];
  return Math.ceil(distanceKm / speed * 60);
}
export {
  calculateDeliveryTime,
  createRider,
  updateRiderStatus
};
//# sourceMappingURL=rider.js.map
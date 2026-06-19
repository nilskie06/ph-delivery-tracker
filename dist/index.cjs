"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  STATUS_MESSAGES: () => STATUS_MESSAGES,
  calculateDeliveryTime: () => calculateDeliveryTime,
  calculateDistance: () => calculateDistance,
  canTransition: () => canTransition,
  createProofOfDelivery: () => createProofOfDelivery,
  createRider: () => createRider,
  createTrackingEntry: () => createTrackingEntry,
  generateTrackingNumber: () => generateTrackingNumber,
  getStatusUpdate: () => getStatusUpdate,
  optimizeRoute: () => optimizeRoute,
  updateRiderStatus: () => updateRiderStatus,
  validateProof: () => validateProof
});
module.exports = __toCommonJS(src_exports);

// src/tracking.ts
function generateTrackingNumber() {
  const prefix = "PH";
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
}
function createTrackingEntry(trackingNumber, status, location, riderId, notes) {
  return {
    trackingNumber,
    status,
    timestamp: /* @__PURE__ */ new Date(),
    location,
    riderId,
    notes
  };
}

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

// src/status.ts
var STATUS_MESSAGES = {
  pending: "Order is being prepared",
  picked_up: "Package picked up by rider",
  in_transit: "Package is on its way",
  out_for_delivery: "Package is out for delivery",
  delivered: "Package has been delivered",
  failed: "Delivery attempt failed",
  returned: "Package is being returned"
};
function getStatusUpdate(status, customMessage) {
  return {
    status,
    message: customMessage || STATUS_MESSAGES[status],
    timestamp: /* @__PURE__ */ new Date(),
    requiresAction: status === "failed" || status === "returned"
  };
}
function canTransition(from, to) {
  const validTransitions = {
    pending: ["picked_up", "failed"],
    picked_up: ["in_transit", "failed"],
    in_transit: ["out_for_delivery", "failed"],
    out_for_delivery: ["delivered", "failed"],
    delivered: [],
    failed: ["returned", "pending"],
    returned: ["pending"]
  };
  return validTransitions[from].includes(to);
}

// src/proof.ts
function createProofOfDelivery(deliveryId, recipientName, photos, location, notes) {
  return {
    deliveryId,
    timestamp: /* @__PURE__ */ new Date(),
    recipientName,
    photos,
    notes,
    location
  };
}
function validateProof(proof) {
  return proof.deliveryId.length > 0 && proof.recipientName.length > 0 && proof.photos.length > 0 && proof.location.lat !== void 0 && proof.location.lng !== void 0;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  STATUS_MESSAGES,
  calculateDeliveryTime,
  calculateDistance,
  canTransition,
  createProofOfDelivery,
  createRider,
  createTrackingEntry,
  generateTrackingNumber,
  getStatusUpdate,
  optimizeRoute,
  updateRiderStatus,
  validateProof
});
//# sourceMappingURL=index.cjs.map
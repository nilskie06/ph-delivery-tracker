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

// src/rider.ts
var rider_exports = {};
__export(rider_exports, {
  calculateDeliveryTime: () => calculateDeliveryTime,
  createRider: () => createRider,
  updateRiderStatus: () => updateRiderStatus
});
module.exports = __toCommonJS(rider_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  calculateDeliveryTime,
  createRider,
  updateRiderStatus
});
//# sourceMappingURL=rider.cjs.map
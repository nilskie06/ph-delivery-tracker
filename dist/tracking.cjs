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

// src/tracking.ts
var tracking_exports = {};
__export(tracking_exports, {
  createTrackingEntry: () => createTrackingEntry,
  generateTrackingNumber: () => generateTrackingNumber
});
module.exports = __toCommonJS(tracking_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createTrackingEntry,
  generateTrackingNumber
});
//# sourceMappingURL=tracking.cjs.map
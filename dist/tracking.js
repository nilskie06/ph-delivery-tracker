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
export {
  createTrackingEntry,
  generateTrackingNumber
};
//# sourceMappingURL=tracking.js.map
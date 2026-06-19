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
export {
  createProofOfDelivery,
  validateProof
};
//# sourceMappingURL=proof.js.map
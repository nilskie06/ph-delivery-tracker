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

// src/proof.ts
var proof_exports = {};
__export(proof_exports, {
  createProofOfDelivery: () => createProofOfDelivery,
  validateProof: () => validateProof
});
module.exports = __toCommonJS(proof_exports);
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
  createProofOfDelivery,
  validateProof
});
//# sourceMappingURL=proof.cjs.map
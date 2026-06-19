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

// src/status.ts
var status_exports = {};
__export(status_exports, {
  STATUS_MESSAGES: () => STATUS_MESSAGES,
  canTransition: () => canTransition,
  getStatusUpdate: () => getStatusUpdate
});
module.exports = __toCommonJS(status_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  STATUS_MESSAGES,
  canTransition,
  getStatusUpdate
});
//# sourceMappingURL=status.cjs.map
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
export {
  STATUS_MESSAGES,
  canTransition,
  getStatusUpdate
};
//# sourceMappingURL=status.js.map
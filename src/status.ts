// Delivery status utilities

import { DeliveryStatus } from './tracking.js';

export interface StatusUpdate {
  status: DeliveryStatus;
  message: string;
  timestamp: Date;
  requiresAction: boolean;
}

export const STATUS_MESSAGES: Record<DeliveryStatus, string> = {
  pending: 'Order is being prepared',
  picked_up: 'Package picked up by rider',
  in_transit: 'Package is on its way',
  out_for_delivery: 'Package is out for delivery',
  delivered: 'Package has been delivered',
  failed: 'Delivery attempt failed',
  returned: 'Package is being returned'
};

export function getStatusUpdate(
  status: DeliveryStatus,
  customMessage?: string
): StatusUpdate {
  return {
    status,
    message: customMessage || STATUS_MESSAGES[status],
    timestamp: new Date(),
    requiresAction: status === 'failed' || status === 'returned'
  };
}

export function canTransition(
  from: DeliveryStatus,
  to: DeliveryStatus
): boolean {
  const validTransitions: Record<DeliveryStatus, DeliveryStatus[]> = {
    pending: ['picked_up', 'failed'],
    picked_up: ['in_transit', 'failed'],
    in_transit: ['out_for_delivery', 'failed'],
    out_for_delivery: ['delivered', 'failed'],
    delivered: [],
    failed: ['returned', 'pending'],
    returned: ['pending']
  };
  
  return validTransitions[from].includes(to);
}

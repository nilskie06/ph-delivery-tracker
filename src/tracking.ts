// Delivery tracking utilities

export interface DeliveryTracking {
  trackingNumber: string;
  status: DeliveryStatus;
  timestamp: Date;
  location?: string;
  riderId?: string;
  notes?: string;
}

export type DeliveryStatus = 
  | 'pending'
  | 'picked_up'
  | 'in_transit'
  | 'out_for_delivery'
  | 'delivered'
  | 'failed'
  | 'returned';

export function generateTrackingNumber(): string {
  const prefix = 'PH';
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
}

export function createTrackingEntry(
  trackingNumber: string,
  status: DeliveryStatus,
  location?: string,
  riderId?: string,
  notes?: string
): DeliveryTracking {
  return {
    trackingNumber,
    status,
    timestamp: new Date(),
    location,
    riderId,
    notes
  };
}

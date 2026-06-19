// Proof of delivery utilities

export interface ProofOfDelivery {
  deliveryId: string;
  timestamp: Date;
  recipientName: string;
  recipientSignature?: string;
  photos: string[];
  notes?: string;
  location: {
    lat: number;
    lng: number;
  };
}

export function createProofOfDelivery(
  deliveryId: string,
  recipientName: string,
  photos: string[],
  location: { lat: number; lng: number },
  notes?: string
): ProofOfDelivery {
  return {
    deliveryId,
    timestamp: new Date(),
    recipientName,
    photos,
    notes,
    location
  };
}

export function validateProof(proof: ProofOfDelivery): boolean {
  return (
    proof.deliveryId.length > 0 &&
    proof.recipientName.length > 0 &&
    proof.photos.length > 0 &&
    proof.location.lat !== undefined &&
    proof.location.lng !== undefined
  );
}

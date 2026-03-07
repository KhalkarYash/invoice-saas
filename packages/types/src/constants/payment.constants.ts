export const PAYMENT_STATUS = {
  PENDING: "pending",
  COMPLETED: "completed",
  FAILED: "failed",
  REFUNDED: "refunded",
} as const;

export type PaymentStatus =
  (typeof PAYMENT_STATUS)[keyof typeof PAYMENT_STATUS];

export const PAYMENT_METHOD = {
  CARD: "card",
  BANK_TRANSFER: "bank_transfer",
  UPI: "upi",
  CASH: "cash",
} as const;

export type PaymentMethod =
  (typeof PAYMENT_METHOD)[keyof typeof PAYMENT_METHOD];

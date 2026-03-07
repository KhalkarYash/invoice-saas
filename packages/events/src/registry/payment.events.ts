export type PaymentCompletedEvent = {
  paymentId: string;
  invoiceId: string;
  userId: string;
  amount: number;
  currency: string;
  paidAt: string;
};

export type PaymentFailedEvent = {
  paymentId: string;
  invoiceId: string;
  reason: string;
};

export type PaymentRefundedEvent = {
  paymentId: string;
  invoiceId: string;
  refundAmount: number;
};

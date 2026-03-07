export type InvoiceCreatedEvent = {
  invoiceId: string;
  userId: string;
  clientId: string;
  amount: number;
  currency: string;
  createdAt: string;
};

export type InvoiceSentEvent = {
  invoiceId: string;
  userId: string;
  clientEmail: string;
};

export type InvoicePaidEvent = {
  invoiceId: string;
  paymentId: string;
  amount: number;
  paidAt: string;
};

export type InvoiceOverdueEvent = {
  invoiceId: string;
  dueDate: string;
};

export const INVOICE_STATUS = {
  DRAFT: "draft",
  SENT: "sent",
  PAID: "paid",
  OVERDUE: "overdue",
} as const;

export type InvoiceStatus =
  (typeof INVOICE_STATUS)[keyof typeof INVOICE_STATUS];

export const INVOICE_CURRENCY = {
  USD: "USD",
  INR: "INR",
  EUR: "EUR",
  GBP: "GBP",
} as const;

export type InvoiceCurrency =
  (typeof INVOICE_CURRENCY)[keyof typeof INVOICE_CURRENCY];

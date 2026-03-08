import { httpClient } from "../http/http-client";
import type { Payment, PaymentId, InvoiceId, PaymentMethod } from "@repo/types";

type CreatePaymentPayload = Pick<
  Payment,
  "invoiceId" | "userId" | "amount" | "method"
>;

export const getPayments = (invoiceId: InvoiceId) =>
  httpClient<Payment[]>("/payments", { query: { invoiceId } });

export const createPayment = (payload: CreatePaymentPayload) =>
  httpClient<Payment>("/payments", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const refundPayment = (paymentId: PaymentId) =>
  httpClient<Payment>(`/payments/${paymentId}/refund`, {
    method: "POST",
  });

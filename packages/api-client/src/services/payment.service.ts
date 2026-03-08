import { httpClient } from "../http/http-client";

export const createPayment = (payload: any) =>
  httpClient("/payments", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const getPayments = (invoiceId: string) =>
  httpClient("/payments", { query: { invoiceId } });

export const refundPayment = (paymentId: string) =>
  httpClient(`/payments/${paymentId}/refund`, {
    method: "POST",
  });

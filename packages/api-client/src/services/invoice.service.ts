import { httpClient } from "../http/http-client";

export const getInvoices = (orgId: string) =>
  httpClient("/invoices", { query: { organizationId: orgId } });

export const getInvoice = (invoiceId: string) =>
  httpClient(`/invoices/${invoiceId}`);

export const createInvoice = (payload: any) =>
  httpClient("/invoices", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const updateInvoice = (invoiceId: string, payload: any) =>
  httpClient(`/invoices/${invoiceId}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });

export const deleteInvoice = (invoiceId: string) =>
  httpClient(`/invoices/${invoiceId}`, {
    method: "DELETE",
  });

export const sendInvoice = (invoiceId: string) =>
  httpClient(`/invoices/${invoiceId}/send`, {
    method: "POST",
  });

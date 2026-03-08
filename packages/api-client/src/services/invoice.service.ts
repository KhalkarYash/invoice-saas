import { httpClient } from "../http/http-client";
import type {
  Invoice,
  InvoiceId,
  OrganizationId,
  InvoiceCurrency,
} from "@repo/types";

type CreateInvoicePayload = Omit<Invoice, "id" | "createdAt" | "updatedAt">;
type UpdateInvoicePayload = Partial<
  Omit<Invoice, "id" | "userId" | "createdAt">
>;

export const getInvoices = (orgId: OrganizationId) =>
  httpClient<Invoice[]>("/invoices", { query: { organizationId: orgId } });

export const getInvoice = (invoiceId: InvoiceId) =>
  httpClient<Invoice>(`/invoices/${invoiceId}`);

export const createInvoice = (payload: CreateInvoicePayload) =>
  httpClient<Invoice>("/invoices", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const updateInvoice = (
  invoiceId: InvoiceId,
  payload: UpdateInvoicePayload,
) =>
  httpClient<Invoice>(`/invoices/${invoiceId}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });

export const deleteInvoice = (invoiceId: InvoiceId) =>
  httpClient<void>(`/invoices/${invoiceId}`, {
    method: "DELETE",
  });

export const sendInvoice = (invoiceId: InvoiceId) =>
  httpClient<void>(`/invoices/${invoiceId}/send`, {
    method: "POST",
  });

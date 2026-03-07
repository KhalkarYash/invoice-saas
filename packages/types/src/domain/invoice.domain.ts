import { InvoiceStatus, InvoiceCurrency } from "../constants/invoice.constants";
import { InvoiceId, UserId, ClientId } from "../ids/ids";

export type Invoice = {
  id: InvoiceId;
  userId: UserId;
  clientId: ClientId;

  amount: number;
  currency: InvoiceCurrency;

  status: InvoiceStatus;

  issuedAt: string;
  dueAt: string;

  createdAt: string;
  updatedAt?: string;
};

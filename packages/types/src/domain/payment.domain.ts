import { PaymentMethod, PaymentStatus } from "../constants/payment.constants";
import { PaymentId, InvoiceId, UserId } from "../ids/ids";

export type Payment = {
  id: PaymentId;

  invoiceId: InvoiceId;
  userId: UserId;

  amount: number;

  method: PaymentMethod;

  status: PaymentStatus;

  paidAt?: string;

  createdAt: string;
};

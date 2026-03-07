import {
  InvoiceCreatedEvent,
  InvoiceSentEvent,
  InvoicePaidEvent,
  InvoiceOverdueEvent,
} from "./registry/invoice.events";

import {
  PaymentCompletedEvent,
  PaymentFailedEvent,
  PaymentRefundedEvent,
} from "./registry/payment.events";

import {
  UserCreatedEvent,
  UserInvitedEvent,
  UserDeletedEvent,
} from "./registry/user.events";

import {
  EmailNotificationRequestedEvent,
  SmsNotificationRequestedEvent,
  PushNotificationRequestedEvent,
} from "./registry/notification.events";

import { EVENTS } from "@repo/types";

export type EventPayloadMap = {
  [EVENTS.INVOICE_CREATED]: InvoiceCreatedEvent;
  [EVENTS.INVOICE_SENT]: InvoiceSentEvent;
  [EVENTS.INVOICE_PAID]: InvoicePaidEvent;
  [EVENTS.INVOICE_OVERDUE]: InvoiceOverdueEvent;

  [EVENTS.PAYMENT_COMPLETED]: PaymentCompletedEvent;
  [EVENTS.PAYMENT_FAILED]: PaymentFailedEvent;
  [EVENTS.PAYMENT_REFUNDED]: PaymentRefundedEvent;

  [EVENTS.USER_CREATED]: UserCreatedEvent;
  [EVENTS.USER_INVITED]: UserInvitedEvent;
  [EVENTS.USER_DELETED]: UserDeletedEvent;

  [EVENTS.NOTIFICATION_EMAIL_REQUESTED]: EmailNotificationRequestedEvent;
  [EVENTS.NOTIFICATION_SMS_REQUESTED]: SmsNotificationRequestedEvent;
  [EVENTS.NOTIFICATION_PUSH_REQUESTED]: PushNotificationRequestedEvent;
};

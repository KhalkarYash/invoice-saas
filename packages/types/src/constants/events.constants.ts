export const EVENTS = {
  // Invoice events
  INVOICE_CREATED: "invoice.created",
  INVOICE_SENT: "invoice.sent",
  INVOICE_PAID: "invoice.paid",
  INVOICE_OVERDUE: "invoice.overdue",

  // Payment events
  PAYMENT_COMPLETED: "payment.completed",
  PAYMENT_FAILED: "payment.failed",
  PAYMENT_REFUNDED: "payment.refunded",

  // User events
  USER_CREATED: "user.created",
  USER_INVITED: "user.invited",
  USER_DELETED: "user.deleted",

  // Organization / membership events
  MEMBER_INVITED: "member.invited",
  MEMBER_JOINED: "member.joined",
  MEMBER_REMOVED: "member.removed",

  // Notification events
  NOTIFICATION_EMAIL_REQUESTED: "notification.email.requested",
  NOTIFICATION_SMS_REQUESTED: "notification.sms.requested",
  NOTIFICATION_PUSH_REQUESTED: "notification.push.requested",
} as const;

export type EventName = (typeof EVENTS)[keyof typeof EVENTS];

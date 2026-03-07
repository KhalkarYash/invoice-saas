export const PERMISSIONS = {
  INVOICE_CREATE: "invoice.create",
  INVOICE_READ: "invoice.read",
  INVOICE_UPDATE: "invoice.update",
  INVOICE_DELETE: "invoice.delete",

  MEMBER_INVITE: "member.invite",
  MEMBER_REMOVE: "member.remove",

  PAYMENT_CREATE: "payment.create",
  PAYMENT_REFUND: "payment.refund",

  ORGANIZATION_UPDATE: "organization.update",
} as const;

export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];

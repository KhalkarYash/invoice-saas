export const ORGANIZATION_STATUS = {
  ACTIVE: "active",
  SUSPENDED: "suspended",
  ARCHIVED: "archived",
} as const;

export type OrganizationStatus =
  (typeof ORGANIZATION_STATUS)[keyof typeof ORGANIZATION_STATUS];

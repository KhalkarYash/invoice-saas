export const MEMBER_STATUS = {
  INVITED: "invited",
  ACTIVE: "active",
  SUSPENDED: "suspended",
  REMOVED: "removed",
} as const;

export type MemberStatus = (typeof MEMBER_STATUS)[keyof typeof MEMBER_STATUS];

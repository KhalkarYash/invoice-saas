export const SYSTEM_ROLE = {
  OWNER: "owner",
  ADMIN: "admin",
} as const;

export type SystemRole = (typeof SYSTEM_ROLE)[keyof typeof SYSTEM_ROLE];

export const USER_STATUS = {
  ACTIVE: "active",
  INVITED: "invited",
  DISABLED: "disabled",
} as const;

export type UserStatus = (typeof USER_STATUS)[keyof typeof USER_STATUS];

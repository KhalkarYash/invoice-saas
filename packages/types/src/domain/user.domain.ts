import { SystemRole } from "../constants/user.constants";
import { UserId, OrganizationId } from "../ids/ids";

export type User = {
  id: UserId;

  email: string;

  systemRole?: SystemRole;

  organizationId?: OrganizationId;

  roleId?: string; // org role

  createdAt: string;

  updatedAt?: string;
};

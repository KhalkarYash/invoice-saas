import { UserId, OrganizationId } from "../ids/ids";
import { MemberStatus } from "../constants/member.constants";
import { SystemRole } from "../constants/user.constants";

export type OrganizationMember = {
  id: string;

  organizationId: OrganizationId;

  userId: UserId;

  roleId?: string;

  systemRole?: SystemRole;

  status: MemberStatus;

  invitedBy?: UserId;

  joinedAt?: string;

  createdAt: string;
};

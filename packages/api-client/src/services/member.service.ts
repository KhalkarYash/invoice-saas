import { httpClient } from "../http/http-client";
import type { OrganizationMember, OrganizationId, MemberId } from "@repo/types";

type InviteMemberPayload = { email: string; roleId?: string };

export const getMembers = (orgId: OrganizationId) =>
  httpClient<OrganizationMember[]>(`/organizations/${orgId}/members`);

export const inviteMember = (
  orgId: OrganizationId,
  payload: InviteMemberPayload,
) =>
  httpClient<OrganizationMember>(`/organizations/${orgId}/members/invite`, {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const removeMember = (orgId: OrganizationId, memberId: MemberId) =>
  httpClient<void>(`/organizations/${orgId}/members/${memberId}`, {
    method: "DELETE",
  });

export const updateMemberRole = (
  orgId: OrganizationId,
  memberId: MemberId,
  roleId: string,
) =>
  httpClient<OrganizationMember>(
    `/organizations/${orgId}/members/${memberId}/role`,
    {
      method: "PATCH",
      body: JSON.stringify({ roleId }),
    },
  );

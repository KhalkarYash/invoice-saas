import { httpClient } from "../http/http-client";

export const getMembers = (orgId: string) =>
  httpClient(`/organizations/${orgId}/members`);

export const inviteMember = (orgId: string, payload: any) =>
  httpClient(`/organizations/${orgId}/members/invite`, {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const removeMember = (orgId: string, memberId: string) =>
  httpClient(`/organizations/${orgId}/members/${memberId}`, {
    method: "DELETE",
  });

export const updateMemberRole = (
  orgId: string,
  memberId: string,
  roleId: string,
) =>
  httpClient(`/organizations/${orgId}/members/${memberId}/role`, {
    method: "PATCH",
    body: JSON.stringify({ roleId }),
  });

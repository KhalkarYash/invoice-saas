import { httpClient } from "../http/http-client";
import type { Organization, OrganizationId } from "@repo/types";

type CreateOrganizationPayload = Pick<Organization, "name">;
type UpdateOrganizationPayload = Partial<Pick<Organization, "name">>;

export const getOrganizations = () =>
  httpClient<Organization[]>("/organizations");

export const getOrganization = (orgId: OrganizationId) =>
  httpClient<Organization>(`/organizations/${orgId}`);

export const createOrganization = (payload: CreateOrganizationPayload) =>
  httpClient<Organization>("/organizations", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const updateOrganization = (
  orgId: OrganizationId,
  payload: UpdateOrganizationPayload,
) =>
  httpClient<Organization>(`/organizations/${orgId}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });

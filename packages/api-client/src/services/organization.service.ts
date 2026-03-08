import { httpClient } from "../http/http-client";

export const getOrganizations = () => httpClient("/organizations");

export const createOrganization = (payload: any) =>
  httpClient("/organizations", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const getOrganization = (orgId: string) =>
  httpClient(`/organizations/${orgId}`);

export const updateOrganization = (orgId: string, payload: any) =>
  httpClient(`/organizations/${orgId}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });

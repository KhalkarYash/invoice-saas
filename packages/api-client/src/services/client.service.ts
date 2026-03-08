import { httpClient } from "../http/http-client";

export const getClients = (orgId: string) =>
  httpClient("/clients", { query: { organizationId: orgId } });

export const createClient = (payload: any) =>
  httpClient("/clients", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const updateClient = (clientId: string, payload: any) =>
  httpClient(`/clients/${clientId}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });

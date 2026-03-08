import { httpClient } from "../http/http-client";
import type { ClientId, OrganizationId } from "@repo/types";

type Client = {
  id: ClientId;
  organizationId: OrganizationId;
  name: string;
  email: string;
  phone?: string;
  createdAt: string;
  updatedAt?: string;
};

type CreateClientPayload = Omit<Client, "id" | "createdAt" | "updatedAt">;
type UpdateClientPayload = Partial<
  Omit<Client, "id" | "organizationId" | "createdAt">
>;

export const getClients = (orgId: OrganizationId) =>
  httpClient<Client[]>("/clients", { query: { organizationId: orgId } });

export const createClient = (payload: CreateClientPayload) =>
  httpClient<Client>("/clients", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const updateClient = (
  clientId: ClientId,
  payload: UpdateClientPayload,
) =>
  httpClient<Client>(`/clients/${clientId}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });

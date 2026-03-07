import { OrganizationId, UserId } from "../ids/ids";
import { OrganizationStatus } from "../constants/organization.constants";

export type Organization = {
  id: OrganizationId;

  name: string;

  ownerUserId: UserId;

  status: OrganizationStatus;

  createdAt: string;
  updatedAt?: string;
};

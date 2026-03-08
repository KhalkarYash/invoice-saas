import { httpClient } from "../http/http-client";
import type { NotificationId } from "@repo/types";

type Notification = {
  id: NotificationId;
  title: string;
  body: string;
  read: boolean;
  createdAt: string;
};

export const getNotifications = () =>
  httpClient<Notification[]>("/notifications");

export const markNotificationRead = (id: NotificationId) =>
  httpClient<void>(`/notifications/${id}/read`, {
    method: "POST",
  });

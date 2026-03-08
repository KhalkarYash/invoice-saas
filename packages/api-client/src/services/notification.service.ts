import { httpClient } from "../http/http-client";

export const getNotifications = () => httpClient("/notifications");

export const markNotificationRead = (id: string) =>
  httpClient(`/notifications/${id}/read`, {
    method: "POST",
  });

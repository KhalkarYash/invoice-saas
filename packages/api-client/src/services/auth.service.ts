import { httpClient } from "../http/http-client";

export const login = (payload: { email: string; password: string }) =>
  httpClient("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const logout = () => httpClient("/auth/logout", { method: "POST" });

export const refreshSession = () =>
  httpClient("/auth/refresh", { method: "POST" });

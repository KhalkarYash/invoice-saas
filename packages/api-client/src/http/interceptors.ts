import { getAccessToken } from "./token-manager";

export const requestInterceptor = async (
  options: RequestInit,
): Promise<RequestInit> => {
  const token = getAccessToken();

  return {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };
};

export const responseInterceptor = async (response: Response) => {
  if (response.status === 401) {
    throw new Error("UNAUTHORIZED");
  }

  return response;
};

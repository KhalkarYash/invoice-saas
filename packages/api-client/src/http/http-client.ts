import { config } from "@repo/config";
import { requestInterceptor, responseInterceptor } from "./interceptors";

export type RequestOptions = RequestInit & {
  query?: Record<string, string | number | boolean>;
};

const buildUrl = (path: string, query?: RequestOptions["query"]) => {
  const url = new URL(`${config.apiGatewayUrl}${path}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) =>
      url.searchParams.append(key, String(value)),
    );
  }

  return url.toString();
};

async function executeRequest<T>(
  path: string,
  options: RequestOptions,
): Promise<T> {
  const { query, ...fetchOptions } = options;

  const interceptedRequest = await requestInterceptor(fetchOptions);

  const response = await fetch(buildUrl(path, query), interceptedRequest);

  const interceptedResponse = await responseInterceptor(response);

  if (!interceptedResponse.ok) {
    throw new Error(`API Error: ${interceptedResponse.status}`);
  }

  return interceptedResponse.json();
}

export async function httpClient<T>(
  path: string,
  options: RequestOptions = {},
): Promise<T> {
  try {
    return await executeRequest(path, options);
  } catch (error: any) {
    if (error.message === "UNAUTHORIZED") {
      await refreshAuthToken();
      return executeRequest(path, options);
    }

    throw error;
  }
}

async function refreshAuthToken() {
  // this should call your auth endpoint
  // or cognito refresh logic
}

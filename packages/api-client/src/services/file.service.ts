import { httpClient } from "../http/http-client";

export const uploadFile = (payload: any) =>
  httpClient("/files", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const deleteFile = (fileId: string) =>
  httpClient(`/files/${fileId}`, {
    method: "DELETE",
  });

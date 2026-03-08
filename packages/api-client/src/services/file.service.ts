import { httpClient } from "../http/http-client";
import type { FileId } from "@repo/types";

type UploadedFile = {
  id: FileId;
  url: string;
  name: string;
  mimeType: string;
  size: number;
  createdAt: string;
};

type UploadFilePayload = { name: string; mimeType: string; base64: string };

export const uploadFile = (payload: UploadFilePayload) =>
  httpClient<UploadedFile>("/files", {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const deleteFile = (fileId: FileId) =>
  httpClient<void>(`/files/${fileId}`, {
    method: "DELETE",
  });

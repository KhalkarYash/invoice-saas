import { sendLog } from "./cloudwatch";
import { config } from "@repo/config";

type LogLevel = "INFO" | "ERROR" | "WARN" | "DEBUG";
interface LogPayload {
  message: string;
  data?: unknown;
}

const formatLog = (level: LogLevel, payload: LogPayload) => {
  return JSON.stringify({
    level,
    service: config.serviceName,
    message: payload.message,
    data: payload.data,
    timestamp: new Date().toISOString(),
  });
};

export const logger = {
  info: async (payload: LogPayload) => {
    await sendLog(formatLog("INFO", payload));
  },

  error: async (payload: LogPayload) => {
    await sendLog(formatLog("ERROR", payload));
  },

  warn: async (payload: LogPayload) => {
    await sendLog(formatLog("WARN", payload));
  },

  debug: async (payload: LogPayload) => {
    await sendLog(formatLog("DEBUG", payload));
  },
};

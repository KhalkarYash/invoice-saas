import { Logger } from "@aws-lambda-powertools/logger";
import type { LogLevel } from "@aws-lambda-powertools/logger/types";
import { env_config } from "../../config/env-config.js";

const { log_level } = env_config;

const logger = new Logger({
  serviceName: "",
  logLevel: (log_level || "INFO") as LogLevel,
});

export default logger;

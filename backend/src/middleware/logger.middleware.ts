import winston from "winston";
import fs from "fs";
import path from "path";
import { env_config } from "../config/env-config.js";

const log_dir = path.resolve(process.cwd(), "logs");
const { node_env } = env_config;

if (!fs.existsSync(log_dir)) {
  fs.mkdirSync(log_dir, { recursive: true });
}

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  defaultMeta: "main-service",
  transports: [
    new winston.transports.File({
      filename: path.join(log_dir, "error.log"),
      level: "error",
    }),
    new winston.transports.File({
      filename: path.join(log_dir, "combined.log"),
    }),
  ],
});

if (node_env === "development") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

export default logger;

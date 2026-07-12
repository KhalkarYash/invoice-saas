import { config } from "dotenv";
config();
import { z } from "zod";
import { NODE_ENV_CONSTANT } from "../constants/constants.js";

const env_schema = z.object({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(Object.values(NODE_ENV_CONSTANT)),
  API_VERSION: z.string().min(1),
  ALLOWED_ORIGIN: z.string(),
  LOG_LEVEL: z.string().optional(),
  DATABASE_URL: z.string(),
});

const env = env_schema.parse(process.env);

export const env_config = {
  port: env.PORT,
  node_env: env.NODE_ENV,
  api_version: env.API_VERSION,
  allowed_origin: env.ALLOWED_ORIGIN,
  log_level: env.LOG_LEVEL,
  database_url: env.DATABASE_URL,
};

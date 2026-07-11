import { config } from "dotenv";
config();
import { z } from "zod";
import { NODE_ENV_CONSTANT } from "../constants/constants.js";

console.log({
  NODE_ENV: process.env.NODE_ENV,
  API_VERSION: process.env.API_VERSION,
  PORT: process.env.PORT,
});

const env_schema = z.object({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(Object.values(NODE_ENV_CONSTANT)),
  API_VERSION: z.string().min(1),
});

const env = env_schema.parse(process.env);

export const env_config = {
  port: env.PORT,
  node_env: env.NODE_ENV,
  api_version: env.API_VERSION,
};

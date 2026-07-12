import { env_config } from "../../config/env-config.js";
import { PrismaClient } from "../../generated/prisma/client.js";

export const prisma = new PrismaClient({
  accelerateUrl: env_config.database_url,
});

import type { PrismaClient } from "../../generated/prisma/client.js";

export class HealthRepository {
  constructor(private db: PrismaClient) {}

  async ping() {
    await this.db.$queryRaw`SELECT 1`;

    return true;
  }
}

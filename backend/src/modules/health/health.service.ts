import type { HealthRepository } from "./health.repository.js";

export class HealthService {
  constructor(private health_repository: HealthRepository) {}

  async health_check() {
    const database = await this.health_repository.ping();

    return {
      status: "ok",
      database,
    };
  }
}

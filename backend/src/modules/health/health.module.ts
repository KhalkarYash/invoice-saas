import { prisma } from "../../shared/database/prisma.js";
import { HealthRepository } from "./health.repository.js";
import { HealthService } from "./health.service.js";
import { HealthController } from "./health.controller.js";

const repository = new HealthRepository(prisma);

const service = new HealthService(repository);

export const controller = new HealthController(service);

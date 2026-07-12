import type { Request, Response } from "express";
import type { HealthService } from "./health.service.js";
import { handle_controller_error } from "../../shared/utils/error-handler.js";

export class HealthController {
  constructor(private health_service: HealthService) {}

  check = async (req: Request, res: Response) => {
    try {
      const result = await this.health_service.health_check();

      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      return handle_controller_error(res, error, "checking health");
    }
  };
}

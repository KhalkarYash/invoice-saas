import { AuthController } from "./auth.controller.js";
import { AuthRepository } from "./auth.repository.js";
import { AuthService } from "./auth.service.js";

const repository = new AuthRepository();
const service = new AuthService(repository);
export const controller = new AuthController(service);

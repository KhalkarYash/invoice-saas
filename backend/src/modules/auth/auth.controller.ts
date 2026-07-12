import type { AuthService } from "./auth.service.js";

export class AuthController {
  constructor(private repository: AuthService) {}
}

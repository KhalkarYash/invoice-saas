import type { AuthRepository } from "./auth.repository.js";

export class AuthService {
  constructor(private repository: AuthRepository) {}
}

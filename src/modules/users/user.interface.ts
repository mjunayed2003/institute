import { UserRole } from "../../../generated/prisma/client.js";

export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  phoneNumber?: string;
  role?: UserRole; // Optional, default: STUDENT
}

export interface LoginInput {
  email: string;
  password: string;
}
 
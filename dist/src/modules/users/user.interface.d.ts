import { UserRole } from "../../../generated/prisma/client.ts";
export interface CreateUserInput {
    name: string;
    email: string;
    password: string;
    phoneNumber?: string;
    role?: UserRole;
}
export interface LoginInput {
    email: string;
    password: string;
}
//# sourceMappingURL=user.interface.d.ts.map
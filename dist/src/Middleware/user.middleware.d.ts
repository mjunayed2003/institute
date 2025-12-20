import type { Request, Response, NextFunction } from "express";
import { UserRole } from "@prisma/client";
export interface AuthUser {
    id: string;
    role: UserRole;
}
export interface AuthRequest extends Request {
    user?: AuthUser;
}
export declare const authenticate: (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare const authorize: (roles: UserRole[]) => (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=user.middleware.d.ts.map
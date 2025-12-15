import type { Request, Response, NextFunction } from "express";
import { UserRole } from "../../generated/prisma/client.ts";
export interface AuthRequest extends Request {
    user?: {
        id: string;
        role: UserRole;
    };
}
export declare const authenticate: (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare const authorize: (roles: UserRole[]) => (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=user.middleware.d.ts.map
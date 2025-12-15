import type { Request, Response } from "express";
import { UserRole } from "../../../../generated/prisma/client.ts";
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                role: UserRole;
            };
        }
    }
}
export declare const studentController: {
    getProfile(req: Request, res: Response): Promise<void>;
    updateProfile(req: Request, res: Response): Promise<void>;
};
//# sourceMappingURL=student.controller.d.ts.map
import type { Response } from "express";
import type { AuthRequest } from "../../Middleware/user.middleware.ts";
export declare const paymentController: {
    initiate(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    success(req: AuthRequest, res: Response): Promise<void>;
    fail(req: AuthRequest, res: Response): Promise<void>;
};
//# sourceMappingURL=payment.controller.d.ts.map
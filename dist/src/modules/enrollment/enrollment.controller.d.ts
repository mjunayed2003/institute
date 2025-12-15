import type { Request, Response } from "express";
export declare const enrollmentController: {
    enrollStudent: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    checkEnrollment: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getMyCourses: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=enrollment.controller.d.ts.map
import type { Request, Response } from "express";
export declare const moduleController: {
    createModule: (req: Request, res: Response) => Promise<void>;
    getModulesByCourse: (req: Request, res: Response) => Promise<void>;
    updateModule: (req: Request, res: Response) => Promise<void>;
    deleteModule: (req: Request, res: Response) => Promise<void>;
    reorderModules: (req: Request, res: Response) => Promise<void>;
    createLesson: (req: Request, res: Response) => Promise<void>;
    getLessonsByModule: (req: Request, res: Response) => Promise<void>;
    updateLesson: (req: Request, res: Response) => Promise<void>;
    deleteLesson: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=module.controller.d.ts.map
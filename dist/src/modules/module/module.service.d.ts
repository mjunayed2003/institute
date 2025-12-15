import type { CreateModuleInput, CreateLessonInput, UpdateModuleInput, UpdateLessonInput } from "./module.interface.js";
export declare const moduleService: {
    createModule(data: CreateModuleInput): Promise<{
        id: string;
        title: string;
        courseId: string;
        order: number;
    }>;
    getModulesByCourse(courseId: string): Promise<({
        lessons: {
            id: string;
            type: string;
            title: string;
            videoUrl: string | null;
            duration: number | null;
            isFree: boolean;
            moduleId: string;
            resources: {
                title: string;
                url: string;
            }[];
        }[];
    } & {
        id: string;
        title: string;
        courseId: string;
        order: number;
    })[]>;
    updateModule(id: string, data: UpdateModuleInput): Promise<{
        id: string;
        title: string;
        courseId: string;
        order: number;
    }>;
    deleteModule(id: string): Promise<{
        id: string;
        title: string;
        courseId: string;
        order: number;
    }>;
    createLesson(data: CreateLessonInput): Promise<{
        id: string;
        type: string;
        title: string;
        videoUrl: string | null;
        duration: number | null;
        isFree: boolean;
        moduleId: string;
        resources: {
            title: string;
            url: string;
        }[];
    }>;
    getLessonsByModule(moduleId: string): Promise<{
        id: string;
        type: string;
        title: string;
        videoUrl: string | null;
        duration: number | null;
        isFree: boolean;
        moduleId: string;
        resources: {
            title: string;
            url: string;
        }[];
    }[]>;
    updateLesson(id: string, data: UpdateLessonInput): Promise<{
        id: string;
        type: string;
        title: string;
        videoUrl: string | null;
        duration: number | null;
        isFree: boolean;
        moduleId: string;
        resources: {
            title: string;
            url: string;
        }[];
    }>;
    deleteLesson(id: string): Promise<{
        id: string;
        type: string;
        title: string;
        videoUrl: string | null;
        duration: number | null;
        isFree: boolean;
        moduleId: string;
        resources: {
            title: string;
            url: string;
        }[];
    }>;
    reorderModules(courseId: string, moduleOrders: {
        id: string;
        order: number;
    }[]): Promise<{
        id: string;
        title: string;
        courseId: string;
        order: number;
    }[]>;
};
//# sourceMappingURL=module.service.d.ts.map
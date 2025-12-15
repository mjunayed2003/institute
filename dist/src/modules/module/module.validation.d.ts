import { z } from "zod";
export declare const createModuleSchema: z.ZodObject<{
    title: z.ZodString;
    order: z.ZodNumber;
    courseId: z.ZodString;
}, z.core.$strip>;
export declare const updateModuleSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    order: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const createLessonSchema: z.ZodObject<{
    title: z.ZodString;
    type: z.ZodString;
    videoUrl: z.ZodOptional<z.ZodString>;
    duration: z.ZodOptional<z.ZodNumber>;
    isFree: z.ZodOptional<z.ZodBoolean>;
    resources: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        url: z.ZodString;
    }, z.core.$strip>>>;
    moduleId: z.ZodString;
}, z.core.$strip>;
export declare const updateLessonSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    videoUrl: z.ZodOptional<z.ZodString>;
    duration: z.ZodOptional<z.ZodNumber>;
    isFree: z.ZodOptional<z.ZodBoolean>;
    resources: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        url: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
//# sourceMappingURL=module.validation.d.ts.map
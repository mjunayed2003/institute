import { z } from "zod";
export declare const createCourseSchema: z.ZodObject<{
    title: z.ZodString;
    slug: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    price: z.ZodNumber;
    category: z.ZodString;
    level: z.ZodString;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const updateCourseSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodNumber>;
    category: z.ZodOptional<z.ZodString>;
    level: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    isPublished: z.ZodOptional<z.ZodBoolean>;
    thumbnail: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const assignMentorSchema: z.ZodObject<{
    courseId: z.ZodString;
    mentorId: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=course.validation.d.ts.map
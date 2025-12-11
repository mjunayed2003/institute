import { z } from "zod";

export const createModuleSchema = z.object({
  title: z.string(),
  order: z.number(),
  courseId: z.string(),
});

export const updateModuleSchema = z.object({
  title: z.string().optional(),
  order: z.number().optional(),
});

export const createLessonSchema = z.object({
  title: z.string(),
  type: z.string(),
  videoUrl: z.string().optional(),
  duration: z.number().optional(),
  isFree: z.boolean().optional(),
  resources: z.array(
    z.object({
      title: z.string(),
      url: z.string(),
    })
  ).optional(),
  moduleId: z.string(),
});

export const updateLessonSchema = z.object({
  title: z.string().optional(),
  type: z.string().optional(),
  videoUrl: z.string().optional(),
  duration: z.number().optional(),
  isFree: z.boolean().optional(),
  resources: z.array(
    z.object({
      title: z.string(),
      url: z.string(),
    })
  ).optional(),
});
    
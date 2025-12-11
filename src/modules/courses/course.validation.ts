import { z } from "zod";

export const createCourseSchema = z.object({
  title: z.string(),
  slug: z.string().optional(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  level: z.string(),
  tags: z.array(z.string()).optional(),
});

export const updateCourseSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  price: z.number().optional(),
  category: z.string().optional(),
  level: z.string().optional(),
  tags: z.array(z.string()).optional(),
  isPublished: z.boolean().optional(),
  thumbnail: z.string().optional(),
});

export const assignMentorSchema = z.object({
  courseId: z.string(),
  mentorId: z.string(),
});

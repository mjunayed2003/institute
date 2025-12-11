import type { Request, Response } from "express";
import { enrollmentService } from "./enrollment.service.js";

export const enrollmentController = {
  // Enroll student
  enrollStudent: async (req: Request, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "User not authenticated" });
      }
      const userId = req.user.id;
      const enrollment = await enrollmentService.enrollStudent(userId, req.body);
      res.status(201).json({ message: "Enrolled successfully", enrollment });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  // Check enrollment
  checkEnrollment: async (req: Request, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "User not authenticated" });
      }
      const userId = req.user.id;
      const { courseId } = req.params;
      if (!courseId) {
        return res.status(400).json({ error: "Course ID is required" });
      }
      const enrolled = await enrollmentService.checkEnrollment(userId, courseId);
      res.json({ enrolled });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  // Get My Courses
  getMyCourses: async (req: Request, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "User not authenticated" });
      }
      const userId = req.user.id;
      const courses = await enrollmentService.getMyCourses(userId);
      res.json(courses);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },
};

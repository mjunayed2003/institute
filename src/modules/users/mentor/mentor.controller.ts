import type { Request, Response } from "express";
import { mentorService } from "./mentor.service.js";

export const mentorController = {
  async getProfile(req: Request, res: Response) {
    const userId = req.user!.id;
    const profile = await mentorService.getProfile(userId);
    res.json(profile);
  },

  async updateProfile(req: Request, res: Response) {
    const userId = req.user!.id;
    const updated = await mentorService.updateProfile(userId, req.body);
    res.json({ message: "Profile updated successfully", updated });
  },

  async createCourse(req: Request, res: Response) {
    const userId = req.user!.id;
    const course = await mentorService.createCourse(userId, req.body);
    res.json({ message: "Course created successfully", course });
  },

  async getCourses(req: Request, res: Response) {
    const userId = req.user!.id;
    const courses = await mentorService.getCourses(userId);
    res.json(courses);
  },

  async updateCourse(req: Request, res: Response) {
    const userId = req.user!.id;
    const course = await mentorService.updateCourse(req.params.id || '', userId, req.body);
    res.json({ message: "Course updated successfully", course });
  },

  async deleteCourse(req: Request, res: Response) {
    const userId = req.user!.id;
    await mentorService.deleteCourse(req.params.id || '', userId);
    res.json({ message: "Course deleted successfully" });
  },
};

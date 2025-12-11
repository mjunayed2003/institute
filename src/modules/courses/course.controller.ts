import type { Request, Response } from "express";
import { courseService } from "./course.service.js";

export const courseController = {
  async create(req: Request, res: Response) {
    const course = await courseService.createCourse(req.body, req.user!.id);
    res.status(201).json({ message: "Course created", course });
  },

  async all(req: Request, res: Response) {
    const courses = await courseService.getAllCourses();
    res.json(courses);
  },

  async single(req: Request, res: Response) {
    const course = await courseService.getCourseById(req.params.id || '');
    res.json(course);
  },

  async update(req: Request, res: Response) {
    const course = await courseService.updateCourse(req.params.id || '', req.body);
    res.json({ message: "Course updated", course });
  },

  async remove(req: Request, res: Response) {
    await courseService.deleteCourse(req.params.id || '');
    res.json({ message: "Course deleted" });
  },

  async publish(req: Request, res: Response) {
    const status = req.body.status;
    const updated = await courseService.togglePublish(req.params.id || '', status);
    res.json({ message: "Course publish updated", updated });
  },

  async assignMentor(req: Request, res: Response) {
    const updated = await courseService.assignMentor(req.body);
    res.json({ message: "Mentor assigned", updated });
  },
};

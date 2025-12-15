import type { Request, Response } from "express";
import { moduleService } from "./module.service.ts";

export const moduleController = {
  // Module
  createModule: async (req: Request, res: Response) => {
    try {
      const module = await moduleService.createModule(req.body);
      res.status(201).json({ message: "Module created", module });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  getModulesByCourse: async (req: Request, res: Response) => {
    const modules = await moduleService.getModulesByCourse(req.params.courseId || '');
    res.json(modules);
  },

  updateModule: async (req: Request, res: Response) => {
    try {
      const module = await moduleService.updateModule(req.params.id || '', req.body);
      res.json({ message: "Module updated", module });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  deleteModule: async (req: Request, res: Response) => {
    try {
      await moduleService.deleteModule(req.params.id || '');
      res.json({ message: "Module deleted" });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  reorderModules: async (req: Request, res: Response) => {
    try {
      const result = await moduleService.reorderModules(req.params.courseId || '', req.body);
      res.json({ message: "Modules reordered", result });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  // Lesson
  createLesson: async (req: Request, res: Response) => {
    try {
      const lesson = await moduleService.createLesson(req.body);
      res.status(201).json({ message: "Lesson created", lesson });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  getLessonsByModule: async (req: Request, res: Response) => {
    const lessons = await moduleService.getLessonsByModule(req.params.moduleId || '');
    res.json(lessons);
  },

  updateLesson: async (req: Request, res: Response) => {
    try {
      const lesson = await moduleService.updateLesson(req.params.id || '', req.body);
      res.json({ message: "Lesson updated", lesson });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  deleteLesson: async (req: Request, res: Response) => {
    try {
      await moduleService.deleteLesson(req.params.id || '');
      res.json({ message: "Lesson deleted" });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },
};

import type { Request, Response } from "express";
import { studentService } from "./student.service.ts";

export const studentController = {
  async getDashboard(req: Request, res: Response) {
    try {
      if (!req.user) {
        res.status(401).json({ error: "Unauthorized" });
        return;
      }
      const userI = req.user.id;
      const dashboard = await studentService.getDashboard(userI);
      res.json(dashboard);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },
};

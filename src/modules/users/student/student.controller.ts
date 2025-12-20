import type { Request, Response } from "express";
import { studentService } from "./student.service.ts";
import { UserRole } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        role: UserRole;
      };
    }
  }
}


export const studentController = {
  async getProfile(req: Request, res: Response) {
    const userId = req.user!.id;
    const profile = await studentService.getProfile(userId);
    res.json(profile);
  },

  async updateProfile(req: Request, res: Response) {
    const userId = req.user!.id;
    const updated = await studentService.updateProfile(userId, req.body);
    res.json({ message: "Profile updated successfully", updated });
  },
};

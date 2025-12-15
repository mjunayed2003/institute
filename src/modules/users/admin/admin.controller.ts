import type { Request, Response } from "express";
import { adminService } from "./admin.service.ts";

export const adminController = {
  async getAllUsers(req: Request, res: Response) {
    const users = await adminService.getAllUsers();
    res.json(users);
  },

  async getUser(req: Request, res: Response) {
    const user = await adminService.getUser(req.params.id || '');
    res.json(user);
  },

  async updateUser(req: Request, res: Response) {
    const user = await adminService.updateUser(req.params.id || '', req.body);
    res.json({ message: "Updated successfully", user });
  },

  async deleteUser(req: Request, res: Response) {
    await adminService.deleteUser(req.params.id || '');
    res.json({ message: "Deleted successfully" });
  },
};

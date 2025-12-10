
import type { Request, Response } from "express";
import { userService } from "./user.service.js";

export const userController = {
  async register(req: Request, res: Response) {
    try {
      const result = await userService.registerUser(req.body);
      return res.status(201).json(result);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  },

  async login(req: Request, res: Response) {
    try {
      const result = await userService.loginUser(req.body);
      return res.json(result);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  },

  async getUsers(req: Request, res: Response) {
    const users = await userService.getUsers();
    return res.json(users);
  },

  async getOne(req: Request, res: Response) {
    const user = await userService.getUserById(req.params.id || '');
    res.json(user);
  },

  async update(req: Request, res: Response) {
    const user = await userService.updateUser(req.params.id || '', req.body);
    res.json({ message: "Updated successfully", user });
  },

  async remove(req: Request, res: Response) {
    await userService.deleteUser(req.params.id || '');
    res.json({ message: "User deleted successfully" });
  },
};

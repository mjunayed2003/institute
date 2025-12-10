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
};

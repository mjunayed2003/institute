import { Router } from "express";
import { studentController } from "./student.controller.ts";
import { authenticate, authorize } from "../../Middleware/user.middleware.ts";

const router = Router();

// Student Dashboard
router.get(
  "/",
  authenticate,
  authorize(["STUDENT"]),
  studentController.getDashboard
);

export default router;
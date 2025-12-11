import { Router } from "express";
import { studentController } from "./student.controller.js";
import { authenticate, authorize } from "../../Middleware/user.middleware.js";

const router = Router();

// Student Dashboard
router.get(
  "/",
  authenticate,
  authorize(["STUDENT"]),
  studentController.getDashboard
);

export default router;

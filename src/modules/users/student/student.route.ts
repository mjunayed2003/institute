import { Router } from "express";
import { studentController } from "./student.controller.ts";
import { authenticate, authorize } from "../../../Middleware/user.middleware.ts";

const router = Router();

// Protected routes for STUDENT only
router.use(authenticate, authorize(["STUDENT"]));

router.get("/", studentController.getProfile);
router.put("/", studentController.updateProfile);

export default router;

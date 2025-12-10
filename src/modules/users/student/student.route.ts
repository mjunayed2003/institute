import { Router } from "express";
import { studentController } from "./student.controller.js";
import { authenticate, authorize } from "../../../Middleware/user.middleware.js";

const router = Router();

// Protected routes for STUDENT only
router.use(authenticate, authorize(["STUDENT"]));

router.get("/", studentController.getProfile);
router.put("/", studentController.updateProfile);

export default router;

import { Router } from "express";
import { mentorController } from "./mentor.controller.ts";
import { authenticate, authorize } from "../../../Middleware/user.middleware.ts";

const router = Router();

// Protected routes for MENTOR only
router.use(authenticate, authorize(["MENTOR"]));

router.get("/", mentorController.getProfile);
router.put("/", mentorController.updateProfile);

// Courses management
router.post("/courses", mentorController.createCourse);
router.get("/courses", mentorController.getCourses);
router.put("/courses/:id", mentorController.updateCourse);
router.delete("/courses/:id", mentorController.deleteCourse);

export default router;

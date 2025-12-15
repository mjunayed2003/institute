import { Router } from "express";
import { enrollmentController } from "./enrollment.controller.ts";
import { authenticate, authorize } from "../../Middleware/user.middleware.ts";

const router = Router();

// Student enroll in a course
router.post(
  "/enroll",
  authenticate,
  authorize(["STUDENT"]),
  enrollmentController.enrollStudent
);

// Check if student is enrolled
router.get(
  "/check/:courseId",
  authenticate,
  authorize(["STUDENT"]),
  enrollmentController.checkEnrollment
);

// Get all courses of the student
router.get(
  "/my-courses",
  authenticate,
  authorize(["STUDENT"]),
  enrollmentController.getMyCourses
);

export default router;

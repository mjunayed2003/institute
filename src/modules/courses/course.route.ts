import { Router } from "express";
import { courseController } from "./course.controller.ts";
import { validate } from "../../Middleware/validation.ts";
import { authenticate, authorize } from "../../Middleware/user.middleware.ts";
import { createCourseSchema, updateCourseSchema, assignMentorSchema } from "./course.validation.ts";

const router = Router();

// Admin + Mentor can create
router.post(
  "/create",
  authenticate,
  authorize(["ADMIN", "MENTOR"]),
  validate(createCourseSchema),
  courseController.create
);

router.get("/", courseController.all);
router.get("/:id", courseController.single);

// Update
router.put(
  "/:id",
  authenticate,
  authorize(["ADMIN", "MENTOR"]),
  validate(updateCourseSchema),
  courseController.update
);

// Delete
router.delete(
  "/:id",
  authenticate,
  authorize(["ADMIN"]),
  courseController.remove
);

// Publish / Unpublish
router.patch(
  "/publish/:id",
  authenticate,
  authorize(["ADMIN"]),
  courseController.publish
);

// Assign Mentor
router.post(
  "/assign-mentor",
  authenticate,
  authorize(["ADMIN"]),
  validate(assignMentorSchema),
  courseController.assignMentor
);

export default router;

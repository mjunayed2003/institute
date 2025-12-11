import { Router } from "express";
import { moduleController } from "./module.controller.js";
import { validate } from "../../Middleware/validation.js";
import { 
  createModuleSchema, updateModuleSchema, 
  createLessonSchema, updateLessonSchema 
} from "./module.validation.js";
import { authenticate, authorize } from "../../Middleware/user.middleware.js";

const router = Router();

// Module
router.post(
  "/create-module",
  authenticate,
  authorize(["ADMIN", "MENTOR"]),
  validate(createModuleSchema),
  moduleController.createModule
);

router.get(
  "/course/:courseId",
  authenticate,
  moduleController.getModulesByCourse
);

router.put(
  "/update-module/:id",
  authenticate,
  authorize(["ADMIN", "MENTOR"]),
  validate(updateModuleSchema),
  moduleController.updateModule
);

router.delete(
  "/delete-module/:id",
  authenticate,
  authorize(["ADMIN", "MENTOR"]),
  moduleController.deleteModule
);

router.patch(
  "/reorder/:courseId",
  authenticate,
  authorize(["ADMIN", "MENTOR"]),
  moduleController.reorderModules
);

// Lesson
router.post(
  "/create-lesson",
  authenticate,
  authorize(["ADMIN", "MENTOR"]),
  validate(createLessonSchema),
  moduleController.createLesson
);

router.get(
  "/module/:moduleId",
  authenticate,
  moduleController.getLessonsByModule
);

router.put(
  "/update-lesson/:id",
  authenticate,
  authorize(["ADMIN", "MENTOR"]),
  validate(updateLessonSchema),
  moduleController.updateLesson
);

router.delete(
  "/delete-lesson/:id",
  authenticate,
  authorize(["ADMIN", "MENTOR"]),
  moduleController.deleteLesson
);

export default router;

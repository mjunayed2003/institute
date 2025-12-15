import { Router } from "express";
import { userController } from "./user.controller.ts";
import { validate } from "../../Middleware/validation.ts";
import { registerSchema, loginSchema } from "./user.validation.ts";
import AdminRouter from "./admin/admin.route.ts";
import MentorRouter from "./mentor/mentor.route.ts";
import StudentRouter from "./student/student.route.ts";

const router = Router();

// Public
router.post("/register", validate(registerSchema), userController.register);
router.post("/login", validate(loginSchema), userController.login);
router.use("/admin", AdminRouter);
router.use("/mentor", MentorRouter);
router.use("/student", StudentRouter);

export default router;

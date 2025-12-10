import { Router } from "express";
import { userController } from "./user.controller.js";
import { validate } from "../../Middleware/validation.js";
import { registerSchema, loginSchema } from "./user.validation.js";
import AdminRouter from "./admin/admin.route.js";
import MentorRouter from "./mentor/mentor.route.js";
import StudentRouter from "./student/student.route.js";

const router = Router();

// Public
router.post("/register", validate(registerSchema), userController.register);
router.post("/login", validate(loginSchema), userController.login);
router.use("/admin", AdminRouter);
router.use("/mentor", MentorRouter);
router.use("/student", StudentRouter);

export default router;

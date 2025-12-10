import { Router } from "express";
import { userController } from "./user.controller.js";
import { validate } from "../../../Middleware/validation.js";
import { loginSchema, registerSchema } from "./user.validation.js";

const router = Router();

router.post("/register", validate(registerSchema), userController.register);
router.post("/login", validate(loginSchema), userController.login);
router.get("/", userController.getUsers);
router.get("/:id", userController.getOne);
router.put("/:id", userController.update);
router.delete("/:id", userController.remove);

export default router;

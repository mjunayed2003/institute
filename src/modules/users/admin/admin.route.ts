import { Router } from "express";
import { adminController } from "./admin.controller.ts";
import { authenticate, authorize } from "../../../Middleware/user.middleware.ts";

const router = Router();

router.use(authenticate, authorize(["ADMIN"]));

router.get("/", adminController.getAllUsers);
router.get("/:id", adminController.getUser);
router.put("/:id", adminController.updateUser);
router.delete("/:id", adminController.deleteUser);

export default router;

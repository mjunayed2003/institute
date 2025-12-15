import { Router } from "express";
import { paymentController } from "./payment.controller.ts";
import { authenticate, authorize } from "../../Middleware/user.middleware.ts";
import { validate } from "../../Middleware/validation.ts";
import { initiatePaymentSchema } from "./payment.validation.ts";

const router = Router();

router.post(
  "/initiate",
  authenticate,
  authorize(["STUDENT"]),
  validate(initiatePaymentSchema),
  paymentController.initiate
);

router.post("/success", paymentController.success);
router.post("/fail", paymentController.fail);
router.post("/cancel", paymentController.fail);

export default router;

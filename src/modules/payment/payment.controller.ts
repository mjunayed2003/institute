import type { Response } from "express";
import type { AuthRequest } from "../../Middleware/user.middleware.ts";
import type { InitiatePaymentInput } from "./payment.interface.ts";
import { paymentService } from "./payment.service.ts";

export const paymentController = {
  async initiate(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const body = req.body as InitiatePaymentInput;

      const result = await paymentService.initiatePayment(
        req.user,
        body.courseId
      );

      res.json(result);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  async success(req: AuthRequest, res: Response) {
    await paymentService.paymentSuccess(
      req.body.tran_id,
      req.body.val_id
    );
    res.redirect("/payment-success");
  },

  async fail(req: AuthRequest, res: Response) {
    await paymentService.paymentFail(req.body.tran_id);
    res.redirect("/payment-failed");
  },
};

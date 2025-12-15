import type { Request, Response } from "express";
import { paymentService } from "./payment.service.ts";

export const paymentController = {
  async initiate(req: Request, res: Response) {
    try {
      const result = await paymentService.initiatePayment(
        req.user,
        req.body.courseId
      );
      res.json(result);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  async success(req: Request, res: Response) {
    await paymentService.paymentSuccess(
      req.body.tran_id,
      req.body.val_id
    );
    res.redirect("/payment-success");
  },

  async fail(req: Request, res: Response) {
    await paymentService.paymentFail(req.body.tran_id);
    res.redirect("/payment-failed");
  },
};

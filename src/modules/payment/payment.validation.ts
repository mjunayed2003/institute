import { z } from "zod";

export const initiatePaymentSchema = z.object({
  courseId: z.string(),
});

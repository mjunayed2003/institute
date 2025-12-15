import type { Express } from "express";

import userRoutes from "./modules/users/user.route.ts";
import courseRoutes from "./modules/courses/course.route.ts";
import moduleRoutes from "./modules/module/module.route.ts";
import enrollmentRoutes from "./modules/enrollment/enrollment.routes.ts";
import studentRoutes from "./modules/student-dashboard/student.routes.ts";
import paymentRoutes from "./modules/payment/payment.route.ts";

export function setupRoutes(app: Express) {
  app.use("/api/users", userRoutes);
  app.use("/api/courses", courseRoutes);
  app.use("/api/modules", moduleRoutes);
  app.use("/api/enrollments", enrollmentRoutes);
  app.use("/api/student-dashboard", studentRoutes);
  app.use("/api/payment", paymentRoutes);
}

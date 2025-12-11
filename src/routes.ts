
import type { Express } from 'express';
import userRoutes from "./modules/users/user.route.js";
import courseRoutes from "./modules/courses/course.route.js";
import moduleRoutes from "./modules/module/module.routes.js";
import enrollmentRoutes from "./modules/enrollment/enrollment.routes.js";
import studentRoutes from "./modules/student-dashboard/student.routes.js";

export function setupUserRoutes(app: Express) {
    

    app.use("/api/users", userRoutes);
    app.use("/api/courses", courseRoutes);
    app.use("/api/modules", moduleRoutes);
    app.use("/api/enrollments", enrollmentRoutes);
    app.use('/api/student-dashboard', studentRoutes);
}
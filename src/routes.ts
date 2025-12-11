
import type { Express } from 'express';
import userRoutes from "./modules/users/user.route.js";
import courseRoutes from "./modules/courses/course.route.js";
import moduleRoutes from "./modules/module/module.routes.js";


export function setupUserRoutes(app: Express) {
    

    app.use("/api/users", userRoutes);
    app.use("/api/courses", courseRoutes);
    app.use("/api/modules", moduleRoutes);
}
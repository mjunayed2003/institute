
import type { Express } from 'express';
import userRoutes from './modules/users/user.route.js'


export function setupUserRoutes(app: Express) {
    

    app.use('/api/users', userRoutes);

}
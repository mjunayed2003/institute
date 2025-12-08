// src/routes/userRoutes.ts

import express from 'express';
// Controller functions গুলো ইম্পোর্ট করা হলো
import { getAllUsers, getUserByEmail, createUser } from './user.controller.js'; 

const router = express.Router();

// Route: /users
router.route('/')
    .get(getAllUsers)    // GET /users -> সকল ইউজার
    .post(createUser);   // POST /users -> নতুন ইউজার তৈরি

// Route: /users/:email
router.route('/:email')
    .get(getUserByEmail); // GET /users/test@example.com -> নির্দিষ্ট ইউজার

export default router;
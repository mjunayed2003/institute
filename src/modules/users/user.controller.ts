// src/controllers/userController.ts

import type { Request, Response } from 'express';
// Service functions গুলো ইম্পোর্ট করা হলো
import * as userService from './user.service.js'; 

// GET: সকল ইউজার
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.findAllUsers();
    res.status(200).json({ data: users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch users.' });
  }
};

// GET: নির্দিষ্ট ইউজার (URL Parameter)
export const getUserByEmail = async (req: Request, res: Response) => {
  const { email } = req.params;
  try {
    const user = await userService.findUserByEmail(email || '');
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.status(200).json({ data: user });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user.' });
  }
};

// POST: নতুন ইউজার তৈরি
export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required.' });
  }
  try {
    const newUser = await userService.createNewUser(name, email);
    res.status(201).json({ message: 'User created.', data: newUser });
  } catch (error) {
    // P2002 হলো Prisma-এর Unique constraint violation code
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P2002') {
        return res.status(409).json({ message: 'User with this email already exists.' });
    }
    res.status(500).json({ message: 'Failed to create user.' });
  }
};
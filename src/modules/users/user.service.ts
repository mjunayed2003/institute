// src/services/userService.ts

import prisma from '../../prisma/client.js'; // Prisma Client

// 1. GET (Read): সকল ইউজারকে খুঁজে বের করা
export const findAllUsers = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
};

// 2. GET (Read): ইমেইল দ্বারা একক ইউজার খুঁজে বের করা
export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
    include: { posts: true }, // পোস্টগুলোও সংযুক্ত করা হলো
  });
};

// 3. POST (Create): নতুন ইউজার তৈরি করা
export const createNewUser = async (name: string, email: string) => {
  return await prisma.user.create({
    data: {
      name,
      email,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
};

// 4. PUT/PATCH (Update): ইউজার নাম আপডেট করা
export const updateUserName = async (email: string, newName: string) => {
  return await prisma.user.update({
    where: { email },
    data: { name: newName },
  });
};

// 5. DELETE: ইউজার মুছে ফেলা
export const deleteUserByEmail = async (email: string) => {
  return await prisma.user.delete({
    where: { email },
  });
};
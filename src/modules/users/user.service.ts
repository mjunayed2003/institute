import bcrypt from "bcrypt";
import prisma from "../../prisma/client.js";
import type { CreateUserInput , LoginInput } from "./user.interface.js";
import { generateToken } from "../../Utility/jwt.js";

export const userService = {
  // Register User
  async registerUser(data: CreateUserInput) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        passwordHash: hashedPassword,
        phoneNumber: data.phoneNumber ?? null
      },
    });

    return {
      message: "User registered successfully",
      user,
    };
  },

// Login
async loginUser(data: LoginInput) {
  const user = await prisma.user.findUnique({ where: { email: data.email } });
  if (!user) throw new Error("User not found!");

  const isMatch = await bcrypt.compare(data.password, user.passwordHash);
  if (!isMatch) throw new Error("Incorrect password!");

  // Perfect JWT generation
  const token = generateToken({
    id: user.id,
    role: user.role, // must be string or enum value
  });

  return {
    message: "Login successful",
    token,
    user,
  };
},


  // Get All Users
  async getUsers() {
    return prisma.user.findMany();
  },

  // Get Single User
  async getUserById(id: string) {
    return prisma.user.findUnique({ where: { id } });
  },

  // Update User
  async updateUser(id: string, data: any) {
    return prisma.user.update({
      where: { id },
      data,
    });
  },

  // Delete User
  async deleteUser(id: string) {
    return prisma.user.delete({ where: { id } });
  },
};

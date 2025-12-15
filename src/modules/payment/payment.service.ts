import prisma from "../../prisma/client.ts";
import { sslcommerz } from "./sslcommerz.helper.ts";

export const paymentService = {
  async initiatePayment(user: any, courseId: string) {
    // 1️⃣ Course check
    const course = await prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!course || !course.isPublished) {
      throw new Error("Course not available");
    }

    // 2️⃣ Already enrolled?
    const exists = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId: user.id,
          courseId,
        },
      },
    });

    if (exists) {
      throw new Error("Already enrolled");
    }

    // 3️⃣ Create Order
    const order = await prisma.order.create({
      data: {
        userId: user.id,
        totalAmount: course.discountPrice ?? course.price,
        paymentStatus: "PENDING",
        paymentMethod: "SSLCOMMERZ",
        items: [
          {
            itemId: course.id,
            title: course.title,
            type: "COURSE",
            price: course.discountPrice ?? course.price,
          },
        ],
      },
    });

    // 4️⃣ SSLCommerz Data
  const fullUser = await prisma.user.findUnique({
    where: { id: user.id },
  });

  if (!fullUser) throw new Error("User not found");

  console.log("Full user:", fullUser);

  // SSLCommerz data
  const paymentData = {
    total_amount: order.totalAmount,
    currency: "BDT",
    tran_id: order.id,
    success_url: `${process.env.BASE_URL}/api/payment/success`,
    fail_url: `${process.env.BASE_URL}/api/payment/fail`,
    cancel_url: `${process.env.BASE_URL}/api/payment/cancel`,
    cus_name: fullUser.name,
    cus_email: fullUser.email,
    cus_phone: fullUser.phoneNumber,
    shipping_method: "NO",
    product_name: course.title,
  };

  const response = await sslcommerz.init(paymentData);

  return {
    paymentUrl: response.GatewayPageURL,
  };
},

  async paymentSuccess(tranId: string, valId: string) {
    const order = await prisma.order.update({
      where: { id: tranId },
      data: {
        paymentStatus: "COMPLETED",
        transactionId: valId,
      },
    });

    const courseItem = order.items.find(i => i.type === "COURSE");

    await prisma.enrollment.create({
      data: {
        userId: order.userId,
        courseId: courseItem!.itemId,
        completedLessonIds: [],
        progressPercentage: 0,
      },
    });

  },

  

  async paymentFail(tranId: string) {
    await prisma.order.update({
      where: { id: tranId },
      data: { paymentStatus: "FAILED" },
    });
  },
};

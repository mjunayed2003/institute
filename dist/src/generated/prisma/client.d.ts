import * as runtime from "@prisma/client/runtime/library";
import * as $Class from "./internal/class.ts";
import * as Prisma from "./internal/prismaNamespace.ts";
export * as $Enums from './enums.ts';
export * from "./enums.ts";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Resource
 *
 */
export type Resource = Prisma.ResourceModel;
/**
 * Model OrderItem
 *
 */
export type OrderItem = Prisma.OrderItemModel;
/**
 * Model Question
 *
 */
export type Question = Prisma.QuestionModel;
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Course
 *
 */
export type Course = Prisma.CourseModel;
/**
 * Model Module
 *
 */
export type Module = Prisma.ModuleModel;
/**
 * Model Lesson
 *
 */
export type Lesson = Prisma.LessonModel;
/**
 * Model Enrollment
 *
 */
export type Enrollment = Prisma.EnrollmentModel;
/**
 * Model DigitalProduct
 *
 */
export type DigitalProduct = Prisma.DigitalProductModel;
/**
 * Model LicenseKey
 *
 */
export type LicenseKey = Prisma.LicenseKeyModel;
/**
 * Model ProductPurchase
 *
 */
export type ProductPurchase = Prisma.ProductPurchaseModel;
/**
 * Model Order
 *
 */
export type Order = Prisma.OrderModel;
/**
 * Model Coupon
 *
 */
export type Coupon = Prisma.CouponModel;
/**
 * Model Exam
 *
 */
export type Exam = Prisma.ExamModel;
/**
 * Model Certificate
 *
 */
export type Certificate = Prisma.CertificateModel;
/**
 * Model Event
 *
 */
export type Event = Prisma.EventModel;
/**
 * Model EventRegistration
 *
 */
export type EventRegistration = Prisma.EventRegistrationModel;
/**
 * Model LiveSession
 *
 */
export type LiveSession = Prisma.LiveSessionModel;
/**
 * Model Review
 *
 */
export type Review = Prisma.ReviewModel;
/**
 * Model SupportTicket
 *
 */
export type SupportTicket = Prisma.SupportTicketModel;
/**
 * Model Notification
 *
 */
export type Notification = Prisma.NotificationModel;
/**
 * Model SystemSetting
 *
 */
export type SystemSetting = Prisma.SystemSettingModel;
//# sourceMappingURL=client.d.ts.map
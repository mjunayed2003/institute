import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.ts';
export type * from './prismaNamespace.ts';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly User: "User";
    readonly Course: "Course";
    readonly Module: "Module";
    readonly Lesson: "Lesson";
    readonly Enrollment: "Enrollment";
    readonly DigitalProduct: "DigitalProduct";
    readonly LicenseKey: "LicenseKey";
    readonly ProductPurchase: "ProductPurchase";
    readonly Order: "Order";
    readonly Coupon: "Coupon";
    readonly Exam: "Exam";
    readonly Certificate: "Certificate";
    readonly Event: "Event";
    readonly EventRegistration: "EventRegistration";
    readonly LiveSession: "LiveSession";
    readonly Review: "Review";
    readonly SupportTicket: "SupportTicket";
    readonly Notification: "Notification";
    readonly SystemSetting: "SystemSetting";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly phoneNumber: "phoneNumber";
    readonly avatar: "avatar";
    readonly role: "role";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const CourseScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly slug: "slug";
    readonly description: "description";
    readonly thumbnail: "thumbnail";
    readonly price: "price";
    readonly discountPrice: "discountPrice";
    readonly category: "category";
    readonly level: "level";
    readonly language: "language";
    readonly hasCertificate: "hasCertificate";
    readonly isPublished: "isPublished";
    readonly translatedTo: "translatedTo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly mentorId: "mentorId";
    readonly tags: "tags";
};
export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum];
export declare const ModuleScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly order: "order";
    readonly courseId: "courseId";
};
export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum];
export declare const LessonScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly type: "type";
    readonly videoUrl: "videoUrl";
    readonly duration: "duration";
    readonly isFree: "isFree";
    readonly moduleId: "moduleId";
};
export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum];
export declare const EnrollmentScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly courseId: "courseId";
    readonly enrolledAt: "enrolledAt";
    readonly completedLessonIds: "completedLessonIds";
    readonly progressPercentage: "progressPercentage";
};
export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum];
export declare const DigitalProductScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly price: "price";
    readonly discountPrice: "discountPrice";
    readonly productType: "productType";
    readonly thumbnail: "thumbnail";
    readonly fileUrl: "fileUrl";
    readonly version: "version";
    readonly changelog: "changelog";
    readonly downloadLimit: "downloadLimit";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DigitalProductScalarFieldEnum = (typeof DigitalProductScalarFieldEnum)[keyof typeof DigitalProductScalarFieldEnum];
export declare const LicenseKeyScalarFieldEnum: {
    readonly id: "id";
    readonly key: "key";
    readonly productId: "productId";
    readonly userId: "userId";
    readonly isActivated: "isActivated";
    readonly activatedAt: "activatedAt";
    readonly expiresAt: "expiresAt";
};
export type LicenseKeyScalarFieldEnum = (typeof LicenseKeyScalarFieldEnum)[keyof typeof LicenseKeyScalarFieldEnum];
export declare const ProductPurchaseScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly productId: "productId";
    readonly orderId: "orderId";
    readonly downloadCount: "downloadCount";
    readonly purchasedAt: "purchasedAt";
};
export type ProductPurchaseScalarFieldEnum = (typeof ProductPurchaseScalarFieldEnum)[keyof typeof ProductPurchaseScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly totalAmount: "totalAmount";
    readonly discountAmount: "discountAmount";
    readonly couponCode: "couponCode";
    readonly paymentStatus: "paymentStatus";
    readonly paymentMethod: "paymentMethod";
    readonly transactionId: "transactionId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const CouponScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly discountPercent: "discountPercent";
    readonly discountAmount: "discountAmount";
    readonly maxUsage: "maxUsage";
    readonly usedCount: "usedCount";
    readonly expiresAt: "expiresAt";
    readonly isActive: "isActive";
};
export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum];
export declare const ExamScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly courseId: "courseId";
    readonly passMark: "passMark";
};
export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum];
export declare const CertificateScalarFieldEnum: {
    readonly id: "id";
    readonly certificateId: "certificateId";
    readonly userId: "userId";
    readonly courseId: "courseId";
    readonly issueDate: "issueDate";
    readonly pdfUrl: "pdfUrl";
    readonly isApproved: "isApproved";
};
export type CertificateScalarFieldEnum = (typeof CertificateScalarFieldEnum)[keyof typeof CertificateScalarFieldEnum];
export declare const EventScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly startTime: "startTime";
    readonly endTime: "endTime";
    readonly isOnline: "isOnline";
    readonly meetingLink: "meetingLink";
    readonly location: "location";
    readonly price: "price";
    readonly capacity: "capacity";
};
export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];
export declare const EventRegistrationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly eventId: "eventId";
    readonly attended: "attended";
    readonly registeredAt: "registeredAt";
};
export type EventRegistrationScalarFieldEnum = (typeof EventRegistrationScalarFieldEnum)[keyof typeof EventRegistrationScalarFieldEnum];
export declare const LiveSessionScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly courseId: "courseId";
    readonly platform: "platform";
    readonly joinLink: "joinLink";
    readonly startTime: "startTime";
    readonly recordLink: "recordLink";
    readonly isNotifySent: "isNotifySent";
};
export type LiveSessionScalarFieldEnum = (typeof LiveSessionScalarFieldEnum)[keyof typeof LiveSessionScalarFieldEnum];
export declare const ReviewScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly courseId: "courseId";
    readonly productId: "productId";
    readonly rating: "rating";
    readonly comment: "comment";
    readonly videoUrl: "videoUrl";
    readonly isApproved: "isApproved";
    readonly createdAt: "createdAt";
};
export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];
export declare const SupportTicketScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly subject: "subject";
    readonly message: "message";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type SupportTicketScalarFieldEnum = (typeof SupportTicketScalarFieldEnum)[keyof typeof SupportTicketScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly title: "title";
    readonly message: "message";
    readonly isRead: "isRead";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const SystemSettingScalarFieldEnum: {
    readonly id: "id";
    readonly siteName: "siteName";
    readonly logoUrl: "logoUrl";
    readonly primaryColor: "primaryColor";
    readonly smtpConfig: "smtpConfig";
    readonly seoMetadata: "seoMetadata";
};
export type SystemSettingScalarFieldEnum = (typeof SystemSettingScalarFieldEnum)[keyof typeof SystemSettingScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map
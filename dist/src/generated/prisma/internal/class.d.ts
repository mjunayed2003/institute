import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "./prismaNamespace.ts";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options?: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
       * @example
       * ```
       * const [george, bob, alice] = await prisma.$transaction([
       *   prisma.user.create({ data: { name: 'George' } }),
       *   prisma.user.create({ data: { name: 'Bob' } }),
       *   prisma.user.create({ data: { name: 'Alice' } }),
       * ])
       * ```
       *
       * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
       */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
    }): runtime.Types.Utils.JsPromise<R>;
    /**
     * Executes a raw MongoDB command and returns the result of it.
     * @example
     * ```
     * const user = await prisma.$runCommandRaw({
     *   aggregate: 'User',
     *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
     *   explain: false,
     * })
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.user`: Exposes CRUD operations for the **User** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Users
  * const users = await prisma.user.findMany()
  * ```
  */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.course`: Exposes CRUD operations for the **Course** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Courses
      * const courses = await prisma.course.findMany()
      * ```
      */
    get course(): Prisma.CourseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.module`: Exposes CRUD operations for the **Module** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Modules
      * const modules = await prisma.module.findMany()
      * ```
      */
    get module(): Prisma.ModuleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Lessons
      * const lessons = await prisma.lesson.findMany()
      * ```
      */
    get lesson(): Prisma.LessonDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Enrollments
      * const enrollments = await prisma.enrollment.findMany()
      * ```
      */
    get enrollment(): Prisma.EnrollmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.digitalProduct`: Exposes CRUD operations for the **DigitalProduct** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DigitalProducts
      * const digitalProducts = await prisma.digitalProduct.findMany()
      * ```
      */
    get digitalProduct(): Prisma.DigitalProductDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.licenseKey`: Exposes CRUD operations for the **LicenseKey** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LicenseKeys
      * const licenseKeys = await prisma.licenseKey.findMany()
      * ```
      */
    get licenseKey(): Prisma.LicenseKeyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.productPurchase`: Exposes CRUD operations for the **ProductPurchase** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProductPurchases
      * const productPurchases = await prisma.productPurchase.findMany()
      * ```
      */
    get productPurchase(): Prisma.ProductPurchaseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.order`: Exposes CRUD operations for the **Order** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Orders
      * const orders = await prisma.order.findMany()
      * ```
      */
    get order(): Prisma.OrderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.coupon`: Exposes CRUD operations for the **Coupon** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Coupons
      * const coupons = await prisma.coupon.findMany()
      * ```
      */
    get coupon(): Prisma.CouponDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.exam`: Exposes CRUD operations for the **Exam** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Exams
      * const exams = await prisma.exam.findMany()
      * ```
      */
    get exam(): Prisma.ExamDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.certificate`: Exposes CRUD operations for the **Certificate** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Certificates
      * const certificates = await prisma.certificate.findMany()
      * ```
      */
    get certificate(): Prisma.CertificateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.event`: Exposes CRUD operations for the **Event** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Events
      * const events = await prisma.event.findMany()
      * ```
      */
    get event(): Prisma.EventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.eventRegistration`: Exposes CRUD operations for the **EventRegistration** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more EventRegistrations
      * const eventRegistrations = await prisma.eventRegistration.findMany()
      * ```
      */
    get eventRegistration(): Prisma.EventRegistrationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.liveSession`: Exposes CRUD operations for the **LiveSession** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LiveSessions
      * const liveSessions = await prisma.liveSession.findMany()
      * ```
      */
    get liveSession(): Prisma.LiveSessionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.review`: Exposes CRUD operations for the **Review** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Reviews
      * const reviews = await prisma.review.findMany()
      * ```
      */
    get review(): Prisma.ReviewDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.supportTicket`: Exposes CRUD operations for the **SupportTicket** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SupportTickets
      * const supportTickets = await prisma.supportTicket.findMany()
      * ```
      */
    get supportTicket(): Prisma.SupportTicketDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Notifications
      * const notifications = await prisma.notification.findMany()
      * ```
      */
    get notification(): Prisma.NotificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.systemSetting`: Exposes CRUD operations for the **SystemSetting** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SystemSettings
      * const systemSettings = await prisma.systemSetting.findMany()
      * ```
      */
    get systemSetting(): Prisma.SystemSettingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(dirname: string): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map
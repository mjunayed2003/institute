import type { AuthUser } from "../../Middleware/user.middleware.ts";
export declare const paymentService: {
    initiatePayment(user: AuthUser, courseId: string): Promise<{
        paymentUrl: any;
    }>;
    paymentSuccess(tranId: string, valId: string): Promise<void>;
    paymentFail(tranId: string): Promise<void>;
};
//# sourceMappingURL=payment.service.d.ts.map
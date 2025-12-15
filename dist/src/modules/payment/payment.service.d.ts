export declare const paymentService: {
    initiatePayment(user: any, courseId: string): Promise<{
        paymentUrl: any;
    }>;
    paymentSuccess(tranId: string, valId: string): Promise<void>;
    paymentFail(tranId: string): Promise<void>;
};
//# sourceMappingURL=payment.service.d.ts.map
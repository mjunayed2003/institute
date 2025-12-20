export declare const UserRole: {
    readonly ADMIN: "ADMIN";
    readonly STUDENT: "STUDENT";
    readonly MENTOR: "MENTOR";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const ProductType: {
    readonly COURSE: "COURSE";
    readonly CHROME_EXTENSION: "CHROME_EXTENSION";
    readonly SOFTWARE_PLUGIN: "SOFTWARE_PLUGIN";
    readonly WORDPRESS_PLUGIN: "WORDPRESS_PLUGIN";
    readonly EBOOK: "EBOOK";
    readonly DIGITAL_FILE: "DIGITAL_FILE";
};
export type ProductType = (typeof ProductType)[keyof typeof ProductType];
export declare const PaymentMethod: {
    readonly SSLCOMMERZ: "SSLCOMMERZ";
    readonly AAMARPAY: "AAMARPAY";
    readonly BKASH: "BKASH";
    readonly BANK_TRANSFER: "BANK_TRANSFER";
    readonly STRIPE: "STRIPE";
    readonly PAYPAL: "PAYPAL";
};
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly COMPLETED: "COMPLETED";
    readonly FAILED: "FAILED";
    readonly REFUNDED: "REFUNDED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const AccessType: {
    readonly LIFETIME: "LIFETIME";
    readonly SUBSCRIPTION: "SUBSCRIPTION";
};
export type AccessType = (typeof AccessType)[keyof typeof AccessType];
export declare const MeetingPlatform: {
    readonly ZOOM: "ZOOM";
    readonly GOOGLE_MEET: "GOOGLE_MEET";
    readonly OTHER: "OTHER";
};
export type MeetingPlatform = (typeof MeetingPlatform)[keyof typeof MeetingPlatform];
//# sourceMappingURL=enums.d.ts.map
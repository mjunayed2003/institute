import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    passwordHash: string | null;
    phoneNumber: string | null;
    avatar: string | null;
    role: $Enums.UserRole | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    passwordHash: string | null;
    phoneNumber: string | null;
    avatar: string | null;
    role: $Enums.UserRole | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    passwordHash: number;
    phoneNumber: number;
    avatar: number;
    role: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    passwordHash?: true;
    phoneNumber?: true;
    avatar?: true;
    role?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    passwordHash?: true;
    phoneNumber?: true;
    avatar?: true;
    role?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    passwordHash?: true;
    phoneNumber?: true;
    avatar?: true;
    role?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber: string | null;
    avatar: string | null;
    role: $Enums.UserRole;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    phoneNumber?: Prisma.StringNullableFilter<"User"> | string | null;
    avatar?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    orders?: Prisma.OrderListRelationFilter;
    enrollments?: Prisma.EnrollmentListRelationFilter;
    reviews?: Prisma.ReviewListRelationFilter;
    certificates?: Prisma.CertificateListRelationFilter;
    tickets?: Prisma.EventRegistrationListRelationFilter;
    supportTickets?: Prisma.SupportTicketListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    purchasedProducts?: Prisma.ProductPurchaseListRelationFilter;
    coursesAsMentor?: Prisma.CourseListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
    enrollments?: Prisma.EnrollmentOrderByRelationAggregateInput;
    reviews?: Prisma.ReviewOrderByRelationAggregateInput;
    certificates?: Prisma.CertificateOrderByRelationAggregateInput;
    tickets?: Prisma.EventRegistrationOrderByRelationAggregateInput;
    supportTickets?: Prisma.SupportTicketOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    purchasedProducts?: Prisma.ProductPurchaseOrderByRelationAggregateInput;
    coursesAsMentor?: Prisma.CourseOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringFilter<"User"> | string;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    phoneNumber?: Prisma.StringNullableFilter<"User"> | string | null;
    avatar?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    orders?: Prisma.OrderListRelationFilter;
    enrollments?: Prisma.EnrollmentListRelationFilter;
    reviews?: Prisma.ReviewListRelationFilter;
    certificates?: Prisma.CertificateListRelationFilter;
    tickets?: Prisma.EventRegistrationListRelationFilter;
    supportTickets?: Prisma.SupportTicketListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    purchasedProducts?: Prisma.ProductPurchaseListRelationFilter;
    coursesAsMentor?: Prisma.CourseListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    passwordHash?: Prisma.StringWithAggregatesFilter<"User"> | string;
    phoneNumber?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    avatar?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    role?: Prisma.EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole;
    isActive?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber?: string | null;
    avatar?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutUserInput;
    tickets?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    purchasedProducts?: Prisma.ProductPurchaseCreateNestedManyWithoutUserInput;
    coursesAsMentor?: Prisma.CourseCreateNestedManyWithoutMentorInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber?: string | null;
    avatar?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutUserInput;
    tickets?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    purchasedProducts?: Prisma.ProductPurchaseUncheckedCreateNestedManyWithoutUserInput;
    coursesAsMentor?: Prisma.CourseUncheckedCreateNestedManyWithoutMentorInput;
};
export type UserUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutUserNestedInput;
    tickets?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    purchasedProducts?: Prisma.ProductPurchaseUpdateManyWithoutUserNestedInput;
    coursesAsMentor?: Prisma.CourseUpdateManyWithoutMentorNestedInput;
};
export type UserUncheckedUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutUserNestedInput;
    tickets?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    purchasedProducts?: Prisma.ProductPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    coursesAsMentor?: Prisma.CourseUncheckedUpdateManyWithoutMentorNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber?: string | null;
    avatar?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
    unset?: boolean;
};
export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutCoursesAsMentorInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCoursesAsMentorInput, Prisma.UserUncheckedCreateWithoutCoursesAsMentorInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCoursesAsMentorInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutCoursesAsMentorNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCoursesAsMentorInput, Prisma.UserUncheckedCreateWithoutCoursesAsMentorInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCoursesAsMentorInput;
    upsert?: Prisma.UserUpsertWithoutCoursesAsMentorInput;
    disconnect?: boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCoursesAsMentorInput, Prisma.UserUpdateWithoutCoursesAsMentorInput>, Prisma.UserUncheckedUpdateWithoutCoursesAsMentorInput>;
};
export type UserCreateNestedOneWithoutEnrollmentsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEnrollmentsInput, Prisma.UserUncheckedCreateWithoutEnrollmentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEnrollmentsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEnrollmentsInput, Prisma.UserUncheckedCreateWithoutEnrollmentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEnrollmentsInput;
    upsert?: Prisma.UserUpsertWithoutEnrollmentsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutEnrollmentsInput, Prisma.UserUpdateWithoutEnrollmentsInput>, Prisma.UserUncheckedUpdateWithoutEnrollmentsInput>;
};
export type UserCreateNestedOneWithoutPurchasedProductsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPurchasedProductsInput, Prisma.UserUncheckedCreateWithoutPurchasedProductsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPurchasedProductsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPurchasedProductsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPurchasedProductsInput, Prisma.UserUncheckedCreateWithoutPurchasedProductsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPurchasedProductsInput;
    upsert?: Prisma.UserUpsertWithoutPurchasedProductsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPurchasedProductsInput, Prisma.UserUpdateWithoutPurchasedProductsInput>, Prisma.UserUncheckedUpdateWithoutPurchasedProductsInput>;
};
export type UserCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.UserUpsertWithoutOrdersInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOrdersInput, Prisma.UserUpdateWithoutOrdersInput>, Prisma.UserUncheckedUpdateWithoutOrdersInput>;
};
export type UserCreateNestedOneWithoutCertificatesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCertificatesInput, Prisma.UserUncheckedCreateWithoutCertificatesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCertificatesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCertificatesInput, Prisma.UserUncheckedCreateWithoutCertificatesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCertificatesInput;
    upsert?: Prisma.UserUpsertWithoutCertificatesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCertificatesInput, Prisma.UserUpdateWithoutCertificatesInput>, Prisma.UserUncheckedUpdateWithoutCertificatesInput>;
};
export type UserCreateNestedOneWithoutTicketsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTicketsInput, Prisma.UserUncheckedCreateWithoutTicketsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTicketsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutTicketsInput, Prisma.UserUncheckedCreateWithoutTicketsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutTicketsInput;
    upsert?: Prisma.UserUpsertWithoutTicketsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutTicketsInput, Prisma.UserUpdateWithoutTicketsInput>, Prisma.UserUncheckedUpdateWithoutTicketsInput>;
};
export type UserCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReviewsInput, Prisma.UserUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReviewsInput, Prisma.UserUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.UserUpsertWithoutReviewsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReviewsInput, Prisma.UserUpdateWithoutReviewsInput>, Prisma.UserUncheckedUpdateWithoutReviewsInput>;
};
export type UserCreateNestedOneWithoutSupportTicketsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSupportTicketsInput, Prisma.UserUncheckedCreateWithoutSupportTicketsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSupportTicketsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSupportTicketsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSupportTicketsInput, Prisma.UserUncheckedCreateWithoutSupportTicketsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSupportTicketsInput;
    upsert?: Prisma.UserUpsertWithoutSupportTicketsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSupportTicketsInput, Prisma.UserUpdateWithoutSupportTicketsInput>, Prisma.UserUncheckedUpdateWithoutSupportTicketsInput>;
};
export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.UserUpsertWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput, Prisma.UserUpdateWithoutNotificationsInput>, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserCreateWithoutCoursesAsMentorInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber?: string | null;
    avatar?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutUserInput;
    tickets?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    purchasedProducts?: Prisma.ProductPurchaseCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCoursesAsMentorInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber?: string | null;
    avatar?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutUserInput;
    tickets?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    purchasedProducts?: Prisma.ProductPurchaseUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCoursesAsMentorInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCoursesAsMentorInput, Prisma.UserUncheckedCreateWithoutCoursesAsMentorInput>;
};
export type UserUpsertWithoutCoursesAsMentorInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCoursesAsMentorInput, Prisma.UserUncheckedUpdateWithoutCoursesAsMentorInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCoursesAsMentorInput, Prisma.UserUncheckedCreateWithoutCoursesAsMentorInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCoursesAsMentorInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCoursesAsMentorInput, Prisma.UserUncheckedUpdateWithoutCoursesAsMentorInput>;
};
export type UserUpdateWithoutCoursesAsMentorInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutUserNestedInput;
    tickets?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    purchasedProducts?: Prisma.ProductPurchaseUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCoursesAsMentorInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutUserNestedInput;
    tickets?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    purchasedProducts?: Prisma.ProductPurchaseUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutEnrollmentsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber?: string | null;
    avatar?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutUserInput;
    tickets?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    purchasedProducts?: Prisma.ProductPurchaseCreateNestedManyWithoutUserInput;
    coursesAsMentor?: Prisma.CourseCreateNestedManyWithoutMentorInput;
};
export type UserUncheckedCreateWithoutEnrollmentsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber?: string | null;
    avatar?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutUserInput;
    tickets?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    purchasedProducts?: Prisma.ProductPurchaseUncheckedCreateNestedManyWithoutUserInput;
    coursesAsMentor?: Prisma.CourseUncheckedCreateNestedManyWithoutMentorInput;
};
export type UserCreateOrConnectWithoutEnrollmentsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutEnrollmentsInput, Prisma.UserUncheckedCreateWithoutEnrollmentsInput>;
};
export type UserUpsertWithoutEnrollmentsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutEnrollmentsInput, Prisma.UserUncheckedUpdateWithoutEnrollmentsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutEnrollmentsInput, Prisma.UserUncheckedCreateWithoutEnrollmentsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutEnrollmentsInput, Prisma.UserUncheckedUpdateWithoutEnrollmentsInput>;
};
export type UserUpdateWithoutEnrollmentsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutUserNestedInput;
    tickets?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    purchasedProducts?: Prisma.ProductPurchaseUpdateManyWithoutUserNestedInput;
    coursesAsMentor?: Prisma.CourseUpdateManyWithoutMentorNestedInput;
};
export type UserUncheckedUpdateWithoutEnrollmentsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutUserNestedInput;
    tickets?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    purchasedProducts?: Prisma.ProductPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    coursesAsMentor?: Prisma.CourseUncheckedUpdateManyWithoutMentorNestedInput;
};
export type UserCreateWithoutPurchasedProductsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber?: string | null;
    avatar?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutUserInput;
    tickets?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    coursesAsMentor?: Prisma.CourseCreateNestedManyWithoutMentorInput;
};
export type UserUncheckedCreateWithoutPurchasedProductsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber?: string | null;
    avatar?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutUserInput;
    tickets?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    coursesAsMentor?: Prisma.CourseUncheckedCreateNestedManyWithoutMentorInput;
};
export type UserCreateOrConnectWithoutPurchasedProductsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPurchasedProductsInput, Prisma.UserUncheckedCreateWithoutPurchasedProductsInput>;
};
export type UserUpsertWithoutPurchasedProductsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPurchasedProductsInput, Prisma.UserUncheckedUpdateWithoutPurchasedProductsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPurchasedProductsInput, Prisma.UserUncheckedCreateWithoutPurchasedProductsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPurchasedProductsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPurchasedProductsInput, Prisma.UserUncheckedUpdateWithoutPurchasedProductsInput>;
};
export type UserUpdateWithoutPurchasedProductsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutUserNestedInput;
    tickets?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    coursesAsMentor?: Prisma.CourseUpdateManyWithoutMentorNestedInput;
};
export type UserUncheckedUpdateWithoutPurchasedProductsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutUserNestedInput;
    tickets?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    coursesAsMentor?: Prisma.CourseUncheckedUpdateManyWithoutMentorNestedInput;
};
export type UserCreateWithoutOrdersInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber?: string | null;
    avatar?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutUserInput;
    tickets?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    purchasedProducts?: Prisma.ProductPurchaseCreateNestedManyWithoutUserInput;
    coursesAsMentor?: Prisma.CourseCreateNestedManyWithoutMentorInput;
};
export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber?: string | null;
    avatar?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutUserInput;
    tickets?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    purchasedProducts?: Prisma.ProductPurchaseUncheckedCreateNestedManyWithoutUserInput;
    coursesAsMentor?: Prisma.CourseUncheckedCreateNestedManyWithoutMentorInput;
};
export type UserCreateOrConnectWithoutOrdersInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
};
export type UserUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOrdersInput, Prisma.UserUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOrdersInput, Prisma.UserUncheckedUpdateWithoutOrdersInput>;
};
export type UserUpdateWithoutOrdersInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutUserNestedInput;
    tickets?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    purchasedProducts?: Prisma.ProductPurchaseUpdateManyWithoutUserNestedInput;
    coursesAsMentor?: Prisma.CourseUpdateManyWithoutMentorNestedInput;
};
export type UserUncheckedUpdateWithoutOrdersInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutUserNestedInput;
    tickets?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    purchasedProducts?: Prisma.ProductPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    coursesAsMentor?: Prisma.CourseUncheckedUpdateManyWithoutMentorNestedInput;
};
export type UserCreateWithoutCertificatesInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber?: string | null;
    avatar?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    tickets?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    purchasedProducts?: Prisma.ProductPurchaseCreateNestedManyWithoutUserInput;
    coursesAsMentor?: Prisma.CourseCreateNestedManyWithoutMentorInput;
};
export type UserUncheckedCreateWithoutCertificatesInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber?: string | null;
    avatar?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    tickets?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    purchasedProducts?: Prisma.ProductPurchaseUncheckedCreateNestedManyWithoutUserInput;
    coursesAsMentor?: Prisma.CourseUncheckedCreateNestedManyWithoutMentorInput;
};
export type UserCreateOrConnectWithoutCertificatesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCertificatesInput, Prisma.UserUncheckedCreateWithoutCertificatesInput>;
};
export type UserUpsertWithoutCertificatesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCertificatesInput, Prisma.UserUncheckedUpdateWithoutCertificatesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCertificatesInput, Prisma.UserUncheckedCreateWithoutCertificatesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCertificatesInput, Prisma.UserUncheckedUpdateWithoutCertificatesInput>;
};
export type UserUpdateWithoutCertificatesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    tickets?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    purchasedProducts?: Prisma.ProductPurchaseUpdateManyWithoutUserNestedInput;
    coursesAsMentor?: Prisma.CourseUpdateManyWithoutMentorNestedInput;
};
export type UserUncheckedUpdateWithoutCertificatesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    tickets?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    purchasedProducts?: Prisma.ProductPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    coursesAsMentor?: Prisma.CourseUncheckedUpdateManyWithoutMentorNestedInput;
};
export type UserCreateWithoutTicketsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber?: string | null;
    avatar?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    purchasedProducts?: Prisma.ProductPurchaseCreateNestedManyWithoutUserInput;
    coursesAsMentor?: Prisma.CourseCreateNestedManyWithoutMentorInput;
};
export type UserUncheckedCreateWithoutTicketsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber?: string | null;
    avatar?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    purchasedProducts?: Prisma.ProductPurchaseUncheckedCreateNestedManyWithoutUserInput;
    coursesAsMentor?: Prisma.CourseUncheckedCreateNestedManyWithoutMentorInput;
};
export type UserCreateOrConnectWithoutTicketsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutTicketsInput, Prisma.UserUncheckedCreateWithoutTicketsInput>;
};
export type UserUpsertWithoutTicketsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutTicketsInput, Prisma.UserUncheckedUpdateWithoutTicketsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutTicketsInput, Prisma.UserUncheckedCreateWithoutTicketsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutTicketsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutTicketsInput, Prisma.UserUncheckedUpdateWithoutTicketsInput>;
};
export type UserUpdateWithoutTicketsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    purchasedProducts?: Prisma.ProductPurchaseUpdateManyWithoutUserNestedInput;
    coursesAsMentor?: Prisma.CourseUpdateManyWithoutMentorNestedInput;
};
export type UserUncheckedUpdateWithoutTicketsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    purchasedProducts?: Prisma.ProductPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    coursesAsMentor?: Prisma.CourseUncheckedUpdateManyWithoutMentorNestedInput;
};
export type UserCreateWithoutReviewsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber?: string | null;
    avatar?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutUserInput;
    tickets?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    purchasedProducts?: Prisma.ProductPurchaseCreateNestedManyWithoutUserInput;
    coursesAsMentor?: Prisma.CourseCreateNestedManyWithoutMentorInput;
};
export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber?: string | null;
    avatar?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutUserInput;
    tickets?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    purchasedProducts?: Prisma.ProductPurchaseUncheckedCreateNestedManyWithoutUserInput;
    coursesAsMentor?: Prisma.CourseUncheckedCreateNestedManyWithoutMentorInput;
};
export type UserCreateOrConnectWithoutReviewsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReviewsInput, Prisma.UserUncheckedCreateWithoutReviewsInput>;
};
export type UserUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReviewsInput, Prisma.UserUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReviewsInput, Prisma.UserUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReviewsInput, Prisma.UserUncheckedUpdateWithoutReviewsInput>;
};
export type UserUpdateWithoutReviewsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutUserNestedInput;
    tickets?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    purchasedProducts?: Prisma.ProductPurchaseUpdateManyWithoutUserNestedInput;
    coursesAsMentor?: Prisma.CourseUpdateManyWithoutMentorNestedInput;
};
export type UserUncheckedUpdateWithoutReviewsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutUserNestedInput;
    tickets?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    purchasedProducts?: Prisma.ProductPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    coursesAsMentor?: Prisma.CourseUncheckedUpdateManyWithoutMentorNestedInput;
};
export type UserCreateWithoutSupportTicketsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber?: string | null;
    avatar?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutUserInput;
    tickets?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    purchasedProducts?: Prisma.ProductPurchaseCreateNestedManyWithoutUserInput;
    coursesAsMentor?: Prisma.CourseCreateNestedManyWithoutMentorInput;
};
export type UserUncheckedCreateWithoutSupportTicketsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber?: string | null;
    avatar?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutUserInput;
    tickets?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    purchasedProducts?: Prisma.ProductPurchaseUncheckedCreateNestedManyWithoutUserInput;
    coursesAsMentor?: Prisma.CourseUncheckedCreateNestedManyWithoutMentorInput;
};
export type UserCreateOrConnectWithoutSupportTicketsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSupportTicketsInput, Prisma.UserUncheckedCreateWithoutSupportTicketsInput>;
};
export type UserUpsertWithoutSupportTicketsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSupportTicketsInput, Prisma.UserUncheckedUpdateWithoutSupportTicketsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSupportTicketsInput, Prisma.UserUncheckedCreateWithoutSupportTicketsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSupportTicketsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSupportTicketsInput, Prisma.UserUncheckedUpdateWithoutSupportTicketsInput>;
};
export type UserUpdateWithoutSupportTicketsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutUserNestedInput;
    tickets?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    purchasedProducts?: Prisma.ProductPurchaseUpdateManyWithoutUserNestedInput;
    coursesAsMentor?: Prisma.CourseUpdateManyWithoutMentorNestedInput;
};
export type UserUncheckedUpdateWithoutSupportTicketsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutUserNestedInput;
    tickets?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    purchasedProducts?: Prisma.ProductPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    coursesAsMentor?: Prisma.CourseUncheckedUpdateManyWithoutMentorNestedInput;
};
export type UserCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber?: string | null;
    avatar?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateCreateNestedManyWithoutUserInput;
    tickets?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketCreateNestedManyWithoutUserInput;
    purchasedProducts?: Prisma.ProductPurchaseCreateNestedManyWithoutUserInput;
    coursesAsMentor?: Prisma.CourseCreateNestedManyWithoutMentorInput;
};
export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    name: string;
    email: string;
    passwordHash: string;
    phoneNumber?: string | null;
    avatar?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
    certificates?: Prisma.CertificateUncheckedCreateNestedManyWithoutUserInput;
    tickets?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    supportTickets?: Prisma.SupportTicketUncheckedCreateNestedManyWithoutUserInput;
    purchasedProducts?: Prisma.ProductPurchaseUncheckedCreateNestedManyWithoutUserInput;
    coursesAsMentor?: Prisma.CourseUncheckedCreateNestedManyWithoutMentorInput;
};
export type UserCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
};
export type UserUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserUpdateWithoutNotificationsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUpdateManyWithoutUserNestedInput;
    tickets?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUpdateManyWithoutUserNestedInput;
    purchasedProducts?: Prisma.ProductPurchaseUpdateManyWithoutUserNestedInput;
    coursesAsMentor?: Prisma.CourseUpdateManyWithoutMentorNestedInput;
};
export type UserUncheckedUpdateWithoutNotificationsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
    certificates?: Prisma.CertificateUncheckedUpdateManyWithoutUserNestedInput;
    tickets?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    supportTickets?: Prisma.SupportTicketUncheckedUpdateManyWithoutUserNestedInput;
    purchasedProducts?: Prisma.ProductPurchaseUncheckedUpdateManyWithoutUserNestedInput;
    coursesAsMentor?: Prisma.CourseUncheckedUpdateManyWithoutMentorNestedInput;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    orders: number;
    enrollments: number;
    reviews: number;
    certificates: number;
    tickets: number;
    supportTickets: number;
    notifications: number;
    purchasedProducts: number;
    coursesAsMentor: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs;
    enrollments?: boolean | UserCountOutputTypeCountEnrollmentsArgs;
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs;
    certificates?: boolean | UserCountOutputTypeCountCertificatesArgs;
    tickets?: boolean | UserCountOutputTypeCountTicketsArgs;
    supportTickets?: boolean | UserCountOutputTypeCountSupportTicketsArgs;
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs;
    purchasedProducts?: boolean | UserCountOutputTypeCountPurchasedProductsArgs;
    coursesAsMentor?: boolean | UserCountOutputTypeCountCoursesAsMentorArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountEnrollmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnrollmentWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReviewWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountCertificatesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CertificateWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountTicketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventRegistrationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountSupportTicketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupportTicketWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountPurchasedProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductPurchaseWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountCoursesAsMentorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    phoneNumber?: boolean;
    avatar?: boolean;
    role?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    orders?: boolean | Prisma.User$ordersArgs<ExtArgs>;
    enrollments?: boolean | Prisma.User$enrollmentsArgs<ExtArgs>;
    reviews?: boolean | Prisma.User$reviewsArgs<ExtArgs>;
    certificates?: boolean | Prisma.User$certificatesArgs<ExtArgs>;
    tickets?: boolean | Prisma.User$ticketsArgs<ExtArgs>;
    supportTickets?: boolean | Prisma.User$supportTicketsArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    purchasedProducts?: boolean | Prisma.User$purchasedProductsArgs<ExtArgs>;
    coursesAsMentor?: boolean | Prisma.User$coursesAsMentorArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    phoneNumber?: boolean;
    avatar?: boolean;
    role?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "phoneNumber" | "avatar" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.User$ordersArgs<ExtArgs>;
    enrollments?: boolean | Prisma.User$enrollmentsArgs<ExtArgs>;
    reviews?: boolean | Prisma.User$reviewsArgs<ExtArgs>;
    certificates?: boolean | Prisma.User$certificatesArgs<ExtArgs>;
    tickets?: boolean | Prisma.User$ticketsArgs<ExtArgs>;
    supportTickets?: boolean | Prisma.User$supportTicketsArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    purchasedProducts?: boolean | Prisma.User$purchasedProductsArgs<ExtArgs>;
    coursesAsMentor?: boolean | Prisma.User$coursesAsMentorArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        orders: Prisma.$OrderPayload<ExtArgs>[];
        enrollments: Prisma.$EnrollmentPayload<ExtArgs>[];
        reviews: Prisma.$ReviewPayload<ExtArgs>[];
        certificates: Prisma.$CertificatePayload<ExtArgs>[];
        tickets: Prisma.$EventRegistrationPayload<ExtArgs>[];
        supportTickets: Prisma.$SupportTicketPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
        purchasedProducts: Prisma.$ProductPurchasePayload<ExtArgs>[];
        coursesAsMentor: Prisma.$CoursePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        email: string;
        passwordHash: string;
        phoneNumber: string | null;
        avatar: string | null;
        role: $Enums.UserRole;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: Prisma.UserFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: Prisma.UserAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.User$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    enrollments<T extends Prisma.User$enrollmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reviews<T extends Prisma.User$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    certificates<T extends Prisma.User$certificatesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tickets<T extends Prisma.User$ticketsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    supportTickets<T extends Prisma.User$supportTicketsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$supportTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.User$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    purchasedProducts<T extends Prisma.User$purchasedProductsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$purchasedProductsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    coursesAsMentor<T extends Prisma.User$coursesAsMentorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$coursesAsMentorArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"User", 'String'>;
    readonly phoneNumber: Prisma.FieldRef<"User", 'String'>;
    readonly avatar: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'UserRole'>;
    readonly isActive: Prisma.FieldRef<"User", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User findRaw
 */
export type UserFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: runtime.InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: runtime.InputJsonValue;
};
/**
 * User aggregateRaw
 */
export type UserAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: runtime.InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: runtime.InputJsonValue;
};
/**
 * User.orders
 */
export type User$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
/**
 * User.enrollments
 */
export type User$enrollmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
    where?: Prisma.EnrollmentWhereInput;
    orderBy?: Prisma.EnrollmentOrderByWithRelationInput | Prisma.EnrollmentOrderByWithRelationInput[];
    cursor?: Prisma.EnrollmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnrollmentScalarFieldEnum | Prisma.EnrollmentScalarFieldEnum[];
};
/**
 * User.reviews
 */
export type User$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithRelationInput | Prisma.ReviewOrderByWithRelationInput[];
    cursor?: Prisma.ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewScalarFieldEnum | Prisma.ReviewScalarFieldEnum[];
};
/**
 * User.certificates
 */
export type User$certificatesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: Prisma.CertificateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Certificate
     */
    omit?: Prisma.CertificateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CertificateInclude<ExtArgs> | null;
    where?: Prisma.CertificateWhereInput;
    orderBy?: Prisma.CertificateOrderByWithRelationInput | Prisma.CertificateOrderByWithRelationInput[];
    cursor?: Prisma.CertificateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CertificateScalarFieldEnum | Prisma.CertificateScalarFieldEnum[];
};
/**
 * User.tickets
 */
export type User$ticketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: Prisma.EventRegistrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: Prisma.EventRegistrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventRegistrationInclude<ExtArgs> | null;
    where?: Prisma.EventRegistrationWhereInput;
    orderBy?: Prisma.EventRegistrationOrderByWithRelationInput | Prisma.EventRegistrationOrderByWithRelationInput[];
    cursor?: Prisma.EventRegistrationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventRegistrationScalarFieldEnum | Prisma.EventRegistrationScalarFieldEnum[];
};
/**
 * User.supportTickets
 */
export type User$supportTicketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: Prisma.SupportTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupportTicket
     */
    omit?: Prisma.SupportTicketOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupportTicketInclude<ExtArgs> | null;
    where?: Prisma.SupportTicketWhereInput;
    orderBy?: Prisma.SupportTicketOrderByWithRelationInput | Prisma.SupportTicketOrderByWithRelationInput[];
    cursor?: Prisma.SupportTicketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupportTicketScalarFieldEnum | Prisma.SupportTicketScalarFieldEnum[];
};
/**
 * User.notifications
 */
export type User$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
/**
 * User.purchasedProducts
 */
export type User$purchasedProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductPurchase
     */
    select?: Prisma.ProductPurchaseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductPurchase
     */
    omit?: Prisma.ProductPurchaseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductPurchaseInclude<ExtArgs> | null;
    where?: Prisma.ProductPurchaseWhereInput;
    orderBy?: Prisma.ProductPurchaseOrderByWithRelationInput | Prisma.ProductPurchaseOrderByWithRelationInput[];
    cursor?: Prisma.ProductPurchaseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductPurchaseScalarFieldEnum | Prisma.ProductPurchaseScalarFieldEnum[];
};
/**
 * User.coursesAsMentor
 */
export type User$coursesAsMentorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: Prisma.CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CourseInclude<ExtArgs> | null;
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    cursor?: Prisma.CourseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourseScalarFieldEnum | Prisma.CourseScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=User.d.ts.map
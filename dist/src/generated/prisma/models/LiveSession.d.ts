import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model LiveSession
 *
 */
export type LiveSessionModel = runtime.Types.Result.DefaultSelection<Prisma.$LiveSessionPayload>;
export type AggregateLiveSession = {
    _count: LiveSessionCountAggregateOutputType | null;
    _min: LiveSessionMinAggregateOutputType | null;
    _max: LiveSessionMaxAggregateOutputType | null;
};
export type LiveSessionMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    courseId: string | null;
    platform: $Enums.MeetingPlatform | null;
    joinLink: string | null;
    startTime: Date | null;
    recordLink: string | null;
    isNotifySent: boolean | null;
};
export type LiveSessionMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    courseId: string | null;
    platform: $Enums.MeetingPlatform | null;
    joinLink: string | null;
    startTime: Date | null;
    recordLink: string | null;
    isNotifySent: boolean | null;
};
export type LiveSessionCountAggregateOutputType = {
    id: number;
    title: number;
    courseId: number;
    platform: number;
    joinLink: number;
    startTime: number;
    recordLink: number;
    isNotifySent: number;
    _all: number;
};
export type LiveSessionMinAggregateInputType = {
    id?: true;
    title?: true;
    courseId?: true;
    platform?: true;
    joinLink?: true;
    startTime?: true;
    recordLink?: true;
    isNotifySent?: true;
};
export type LiveSessionMaxAggregateInputType = {
    id?: true;
    title?: true;
    courseId?: true;
    platform?: true;
    joinLink?: true;
    startTime?: true;
    recordLink?: true;
    isNotifySent?: true;
};
export type LiveSessionCountAggregateInputType = {
    id?: true;
    title?: true;
    courseId?: true;
    platform?: true;
    joinLink?: true;
    startTime?: true;
    recordLink?: true;
    isNotifySent?: true;
    _all?: true;
};
export type LiveSessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LiveSession to aggregate.
     */
    where?: Prisma.LiveSessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LiveSessions to fetch.
     */
    orderBy?: Prisma.LiveSessionOrderByWithRelationInput | Prisma.LiveSessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LiveSessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LiveSessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LiveSessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LiveSessions
    **/
    _count?: true | LiveSessionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LiveSessionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LiveSessionMaxAggregateInputType;
};
export type GetLiveSessionAggregateType<T extends LiveSessionAggregateArgs> = {
    [P in keyof T & keyof AggregateLiveSession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLiveSession[P]> : Prisma.GetScalarType<T[P], AggregateLiveSession[P]>;
};
export type LiveSessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LiveSessionWhereInput;
    orderBy?: Prisma.LiveSessionOrderByWithAggregationInput | Prisma.LiveSessionOrderByWithAggregationInput[];
    by: Prisma.LiveSessionScalarFieldEnum[] | Prisma.LiveSessionScalarFieldEnum;
    having?: Prisma.LiveSessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LiveSessionCountAggregateInputType | true;
    _min?: LiveSessionMinAggregateInputType;
    _max?: LiveSessionMaxAggregateInputType;
};
export type LiveSessionGroupByOutputType = {
    id: string;
    title: string;
    courseId: string | null;
    platform: $Enums.MeetingPlatform;
    joinLink: string;
    startTime: Date;
    recordLink: string | null;
    isNotifySent: boolean;
    _count: LiveSessionCountAggregateOutputType | null;
    _min: LiveSessionMinAggregateOutputType | null;
    _max: LiveSessionMaxAggregateOutputType | null;
};
type GetLiveSessionGroupByPayload<T extends LiveSessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LiveSessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LiveSessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LiveSessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LiveSessionGroupByOutputType[P]>;
}>>;
export type LiveSessionWhereInput = {
    AND?: Prisma.LiveSessionWhereInput | Prisma.LiveSessionWhereInput[];
    OR?: Prisma.LiveSessionWhereInput[];
    NOT?: Prisma.LiveSessionWhereInput | Prisma.LiveSessionWhereInput[];
    id?: Prisma.StringFilter<"LiveSession"> | string;
    title?: Prisma.StringFilter<"LiveSession"> | string;
    courseId?: Prisma.StringNullableFilter<"LiveSession"> | string | null;
    platform?: Prisma.EnumMeetingPlatformFilter<"LiveSession"> | $Enums.MeetingPlatform;
    joinLink?: Prisma.StringFilter<"LiveSession"> | string;
    startTime?: Prisma.DateTimeFilter<"LiveSession"> | Date | string;
    recordLink?: Prisma.StringNullableFilter<"LiveSession"> | string | null;
    isNotifySent?: Prisma.BoolFilter<"LiveSession"> | boolean;
    course?: Prisma.XOR<Prisma.CourseNullableScalarRelationFilter, Prisma.CourseWhereInput> | null;
};
export type LiveSessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    joinLink?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    recordLink?: Prisma.SortOrder;
    isNotifySent?: Prisma.SortOrder;
    course?: Prisma.CourseOrderByWithRelationInput;
};
export type LiveSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LiveSessionWhereInput | Prisma.LiveSessionWhereInput[];
    OR?: Prisma.LiveSessionWhereInput[];
    NOT?: Prisma.LiveSessionWhereInput | Prisma.LiveSessionWhereInput[];
    title?: Prisma.StringFilter<"LiveSession"> | string;
    courseId?: Prisma.StringNullableFilter<"LiveSession"> | string | null;
    platform?: Prisma.EnumMeetingPlatformFilter<"LiveSession"> | $Enums.MeetingPlatform;
    joinLink?: Prisma.StringFilter<"LiveSession"> | string;
    startTime?: Prisma.DateTimeFilter<"LiveSession"> | Date | string;
    recordLink?: Prisma.StringNullableFilter<"LiveSession"> | string | null;
    isNotifySent?: Prisma.BoolFilter<"LiveSession"> | boolean;
    course?: Prisma.XOR<Prisma.CourseNullableScalarRelationFilter, Prisma.CourseWhereInput> | null;
}, "id">;
export type LiveSessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    joinLink?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    recordLink?: Prisma.SortOrder;
    isNotifySent?: Prisma.SortOrder;
    _count?: Prisma.LiveSessionCountOrderByAggregateInput;
    _max?: Prisma.LiveSessionMaxOrderByAggregateInput;
    _min?: Prisma.LiveSessionMinOrderByAggregateInput;
};
export type LiveSessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.LiveSessionScalarWhereWithAggregatesInput | Prisma.LiveSessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.LiveSessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LiveSessionScalarWhereWithAggregatesInput | Prisma.LiveSessionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LiveSession"> | string;
    title?: Prisma.StringWithAggregatesFilter<"LiveSession"> | string;
    courseId?: Prisma.StringNullableWithAggregatesFilter<"LiveSession"> | string | null;
    platform?: Prisma.EnumMeetingPlatformWithAggregatesFilter<"LiveSession"> | $Enums.MeetingPlatform;
    joinLink?: Prisma.StringWithAggregatesFilter<"LiveSession"> | string;
    startTime?: Prisma.DateTimeWithAggregatesFilter<"LiveSession"> | Date | string;
    recordLink?: Prisma.StringNullableWithAggregatesFilter<"LiveSession"> | string | null;
    isNotifySent?: Prisma.BoolWithAggregatesFilter<"LiveSession"> | boolean;
};
export type LiveSessionCreateInput = {
    id?: string;
    title: string;
    platform: $Enums.MeetingPlatform;
    joinLink: string;
    startTime: Date | string;
    recordLink?: string | null;
    isNotifySent?: boolean;
    course?: Prisma.CourseCreateNestedOneWithoutLiveSessionsInput;
};
export type LiveSessionUncheckedCreateInput = {
    id?: string;
    title: string;
    courseId?: string | null;
    platform: $Enums.MeetingPlatform;
    joinLink: string;
    startTime: Date | string;
    recordLink?: string | null;
    isNotifySent?: boolean;
};
export type LiveSessionUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumMeetingPlatformFieldUpdateOperationsInput | $Enums.MeetingPlatform;
    joinLink?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recordLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isNotifySent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    course?: Prisma.CourseUpdateOneWithoutLiveSessionsNestedInput;
};
export type LiveSessionUncheckedUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    courseId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    platform?: Prisma.EnumMeetingPlatformFieldUpdateOperationsInput | $Enums.MeetingPlatform;
    joinLink?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recordLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isNotifySent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type LiveSessionCreateManyInput = {
    id?: string;
    title: string;
    courseId?: string | null;
    platform: $Enums.MeetingPlatform;
    joinLink: string;
    startTime: Date | string;
    recordLink?: string | null;
    isNotifySent?: boolean;
};
export type LiveSessionUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumMeetingPlatformFieldUpdateOperationsInput | $Enums.MeetingPlatform;
    joinLink?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recordLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isNotifySent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type LiveSessionUncheckedUpdateManyInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    courseId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    platform?: Prisma.EnumMeetingPlatformFieldUpdateOperationsInput | $Enums.MeetingPlatform;
    joinLink?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recordLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isNotifySent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type LiveSessionListRelationFilter = {
    every?: Prisma.LiveSessionWhereInput;
    some?: Prisma.LiveSessionWhereInput;
    none?: Prisma.LiveSessionWhereInput;
};
export type LiveSessionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LiveSessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    joinLink?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    recordLink?: Prisma.SortOrder;
    isNotifySent?: Prisma.SortOrder;
};
export type LiveSessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    joinLink?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    recordLink?: Prisma.SortOrder;
    isNotifySent?: Prisma.SortOrder;
};
export type LiveSessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    platform?: Prisma.SortOrder;
    joinLink?: Prisma.SortOrder;
    startTime?: Prisma.SortOrder;
    recordLink?: Prisma.SortOrder;
    isNotifySent?: Prisma.SortOrder;
};
export type LiveSessionCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.LiveSessionCreateWithoutCourseInput, Prisma.LiveSessionUncheckedCreateWithoutCourseInput> | Prisma.LiveSessionCreateWithoutCourseInput[] | Prisma.LiveSessionUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.LiveSessionCreateOrConnectWithoutCourseInput | Prisma.LiveSessionCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.LiveSessionCreateManyCourseInputEnvelope;
    connect?: Prisma.LiveSessionWhereUniqueInput | Prisma.LiveSessionWhereUniqueInput[];
};
export type LiveSessionUncheckedCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.LiveSessionCreateWithoutCourseInput, Prisma.LiveSessionUncheckedCreateWithoutCourseInput> | Prisma.LiveSessionCreateWithoutCourseInput[] | Prisma.LiveSessionUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.LiveSessionCreateOrConnectWithoutCourseInput | Prisma.LiveSessionCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.LiveSessionCreateManyCourseInputEnvelope;
    connect?: Prisma.LiveSessionWhereUniqueInput | Prisma.LiveSessionWhereUniqueInput[];
};
export type LiveSessionUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.LiveSessionCreateWithoutCourseInput, Prisma.LiveSessionUncheckedCreateWithoutCourseInput> | Prisma.LiveSessionCreateWithoutCourseInput[] | Prisma.LiveSessionUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.LiveSessionCreateOrConnectWithoutCourseInput | Prisma.LiveSessionCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.LiveSessionUpsertWithWhereUniqueWithoutCourseInput | Prisma.LiveSessionUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.LiveSessionCreateManyCourseInputEnvelope;
    set?: Prisma.LiveSessionWhereUniqueInput | Prisma.LiveSessionWhereUniqueInput[];
    disconnect?: Prisma.LiveSessionWhereUniqueInput | Prisma.LiveSessionWhereUniqueInput[];
    delete?: Prisma.LiveSessionWhereUniqueInput | Prisma.LiveSessionWhereUniqueInput[];
    connect?: Prisma.LiveSessionWhereUniqueInput | Prisma.LiveSessionWhereUniqueInput[];
    update?: Prisma.LiveSessionUpdateWithWhereUniqueWithoutCourseInput | Prisma.LiveSessionUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.LiveSessionUpdateManyWithWhereWithoutCourseInput | Prisma.LiveSessionUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.LiveSessionScalarWhereInput | Prisma.LiveSessionScalarWhereInput[];
};
export type LiveSessionUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.LiveSessionCreateWithoutCourseInput, Prisma.LiveSessionUncheckedCreateWithoutCourseInput> | Prisma.LiveSessionCreateWithoutCourseInput[] | Prisma.LiveSessionUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.LiveSessionCreateOrConnectWithoutCourseInput | Prisma.LiveSessionCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.LiveSessionUpsertWithWhereUniqueWithoutCourseInput | Prisma.LiveSessionUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.LiveSessionCreateManyCourseInputEnvelope;
    set?: Prisma.LiveSessionWhereUniqueInput | Prisma.LiveSessionWhereUniqueInput[];
    disconnect?: Prisma.LiveSessionWhereUniqueInput | Prisma.LiveSessionWhereUniqueInput[];
    delete?: Prisma.LiveSessionWhereUniqueInput | Prisma.LiveSessionWhereUniqueInput[];
    connect?: Prisma.LiveSessionWhereUniqueInput | Prisma.LiveSessionWhereUniqueInput[];
    update?: Prisma.LiveSessionUpdateWithWhereUniqueWithoutCourseInput | Prisma.LiveSessionUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.LiveSessionUpdateManyWithWhereWithoutCourseInput | Prisma.LiveSessionUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.LiveSessionScalarWhereInput | Prisma.LiveSessionScalarWhereInput[];
};
export type EnumMeetingPlatformFieldUpdateOperationsInput = {
    set?: $Enums.MeetingPlatform;
};
export type LiveSessionCreateWithoutCourseInput = {
    id?: string;
    title: string;
    platform: $Enums.MeetingPlatform;
    joinLink: string;
    startTime: Date | string;
    recordLink?: string | null;
    isNotifySent?: boolean;
};
export type LiveSessionUncheckedCreateWithoutCourseInput = {
    id?: string;
    title: string;
    platform: $Enums.MeetingPlatform;
    joinLink: string;
    startTime: Date | string;
    recordLink?: string | null;
    isNotifySent?: boolean;
};
export type LiveSessionCreateOrConnectWithoutCourseInput = {
    where: Prisma.LiveSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.LiveSessionCreateWithoutCourseInput, Prisma.LiveSessionUncheckedCreateWithoutCourseInput>;
};
export type LiveSessionCreateManyCourseInputEnvelope = {
    data: Prisma.LiveSessionCreateManyCourseInput | Prisma.LiveSessionCreateManyCourseInput[];
};
export type LiveSessionUpsertWithWhereUniqueWithoutCourseInput = {
    where: Prisma.LiveSessionWhereUniqueInput;
    update: Prisma.XOR<Prisma.LiveSessionUpdateWithoutCourseInput, Prisma.LiveSessionUncheckedUpdateWithoutCourseInput>;
    create: Prisma.XOR<Prisma.LiveSessionCreateWithoutCourseInput, Prisma.LiveSessionUncheckedCreateWithoutCourseInput>;
};
export type LiveSessionUpdateWithWhereUniqueWithoutCourseInput = {
    where: Prisma.LiveSessionWhereUniqueInput;
    data: Prisma.XOR<Prisma.LiveSessionUpdateWithoutCourseInput, Prisma.LiveSessionUncheckedUpdateWithoutCourseInput>;
};
export type LiveSessionUpdateManyWithWhereWithoutCourseInput = {
    where: Prisma.LiveSessionScalarWhereInput;
    data: Prisma.XOR<Prisma.LiveSessionUpdateManyMutationInput, Prisma.LiveSessionUncheckedUpdateManyWithoutCourseInput>;
};
export type LiveSessionScalarWhereInput = {
    AND?: Prisma.LiveSessionScalarWhereInput | Prisma.LiveSessionScalarWhereInput[];
    OR?: Prisma.LiveSessionScalarWhereInput[];
    NOT?: Prisma.LiveSessionScalarWhereInput | Prisma.LiveSessionScalarWhereInput[];
    id?: Prisma.StringFilter<"LiveSession"> | string;
    title?: Prisma.StringFilter<"LiveSession"> | string;
    courseId?: Prisma.StringNullableFilter<"LiveSession"> | string | null;
    platform?: Prisma.EnumMeetingPlatformFilter<"LiveSession"> | $Enums.MeetingPlatform;
    joinLink?: Prisma.StringFilter<"LiveSession"> | string;
    startTime?: Prisma.DateTimeFilter<"LiveSession"> | Date | string;
    recordLink?: Prisma.StringNullableFilter<"LiveSession"> | string | null;
    isNotifySent?: Prisma.BoolFilter<"LiveSession"> | boolean;
};
export type LiveSessionCreateManyCourseInput = {
    id?: string;
    title: string;
    platform: $Enums.MeetingPlatform;
    joinLink: string;
    startTime: Date | string;
    recordLink?: string | null;
    isNotifySent?: boolean;
};
export type LiveSessionUpdateWithoutCourseInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumMeetingPlatformFieldUpdateOperationsInput | $Enums.MeetingPlatform;
    joinLink?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recordLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isNotifySent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type LiveSessionUncheckedUpdateWithoutCourseInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumMeetingPlatformFieldUpdateOperationsInput | $Enums.MeetingPlatform;
    joinLink?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recordLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isNotifySent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type LiveSessionUncheckedUpdateManyWithoutCourseInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    platform?: Prisma.EnumMeetingPlatformFieldUpdateOperationsInput | $Enums.MeetingPlatform;
    joinLink?: Prisma.StringFieldUpdateOperationsInput | string;
    startTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recordLink?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isNotifySent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type LiveSessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    courseId?: boolean;
    platform?: boolean;
    joinLink?: boolean;
    startTime?: boolean;
    recordLink?: boolean;
    isNotifySent?: boolean;
    course?: boolean | Prisma.LiveSession$courseArgs<ExtArgs>;
}, ExtArgs["result"]["liveSession"]>;
export type LiveSessionSelectScalar = {
    id?: boolean;
    title?: boolean;
    courseId?: boolean;
    platform?: boolean;
    joinLink?: boolean;
    startTime?: boolean;
    recordLink?: boolean;
    isNotifySent?: boolean;
};
export type LiveSessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "courseId" | "platform" | "joinLink" | "startTime" | "recordLink" | "isNotifySent", ExtArgs["result"]["liveSession"]>;
export type LiveSessionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.LiveSession$courseArgs<ExtArgs>;
};
export type $LiveSessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LiveSession";
    objects: {
        course: Prisma.$CoursePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        courseId: string | null;
        platform: $Enums.MeetingPlatform;
        joinLink: string;
        startTime: Date;
        recordLink: string | null;
        isNotifySent: boolean;
    }, ExtArgs["result"]["liveSession"]>;
    composites: {};
};
export type LiveSessionGetPayload<S extends boolean | null | undefined | LiveSessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LiveSessionPayload, S>;
export type LiveSessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LiveSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LiveSessionCountAggregateInputType | true;
};
export interface LiveSessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LiveSession'];
        meta: {
            name: 'LiveSession';
        };
    };
    /**
     * Find zero or one LiveSession that matches the filter.
     * @param {LiveSessionFindUniqueArgs} args - Arguments to find a LiveSession
     * @example
     * // Get one LiveSession
     * const liveSession = await prisma.liveSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LiveSessionFindUniqueArgs>(args: Prisma.SelectSubset<T, LiveSessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LiveSessionClient<runtime.Types.Result.GetResult<Prisma.$LiveSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LiveSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LiveSessionFindUniqueOrThrowArgs} args - Arguments to find a LiveSession
     * @example
     * // Get one LiveSession
     * const liveSession = await prisma.liveSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LiveSessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LiveSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LiveSessionClient<runtime.Types.Result.GetResult<Prisma.$LiveSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LiveSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveSessionFindFirstArgs} args - Arguments to find a LiveSession
     * @example
     * // Get one LiveSession
     * const liveSession = await prisma.liveSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LiveSessionFindFirstArgs>(args?: Prisma.SelectSubset<T, LiveSessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__LiveSessionClient<runtime.Types.Result.GetResult<Prisma.$LiveSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LiveSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveSessionFindFirstOrThrowArgs} args - Arguments to find a LiveSession
     * @example
     * // Get one LiveSession
     * const liveSession = await prisma.liveSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LiveSessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LiveSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LiveSessionClient<runtime.Types.Result.GetResult<Prisma.$LiveSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LiveSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LiveSessions
     * const liveSessions = await prisma.liveSession.findMany()
     *
     * // Get first 10 LiveSessions
     * const liveSessions = await prisma.liveSession.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const liveSessionWithIdOnly = await prisma.liveSession.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LiveSessionFindManyArgs>(args?: Prisma.SelectSubset<T, LiveSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LiveSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LiveSession.
     * @param {LiveSessionCreateArgs} args - Arguments to create a LiveSession.
     * @example
     * // Create one LiveSession
     * const LiveSession = await prisma.liveSession.create({
     *   data: {
     *     // ... data to create a LiveSession
     *   }
     * })
     *
     */
    create<T extends LiveSessionCreateArgs>(args: Prisma.SelectSubset<T, LiveSessionCreateArgs<ExtArgs>>): Prisma.Prisma__LiveSessionClient<runtime.Types.Result.GetResult<Prisma.$LiveSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LiveSessions.
     * @param {LiveSessionCreateManyArgs} args - Arguments to create many LiveSessions.
     * @example
     * // Create many LiveSessions
     * const liveSession = await prisma.liveSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LiveSessionCreateManyArgs>(args?: Prisma.SelectSubset<T, LiveSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a LiveSession.
     * @param {LiveSessionDeleteArgs} args - Arguments to delete one LiveSession.
     * @example
     * // Delete one LiveSession
     * const LiveSession = await prisma.liveSession.delete({
     *   where: {
     *     // ... filter to delete one LiveSession
     *   }
     * })
     *
     */
    delete<T extends LiveSessionDeleteArgs>(args: Prisma.SelectSubset<T, LiveSessionDeleteArgs<ExtArgs>>): Prisma.Prisma__LiveSessionClient<runtime.Types.Result.GetResult<Prisma.$LiveSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LiveSession.
     * @param {LiveSessionUpdateArgs} args - Arguments to update one LiveSession.
     * @example
     * // Update one LiveSession
     * const liveSession = await prisma.liveSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LiveSessionUpdateArgs>(args: Prisma.SelectSubset<T, LiveSessionUpdateArgs<ExtArgs>>): Prisma.Prisma__LiveSessionClient<runtime.Types.Result.GetResult<Prisma.$LiveSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LiveSessions.
     * @param {LiveSessionDeleteManyArgs} args - Arguments to filter LiveSessions to delete.
     * @example
     * // Delete a few LiveSessions
     * const { count } = await prisma.liveSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LiveSessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, LiveSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LiveSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LiveSessions
     * const liveSession = await prisma.liveSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LiveSessionUpdateManyArgs>(args: Prisma.SelectSubset<T, LiveSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one LiveSession.
     * @param {LiveSessionUpsertArgs} args - Arguments to update or create a LiveSession.
     * @example
     * // Update or create a LiveSession
     * const liveSession = await prisma.liveSession.upsert({
     *   create: {
     *     // ... data to create a LiveSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LiveSession we want to update
     *   }
     * })
     */
    upsert<T extends LiveSessionUpsertArgs>(args: Prisma.SelectSubset<T, LiveSessionUpsertArgs<ExtArgs>>): Prisma.Prisma__LiveSessionClient<runtime.Types.Result.GetResult<Prisma.$LiveSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LiveSessions that matches the filter.
     * @param {LiveSessionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const liveSession = await prisma.liveSession.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: Prisma.LiveSessionFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Perform aggregation operations on a LiveSession.
     * @param {LiveSessionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const liveSession = await prisma.liveSession.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: Prisma.LiveSessionAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Count the number of LiveSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveSessionCountArgs} args - Arguments to filter LiveSessions to count.
     * @example
     * // Count the number of LiveSessions
     * const count = await prisma.liveSession.count({
     *   where: {
     *     // ... the filter for the LiveSessions we want to count
     *   }
     * })
    **/
    count<T extends LiveSessionCountArgs>(args?: Prisma.Subset<T, LiveSessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LiveSessionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LiveSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LiveSessionAggregateArgs>(args: Prisma.Subset<T, LiveSessionAggregateArgs>): Prisma.PrismaPromise<GetLiveSessionAggregateType<T>>;
    /**
     * Group by LiveSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiveSessionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LiveSessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LiveSessionGroupByArgs['orderBy'];
    } : {
        orderBy?: LiveSessionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LiveSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiveSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LiveSession model
     */
    readonly fields: LiveSessionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LiveSession.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LiveSessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    course<T extends Prisma.LiveSession$courseArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LiveSession$courseArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the LiveSession model
 */
export interface LiveSessionFieldRefs {
    readonly id: Prisma.FieldRef<"LiveSession", 'String'>;
    readonly title: Prisma.FieldRef<"LiveSession", 'String'>;
    readonly courseId: Prisma.FieldRef<"LiveSession", 'String'>;
    readonly platform: Prisma.FieldRef<"LiveSession", 'MeetingPlatform'>;
    readonly joinLink: Prisma.FieldRef<"LiveSession", 'String'>;
    readonly startTime: Prisma.FieldRef<"LiveSession", 'DateTime'>;
    readonly recordLink: Prisma.FieldRef<"LiveSession", 'String'>;
    readonly isNotifySent: Prisma.FieldRef<"LiveSession", 'Boolean'>;
}
/**
 * LiveSession findUnique
 */
export type LiveSessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: Prisma.LiveSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: Prisma.LiveSessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LiveSessionInclude<ExtArgs> | null;
    /**
     * Filter, which LiveSession to fetch.
     */
    where: Prisma.LiveSessionWhereUniqueInput;
};
/**
 * LiveSession findUniqueOrThrow
 */
export type LiveSessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: Prisma.LiveSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: Prisma.LiveSessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LiveSessionInclude<ExtArgs> | null;
    /**
     * Filter, which LiveSession to fetch.
     */
    where: Prisma.LiveSessionWhereUniqueInput;
};
/**
 * LiveSession findFirst
 */
export type LiveSessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: Prisma.LiveSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: Prisma.LiveSessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LiveSessionInclude<ExtArgs> | null;
    /**
     * Filter, which LiveSession to fetch.
     */
    where?: Prisma.LiveSessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LiveSessions to fetch.
     */
    orderBy?: Prisma.LiveSessionOrderByWithRelationInput | Prisma.LiveSessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LiveSessions.
     */
    cursor?: Prisma.LiveSessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LiveSessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LiveSessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LiveSessions.
     */
    distinct?: Prisma.LiveSessionScalarFieldEnum | Prisma.LiveSessionScalarFieldEnum[];
};
/**
 * LiveSession findFirstOrThrow
 */
export type LiveSessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: Prisma.LiveSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: Prisma.LiveSessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LiveSessionInclude<ExtArgs> | null;
    /**
     * Filter, which LiveSession to fetch.
     */
    where?: Prisma.LiveSessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LiveSessions to fetch.
     */
    orderBy?: Prisma.LiveSessionOrderByWithRelationInput | Prisma.LiveSessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LiveSessions.
     */
    cursor?: Prisma.LiveSessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LiveSessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LiveSessions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LiveSessions.
     */
    distinct?: Prisma.LiveSessionScalarFieldEnum | Prisma.LiveSessionScalarFieldEnum[];
};
/**
 * LiveSession findMany
 */
export type LiveSessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: Prisma.LiveSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: Prisma.LiveSessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LiveSessionInclude<ExtArgs> | null;
    /**
     * Filter, which LiveSessions to fetch.
     */
    where?: Prisma.LiveSessionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LiveSessions to fetch.
     */
    orderBy?: Prisma.LiveSessionOrderByWithRelationInput | Prisma.LiveSessionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LiveSessions.
     */
    cursor?: Prisma.LiveSessionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LiveSessions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LiveSessions.
     */
    skip?: number;
    distinct?: Prisma.LiveSessionScalarFieldEnum | Prisma.LiveSessionScalarFieldEnum[];
};
/**
 * LiveSession create
 */
export type LiveSessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: Prisma.LiveSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: Prisma.LiveSessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LiveSessionInclude<ExtArgs> | null;
    /**
     * The data needed to create a LiveSession.
     */
    data: Prisma.XOR<Prisma.LiveSessionCreateInput, Prisma.LiveSessionUncheckedCreateInput>;
};
/**
 * LiveSession createMany
 */
export type LiveSessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LiveSessions.
     */
    data: Prisma.LiveSessionCreateManyInput | Prisma.LiveSessionCreateManyInput[];
};
/**
 * LiveSession update
 */
export type LiveSessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: Prisma.LiveSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: Prisma.LiveSessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LiveSessionInclude<ExtArgs> | null;
    /**
     * The data needed to update a LiveSession.
     */
    data: Prisma.XOR<Prisma.LiveSessionUpdateInput, Prisma.LiveSessionUncheckedUpdateInput>;
    /**
     * Choose, which LiveSession to update.
     */
    where: Prisma.LiveSessionWhereUniqueInput;
};
/**
 * LiveSession updateMany
 */
export type LiveSessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LiveSessions.
     */
    data: Prisma.XOR<Prisma.LiveSessionUpdateManyMutationInput, Prisma.LiveSessionUncheckedUpdateManyInput>;
    /**
     * Filter which LiveSessions to update
     */
    where?: Prisma.LiveSessionWhereInput;
    /**
     * Limit how many LiveSessions to update.
     */
    limit?: number;
};
/**
 * LiveSession upsert
 */
export type LiveSessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: Prisma.LiveSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: Prisma.LiveSessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LiveSessionInclude<ExtArgs> | null;
    /**
     * The filter to search for the LiveSession to update in case it exists.
     */
    where: Prisma.LiveSessionWhereUniqueInput;
    /**
     * In case the LiveSession found by the `where` argument doesn't exist, create a new LiveSession with this data.
     */
    create: Prisma.XOR<Prisma.LiveSessionCreateInput, Prisma.LiveSessionUncheckedCreateInput>;
    /**
     * In case the LiveSession was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LiveSessionUpdateInput, Prisma.LiveSessionUncheckedUpdateInput>;
};
/**
 * LiveSession delete
 */
export type LiveSessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: Prisma.LiveSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: Prisma.LiveSessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LiveSessionInclude<ExtArgs> | null;
    /**
     * Filter which LiveSession to delete.
     */
    where: Prisma.LiveSessionWhereUniqueInput;
};
/**
 * LiveSession deleteMany
 */
export type LiveSessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LiveSessions to delete
     */
    where?: Prisma.LiveSessionWhereInput;
    /**
     * Limit how many LiveSessions to delete.
     */
    limit?: number;
};
/**
 * LiveSession findRaw
 */
export type LiveSessionFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * LiveSession aggregateRaw
 */
export type LiveSessionAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * LiveSession.course
 */
export type LiveSession$courseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * LiveSession without action
 */
export type LiveSessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LiveSession
     */
    select?: Prisma.LiveSessionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LiveSession
     */
    omit?: Prisma.LiveSessionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LiveSessionInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=LiveSession.d.ts.map
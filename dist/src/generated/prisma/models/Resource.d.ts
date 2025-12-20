import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model Resource
 *
 */
export type ResourceModel = runtime.Types.Result.DefaultSelection<Prisma.$ResourcePayload>;
export type ResourceCompositeListFilter = {
    equals?: Prisma.ResourceObjectEqualityInput[];
    every?: Prisma.ResourceWhereInput;
    some?: Prisma.ResourceWhereInput;
    none?: Prisma.ResourceWhereInput;
    isEmpty?: boolean;
    isSet?: boolean;
};
export type ResourceOrderByCompositeAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ResourceListCreateEnvelopeInput = {
    set?: Prisma.ResourceCreateInput | Prisma.ResourceCreateInput[];
};
export type ResourceListUpdateEnvelopeInput = {
    set?: Prisma.ResourceCreateInput | Prisma.ResourceCreateInput[];
    push?: Prisma.ResourceCreateInput | Prisma.ResourceCreateInput[];
    updateMany?: Prisma.ResourceUpdateManyInput;
    deleteMany?: Prisma.ResourceDeleteManyInput;
};
export type ResourceWhereInput = {
    AND?: Prisma.ResourceWhereInput | Prisma.ResourceWhereInput[];
    OR?: Prisma.ResourceWhereInput[];
    NOT?: Prisma.ResourceWhereInput | Prisma.ResourceWhereInput[];
    title?: Prisma.StringFilter<"Resource"> | string;
    url?: Prisma.StringFilter<"Resource"> | string;
};
export type ResourceUpdateManyInput = {
    where: Prisma.ResourceWhereInput;
    data: Prisma.ResourceUpdateInput;
};
export type ResourceDeleteManyInput = {
    where: Prisma.ResourceWhereInput;
};
export type ResourceUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ResourceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    title?: boolean;
    url?: boolean;
}, ExtArgs["result"]["resource"]>;
export type ResourceSelectScalar = {
    title?: boolean;
    url?: boolean;
};
export type ResourceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"title" | "url", ExtArgs["result"]["resource"]>;
export type $ResourcePayload = {
    name: "Resource";
    objects: {};
    scalars: {
        title: string;
        url: string;
    };
    composites: {};
};
export type ResourceGetPayload<S extends boolean | null | undefined | ResourceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ResourcePayload, S>;
/**
 * Fields of the Resource model
 */
export interface ResourceFieldRefs {
    readonly title: Prisma.FieldRef<"Resource", 'String'>;
    readonly url: Prisma.FieldRef<"Resource", 'String'>;
}
/**
 * Resource without action
 */
export type ResourceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: Prisma.ResourceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Resource
     */
    omit?: Prisma.ResourceOmit<ExtArgs> | null;
};
//# sourceMappingURL=Resource.d.ts.map
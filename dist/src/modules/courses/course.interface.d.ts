export interface CreateCourseInput {
    title: string;
    slug: string;
    description: string;
    price: number;
    category: string;
    level: string;
    tags?: string[];
}
export interface UpdateCourseInput {
    title?: string;
    description?: string;
    price?: number;
    category?: string;
    level?: string;
    tags?: string[];
    isPublished?: boolean;
    thumbnail?: string;
}
export interface AssignMentorInput {
    courseId: string;
    mentorId: string;
}
//# sourceMappingURL=course.interface.d.ts.map
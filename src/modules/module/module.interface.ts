export interface CreateModuleInput {
  title: string;
  order: number;
  courseId: string;
}

export interface UpdateModuleInput {
  title?: string;
  order?: number;
}

export interface CreateLessonInput {
  title: string;
  type: string;
  videoUrl?: string;
  duration?: number;
  isFree?: boolean;
  resources?: { title: string; url: string }[];
  moduleId: string;
}

export interface UpdateLessonInput {
  title?: string;
  type?: string;
  videoUrl?: string;
  duration?: number;
  isFree?: boolean;
  resources?: { title: string; url: string }[];
}

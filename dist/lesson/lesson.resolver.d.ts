import { LessonService } from 'src/no-spec/lesson/lesson.service';
import { CreateLessonInput } from './lesson.input';
export declare class LessonResolver {
    private lessonService;
    constructor(lessonService: LessonService);
    lesson(id: string): Promise<import("./lesson.entity").Lesson>;
    lessons(): Promise<import("./lesson.entity").Lesson[]>;
    createLesson(createLessonInput: CreateLessonInput): Promise<import("./lesson.entity").Lesson>;
}

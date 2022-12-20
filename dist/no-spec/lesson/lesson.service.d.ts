import { Lesson } from 'src/lesson/lesson.entity';
import { Repository } from 'typeorm';
import { CreateLessonInput } from 'src/lesson/lesson.input';
export declare class LessonService {
    private lessonrepository;
    constructor(lessonrepository: Repository<Lesson>);
    getLesson(id: string): Promise<Lesson>;
    getLessons(): Promise<Lesson[]>;
    createLesson(createLessonInput: CreateLessonInput): Promise<Lesson>;
}

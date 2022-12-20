import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { Lesson } from 'src/lesson/lesson.entity';
import { Repository } from 'typeorm';
import { CreateLessonInput } from 'src/lesson/lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonrepository: Repository<Lesson>,
  ) {}

  async getLesson(id: string): Promise<Lesson> {
    return this.lessonrepository.findOne({
      where: { id },
    });
  }

  async getLessons(): Promise<Lesson[]> {
    return this.lessonrepository.find();
  }

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate, students } = createLessonInput;
    const lesson = this.lessonrepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
      students,
    });
    return this.lessonrepository.save(lesson);
  }

  async assignStudentsToLesson(
    lessonId: string,
    studentIds: string[],
  ): Promise<Lesson> {
    const lesson = await this.lessonrepository.findOne({
      where: { id: lessonId },
    });
    lesson.students = [...lesson.students, ...studentIds];
    return this.lessonrepository.save(lesson);
  }
}

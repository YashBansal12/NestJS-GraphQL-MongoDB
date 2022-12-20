import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonService } from 'src/no-spec/lesson/lesson.service';
import { StudentModule } from 'src/student/student.module';
import { Lesson } from './lesson.entity';
import { LessonResolver } from './lesson.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson]), StudentModule],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}

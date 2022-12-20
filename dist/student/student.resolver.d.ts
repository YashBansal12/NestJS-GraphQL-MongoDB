import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';
export declare class StudentResolver {
    private studentService;
    constructor(studentService: StudentService);
    createStudent(createStudentInput: CreateStudentInput): Promise<import("./student.entity").Student>;
}

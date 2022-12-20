"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const lesson_entity_1 = require("./lesson/lesson.entity");
const lesson_module_1 = require("./lesson/lesson.module");
const lesson_service_1 = require("./no-spec/lesson/lesson.service");
const student_entity_1 = require("./student/student.entity");
const student_module_1 = require("./student/student.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mongodb',
                url: 'mongodb://localhost/school',
                synchronize: true,
                useUnifiedTopology: true,
                entities: [lesson_entity_1.Lesson, student_entity_1.Student],
            }),
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: true,
            }),
            lesson_module_1.LessonModule,
            student_module_1.StudentModule,
        ],
        providers: [lesson_service_1.LessonService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lesson_service_1 = require("../no-spec/lesson/lesson.service");
const lesson_entity_1 = require("./lesson.entity");
const lesson_resolver_1 = require("./lesson.resolver");
let LessonModule = class LessonModule {
};
LessonModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([lesson_entity_1.Lesson])],
        providers: [lesson_resolver_1.LessonResolver, lesson_service_1.LessonService],
    })
], LessonModule);
exports.LessonModule = LessonModule;
//# sourceMappingURL=lesson.module.js.map
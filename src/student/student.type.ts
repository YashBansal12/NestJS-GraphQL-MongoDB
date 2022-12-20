import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Student')
export class StudentType {
  @Field()
  id: string;

  @Field()
  firstname: string;

  @Field()
  lastname: string;
}

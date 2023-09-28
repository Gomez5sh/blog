import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerCreateNestedManyWithoutQuestionInput } from "../inputs/AnswerCreateNestedManyWithoutQuestionInput";
import { QuestionCreateoptionsInput } from "../inputs/QuestionCreateoptionsInput";

@TypeGraphQL.InputType("QuestionCreateWithoutPostInput", {})
export class QuestionCreateWithoutPostInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  question!: string;

  @TypeGraphQL.Field((_type) => QuestionCreateoptionsInput, {
    nullable: true,
  })
  options?: QuestionCreateoptionsInput | undefined;

  @TypeGraphQL.Field((_type) => AnswerCreateNestedManyWithoutQuestionInput, {
    nullable: true,
  })
  Answer?: AnswerCreateNestedManyWithoutQuestionInput | undefined;
}

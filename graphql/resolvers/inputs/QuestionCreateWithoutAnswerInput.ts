import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutQuestionsInput } from "../inputs/PostCreateNestedOneWithoutQuestionsInput";
import { QuestionCreateoptionsInput } from "../inputs/QuestionCreateoptionsInput";

@TypeGraphQL.InputType("QuestionCreateWithoutAnswerInput", {})
export class QuestionCreateWithoutAnswerInput {
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

  @TypeGraphQL.Field((_type) => PostCreateNestedOneWithoutQuestionsInput, {
    nullable: false,
  })
  post!: PostCreateNestedOneWithoutQuestionsInput;
}

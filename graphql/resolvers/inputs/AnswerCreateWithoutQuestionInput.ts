import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutAnswersInput } from "../inputs/UserCreateNestedOneWithoutAnswersInput";

@TypeGraphQL.InputType("AnswerCreateWithoutQuestionInput", {})
export class AnswerCreateWithoutQuestionInput {
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
  content!: string;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutAnswersInput, {
    nullable: false,
  })
  author!: UserCreateNestedOneWithoutAnswersInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerCreateWithoutQuestionInput } from "../inputs/AnswerCreateWithoutQuestionInput";
import { AnswerUpdateWithoutQuestionInput } from "../inputs/AnswerUpdateWithoutQuestionInput";
import { AnswerWhereUniqueInput } from "../inputs/AnswerWhereUniqueInput";

@TypeGraphQL.InputType("AnswerUpsertWithWhereUniqueWithoutQuestionInput", {})
export class AnswerUpsertWithWhereUniqueWithoutQuestionInput {
  @TypeGraphQL.Field((_type) => AnswerWhereUniqueInput, {
    nullable: false,
  })
  where!: AnswerWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AnswerUpdateWithoutQuestionInput, {
    nullable: false,
  })
  update!: AnswerUpdateWithoutQuestionInput;

  @TypeGraphQL.Field((_type) => AnswerCreateWithoutQuestionInput, {
    nullable: false,
  })
  create!: AnswerCreateWithoutQuestionInput;
}

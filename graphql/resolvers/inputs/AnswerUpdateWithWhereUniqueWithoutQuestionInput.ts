import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerUpdateWithoutQuestionInput } from "../inputs/AnswerUpdateWithoutQuestionInput";
import { AnswerWhereUniqueInput } from "../inputs/AnswerWhereUniqueInput";

@TypeGraphQL.InputType("AnswerUpdateWithWhereUniqueWithoutQuestionInput", {})
export class AnswerUpdateWithWhereUniqueWithoutQuestionInput {
  @TypeGraphQL.Field((_type) => AnswerWhereUniqueInput, {
    nullable: false,
  })
  where!: AnswerWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AnswerUpdateWithoutQuestionInput, {
    nullable: false,
  })
  data!: AnswerUpdateWithoutQuestionInput;
}

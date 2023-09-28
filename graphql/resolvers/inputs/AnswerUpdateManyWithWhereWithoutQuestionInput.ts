import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerScalarWhereInput } from "../inputs/AnswerScalarWhereInput";
import { AnswerUpdateManyMutationInput } from "../inputs/AnswerUpdateManyMutationInput";

@TypeGraphQL.InputType("AnswerUpdateManyWithWhereWithoutQuestionInput", {})
export class AnswerUpdateManyWithWhereWithoutQuestionInput {
  @TypeGraphQL.Field((_type) => AnswerScalarWhereInput, {
    nullable: false,
  })
  where!: AnswerScalarWhereInput;

  @TypeGraphQL.Field((_type) => AnswerUpdateManyMutationInput, {
    nullable: false,
  })
  data!: AnswerUpdateManyMutationInput;
}

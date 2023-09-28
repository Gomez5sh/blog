import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerUpdateWithoutAuthorInput } from "../inputs/AnswerUpdateWithoutAuthorInput";
import { AnswerWhereUniqueInput } from "../inputs/AnswerWhereUniqueInput";

@TypeGraphQL.InputType("AnswerUpdateWithWhereUniqueWithoutAuthorInput", {})
export class AnswerUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field((_type) => AnswerWhereUniqueInput, {
    nullable: false,
  })
  where!: AnswerWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AnswerUpdateWithoutAuthorInput, {
    nullable: false,
  })
  data!: AnswerUpdateWithoutAuthorInput;
}

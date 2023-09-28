import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerCreateWithoutAuthorInput } from "../inputs/AnswerCreateWithoutAuthorInput";
import { AnswerUpdateWithoutAuthorInput } from "../inputs/AnswerUpdateWithoutAuthorInput";
import { AnswerWhereUniqueInput } from "../inputs/AnswerWhereUniqueInput";

@TypeGraphQL.InputType("AnswerUpsertWithWhereUniqueWithoutAuthorInput", {})
export class AnswerUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field((_type) => AnswerWhereUniqueInput, {
    nullable: false,
  })
  where!: AnswerWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AnswerUpdateWithoutAuthorInput, {
    nullable: false,
  })
  update!: AnswerUpdateWithoutAuthorInput;

  @TypeGraphQL.Field((_type) => AnswerCreateWithoutAuthorInput, {
    nullable: false,
  })
  create!: AnswerCreateWithoutAuthorInput;
}

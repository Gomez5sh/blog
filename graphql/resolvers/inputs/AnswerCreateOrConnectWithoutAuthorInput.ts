import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerCreateWithoutAuthorInput } from "../inputs/AnswerCreateWithoutAuthorInput";
import { AnswerWhereUniqueInput } from "../inputs/AnswerWhereUniqueInput";

@TypeGraphQL.InputType("AnswerCreateOrConnectWithoutAuthorInput", {})
export class AnswerCreateOrConnectWithoutAuthorInput {
  @TypeGraphQL.Field((_type) => AnswerWhereUniqueInput, {
    nullable: false,
  })
  where!: AnswerWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AnswerCreateWithoutAuthorInput, {
    nullable: false,
  })
  create!: AnswerCreateWithoutAuthorInput;
}

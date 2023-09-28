import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerWhereInput } from "../inputs/AnswerWhereInput";

@TypeGraphQL.InputType("AnswerListRelationFilter", {})
export class AnswerListRelationFilter {
  @TypeGraphQL.Field((_type) => AnswerWhereInput, {
    nullable: true,
  })
  every?: AnswerWhereInput | undefined;

  @TypeGraphQL.Field((_type) => AnswerWhereInput, {
    nullable: true,
  })
  some?: AnswerWhereInput | undefined;

  @TypeGraphQL.Field((_type) => AnswerWhereInput, {
    nullable: true,
  })
  none?: AnswerWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuoteWhereInput } from "../inputs/QuoteWhereInput";

@TypeGraphQL.InputType("QuoteListRelationFilter", {})
export class QuoteListRelationFilter {
  @TypeGraphQL.Field((_type) => QuoteWhereInput, {
    nullable: true,
  })
  every?: QuoteWhereInput | undefined;

  @TypeGraphQL.Field((_type) => QuoteWhereInput, {
    nullable: true,
  })
  some?: QuoteWhereInput | undefined;

  @TypeGraphQL.Field((_type) => QuoteWhereInput, {
    nullable: true,
  })
  none?: QuoteWhereInput | undefined;
}

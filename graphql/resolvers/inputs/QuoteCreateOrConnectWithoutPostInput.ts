import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuoteCreateWithoutPostInput } from "../inputs/QuoteCreateWithoutPostInput";
import { QuoteWhereUniqueInput } from "../inputs/QuoteWhereUniqueInput";

@TypeGraphQL.InputType("QuoteCreateOrConnectWithoutPostInput", {})
export class QuoteCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field((_type) => QuoteWhereUniqueInput, {
    nullable: false,
  })
  where!: QuoteWhereUniqueInput;

  @TypeGraphQL.Field((_type) => QuoteCreateWithoutPostInput, {
    nullable: false,
  })
  create!: QuoteCreateWithoutPostInput;
}

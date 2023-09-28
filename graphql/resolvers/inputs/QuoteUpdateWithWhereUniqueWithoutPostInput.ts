import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuoteUpdateWithoutPostInput } from "../inputs/QuoteUpdateWithoutPostInput";
import { QuoteWhereUniqueInput } from "../inputs/QuoteWhereUniqueInput";

@TypeGraphQL.InputType("QuoteUpdateWithWhereUniqueWithoutPostInput", {})
export class QuoteUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field((_type) => QuoteWhereUniqueInput, {
    nullable: false,
  })
  where!: QuoteWhereUniqueInput;

  @TypeGraphQL.Field((_type) => QuoteUpdateWithoutPostInput, {
    nullable: false,
  })
  data!: QuoteUpdateWithoutPostInput;
}

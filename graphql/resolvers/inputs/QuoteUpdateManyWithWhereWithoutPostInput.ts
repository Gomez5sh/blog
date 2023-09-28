import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuoteScalarWhereInput } from "../inputs/QuoteScalarWhereInput";
import { QuoteUpdateManyMutationInput } from "../inputs/QuoteUpdateManyMutationInput";

@TypeGraphQL.InputType("QuoteUpdateManyWithWhereWithoutPostInput", {})
export class QuoteUpdateManyWithWhereWithoutPostInput {
  @TypeGraphQL.Field((_type) => QuoteScalarWhereInput, {
    nullable: false,
  })
  where!: QuoteScalarWhereInput;

  @TypeGraphQL.Field((_type) => QuoteUpdateManyMutationInput, {
    nullable: false,
  })
  data!: QuoteUpdateManyMutationInput;
}

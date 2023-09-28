import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuoteUpdateInput } from "../../../inputs/QuoteUpdateInput";
import { QuoteWhereUniqueInput } from "../../../inputs/QuoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneQuoteArgs {
  @TypeGraphQL.Field((_type) => QuoteUpdateInput, {
    nullable: false,
  })
  data!: QuoteUpdateInput;

  @TypeGraphQL.Field((_type) => QuoteWhereUniqueInput, {
    nullable: false,
  })
  where!: QuoteWhereUniqueInput;
}

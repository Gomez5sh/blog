import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuoteCreateInput } from "../../../inputs/QuoteCreateInput";
import { QuoteUpdateInput } from "../../../inputs/QuoteUpdateInput";
import { QuoteWhereUniqueInput } from "../../../inputs/QuoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneQuoteArgs {
  @TypeGraphQL.Field((_type) => QuoteWhereUniqueInput, {
    nullable: false,
  })
  where!: QuoteWhereUniqueInput;

  @TypeGraphQL.Field((_type) => QuoteCreateInput, {
    nullable: false,
  })
  create!: QuoteCreateInput;

  @TypeGraphQL.Field((_type) => QuoteUpdateInput, {
    nullable: false,
  })
  update!: QuoteUpdateInput;
}

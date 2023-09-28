import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuoteWhereUniqueInput } from "../../../inputs/QuoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueQuoteArgs {
  @TypeGraphQL.Field((_type) => QuoteWhereUniqueInput, {
    nullable: false,
  })
  where!: QuoteWhereUniqueInput;
}

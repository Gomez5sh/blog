import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuoteCreateInput } from "../../../inputs/QuoteCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneQuoteArgs {
  @TypeGraphQL.Field((_type) => QuoteCreateInput, {
    nullable: false,
  })
  data!: QuoteCreateInput;
}

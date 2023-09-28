import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuoteWhereInput } from "../../../inputs/QuoteWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyQuoteArgs {
  @TypeGraphQL.Field((_type) => QuoteWhereInput, {
    nullable: true,
  })
  where?: QuoteWhereInput | undefined;
}

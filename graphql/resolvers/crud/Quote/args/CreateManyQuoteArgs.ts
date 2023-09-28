import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuoteCreateManyInput } from "../../../inputs/QuoteCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyQuoteArgs {
  @TypeGraphQL.Field((_type) => [QuoteCreateManyInput], {
    nullable: false,
  })
  data!: QuoteCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}

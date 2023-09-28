import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuoteUpdateManyMutationInput } from "../../../inputs/QuoteUpdateManyMutationInput";
import { QuoteWhereInput } from "../../../inputs/QuoteWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyQuoteArgs {
  @TypeGraphQL.Field((_type) => QuoteUpdateManyMutationInput, {
    nullable: false,
  })
  data!: QuoteUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => QuoteWhereInput, {
    nullable: true,
  })
  where?: QuoteWhereInput | undefined;
}

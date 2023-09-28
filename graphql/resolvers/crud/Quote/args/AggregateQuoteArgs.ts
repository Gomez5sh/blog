import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuoteOrderByWithRelationInput } from "../../../inputs/QuoteOrderByWithRelationInput";
import { QuoteWhereInput } from "../../../inputs/QuoteWhereInput";
import { QuoteWhereUniqueInput } from "../../../inputs/QuoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateQuoteArgs {
  @TypeGraphQL.Field((_type) => QuoteWhereInput, {
    nullable: true,
  })
  where?: QuoteWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [QuoteOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: QuoteOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => QuoteWhereUniqueInput, {
    nullable: true,
  })
  cursor?: QuoteWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}

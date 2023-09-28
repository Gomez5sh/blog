import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuoteOrderByWithAggregationInput } from "../../../inputs/QuoteOrderByWithAggregationInput";
import { QuoteScalarWhereWithAggregatesInput } from "../../../inputs/QuoteScalarWhereWithAggregatesInput";
import { QuoteWhereInput } from "../../../inputs/QuoteWhereInput";
import { QuoteScalarFieldEnum } from "../../../../enums/QuoteScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByQuoteArgs {
  @TypeGraphQL.Field((_type) => QuoteWhereInput, {
    nullable: true,
  })
  where?: QuoteWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [QuoteOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: QuoteOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [QuoteScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    "id" | "createdAt" | "updatedAt" | "content" | "author" | "postId"
  >;

  @TypeGraphQL.Field((_type) => QuoteScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: QuoteScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuoteCountOrderByAggregateInput } from "../inputs/QuoteCountOrderByAggregateInput";
import { QuoteMaxOrderByAggregateInput } from "../inputs/QuoteMaxOrderByAggregateInput";
import { QuoteMinOrderByAggregateInput } from "../inputs/QuoteMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("QuoteOrderByWithAggregationInput", {})
export class QuoteOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  content?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  author?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => QuoteCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: QuoteCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => QuoteMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: QuoteMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => QuoteMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: QuoteMinOrderByAggregateInput | undefined;
}

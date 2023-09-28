import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionCountOrderByAggregateInput } from "../inputs/QuestionCountOrderByAggregateInput";
import { QuestionMaxOrderByAggregateInput } from "../inputs/QuestionMaxOrderByAggregateInput";
import { QuestionMinOrderByAggregateInput } from "../inputs/QuestionMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("QuestionOrderByWithAggregationInput", {})
export class QuestionOrderByWithAggregationInput {
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
  question?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  options?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => QuestionCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: QuestionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => QuestionMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: QuestionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => QuestionMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: QuestionMinOrderByAggregateInput | undefined;
}

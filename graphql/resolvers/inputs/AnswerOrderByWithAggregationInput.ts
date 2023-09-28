import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AnswerCountOrderByAggregateInput } from "../inputs/AnswerCountOrderByAggregateInput";
import { AnswerMaxOrderByAggregateInput } from "../inputs/AnswerMaxOrderByAggregateInput";
import { AnswerMinOrderByAggregateInput } from "../inputs/AnswerMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AnswerOrderByWithAggregationInput", {})
export class AnswerOrderByWithAggregationInput {
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
  questionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  authorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => AnswerCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: AnswerCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => AnswerMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: AnswerMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => AnswerMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: AnswerMinOrderByAggregateInput | undefined;
}

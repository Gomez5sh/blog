import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CodeCountOrderByAggregateInput } from "../inputs/CodeCountOrderByAggregateInput";
import { CodeMaxOrderByAggregateInput } from "../inputs/CodeMaxOrderByAggregateInput";
import { CodeMinOrderByAggregateInput } from "../inputs/CodeMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CodeOrderByWithAggregationInput", {})
export class CodeOrderByWithAggregationInput {
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
  language?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => CodeCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: CodeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => CodeMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: CodeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => CodeMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: CodeMinOrderByAggregateInput | undefined;
}

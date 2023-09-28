import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FileCountOrderByAggregateInput } from "../inputs/FileCountOrderByAggregateInput";
import { FileMaxOrderByAggregateInput } from "../inputs/FileMaxOrderByAggregateInput";
import { FileMinOrderByAggregateInput } from "../inputs/FileMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FileOrderByWithAggregationInput", {})
export class FileOrderByWithAggregationInput {
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
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  postId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => FileCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: FileCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => FileMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: FileMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => FileMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: FileMinOrderByAggregateInput | undefined;
}

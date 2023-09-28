import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LinkCountOrderByAggregateInput } from "../inputs/LinkCountOrderByAggregateInput";
import { LinkMaxOrderByAggregateInput } from "../inputs/LinkMaxOrderByAggregateInput";
import { LinkMinOrderByAggregateInput } from "../inputs/LinkMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LinkOrderByWithAggregationInput", {})
export class LinkOrderByWithAggregationInput {
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

  @TypeGraphQL.Field((_type) => LinkCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: LinkCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => LinkMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: LinkMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => LinkMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: LinkMinOrderByAggregateInput | undefined;
}
